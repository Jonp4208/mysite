const fs = require('fs');
const https = require('https');
const path = require('path');

// Categories and image types
const categories = ['gym', 'automotive', 'photography', 'restaurant', 'retail', 'service'];
const imageTypes = ['thumbnail', 'main', 'gallery-1', 'gallery-2', 'gallery-3'];

// Unsplash search terms for each category
const searchTerms = {
  gym: ['gym,fitness', 'gym,interior', 'workout', 'fitness,class', 'gym,equipment'],
  automotive: ['car,dealership', 'car,showroom', 'car,sales', 'car,service', 'car,luxury'],
  photography: ['wedding,photography', 'wedding,bride', 'wedding,couple', 'wedding,ceremony', 'wedding,portrait'],
  restaurant: ['restaurant,food', 'restaurant,interior', 'restaurant,dining', 'food,gourmet', 'restaurant,chef'],
  retail: ['boutique,clothing', 'boutique,shop', 'clothing,fashion', 'boutique,retail', 'shopping,accessories'],
  service: ['service,business', 'plumbing,work', 'home,repair', 'service,professional', 'contractor,work']
};

// Function to download an image
function downloadImage(url, filepath) {
  return new Promise((resolve, reject) => {
    https.get(url, (response) => {
      if (response.statusCode !== 200) {
        reject(new Error(`Failed to download image: ${response.statusCode}`));
        return;
      }

      const fileStream = fs.createWriteStream(filepath);
      response.pipe(fileStream);

      fileStream.on('finish', () => {
        fileStream.close();
        console.log(`Downloaded: ${filepath}`);
        resolve();
      });

      fileStream.on('error', (err) => {
        fs.unlink(filepath, () => {}); // Delete the file if there was an error
        reject(err);
      });
    }).on('error', (err) => {
      reject(err);
    });
  });
}

// Create directories if they don't exist
categories.forEach(category => {
  const dir = path.join('public', 'images', 'portfolio', category);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
    console.log(`Created directory: ${dir}`);
  }
});

// Download all images
async function downloadAllImages() {
  for (const category of categories) {
    for (let i = 0; i < imageTypes.length; i++) {
      const imageType = imageTypes[i];
      const searchTerm = searchTerms[category][i];
      const width = imageType === 'main' ? 1200 : 600;
      const height = imageType === 'main' ? 600 : 400;
      const url = `https://source.unsplash.com/${width}x${height}/?${searchTerm}`;
      const filepath = path.join('public', 'images', 'portfolio', category, `${imageType}.jpg`);
      
      try {
        await downloadImage(url, filepath);
        // Add a small delay to avoid rate limiting
        await new Promise(resolve => setTimeout(resolve, 500));
      } catch (error) {
        console.error(`Error downloading ${url}:`, error);
      }
    }
  }
  console.log('All images downloaded successfully!');
}

downloadAllImages();

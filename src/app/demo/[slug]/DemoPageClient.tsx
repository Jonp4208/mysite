'use client';

import { useRouter } from 'next/navigation';
import { Project } from '@/data/portfolio-demos';
import { FaArrowLeft } from 'react-icons/fa';

// Import all demo pages
import dynamic from 'next/dynamic';

// Dynamically import the demo pages
const GymDemoPage = dynamic(() => import('../iron-athletics/GymDemoPage'));
const CarDemoPage = dynamic(() => import('../calhoun-motors/CarDemoPage'));
const RealtyDemoPage = dynamic(() => import('../calhoun-realty/RealtyDemoPage'));
const PhotographyDemoPage = dynamic(() => import('../eternal-moments/PhotographyDemoPage'));
const RestaurantDemoPage = dynamic(() => import('../southern-spice/RestaurantDemoPage'));
const RetailDemoPage = dynamic(() => import('../mountain-boutique/RetailDemoPage'));
const PlumbingDemoPage = dynamic(() => import('../calhoun-plumbing/PlumbingDemoPage'));

export default function DemoPageClient({ project }: { project: Project }) {
  // Use the appropriate demo page based on the project ID
  const router = useRouter();

  // For the Iron Athletics project, use the custom gym demo page
  if (project.id === 'iron-athletics') {
    return <GymDemoPage project={project} />;
  }

  // For the Calhoun Motors project, use the custom car demo page
  if (project.id === 'calhoun-motors') {
    return <CarDemoPage project={project} />;
  }

  // For the Calhoun Realty project, use the custom real estate demo page
  if (project.id === 'calhoun-realty') {
    return <RealtyDemoPage project={project} />;
  }

  // For the Eternal Moments Photography project, use the custom photography demo page
  if (project.id === 'eternal-moments') {
    return <PhotographyDemoPage project={project} />;
  }

  // For the Southern Spice Restaurant project, use the custom restaurant demo page
  if (project.id === 'southern-spice') {
    return <RestaurantDemoPage project={project} />;
  }

  // For the Mountain Boutique project, use the custom retail demo page
  if (project.id === 'mountain-boutique') {
    return <RetailDemoPage project={project} />;
  }

  // For the Calhoun Plumbing project, use the custom plumbing service demo page
  if (project.id === 'calhoun-plumbing') {
    return <PlumbingDemoPage project={project} />;
  }

  // For all other projects, use the default demo page
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Demo Header */}
      <div className="bg-gradient-to-br from-blue-900 via-indigo-800 to-purple-900 py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">{project.title}</h1>
              <p className="text-xl text-blue-200">{project.category} Website Demo</p>
            </div>
            <button
              onClick={() => router.push('/portfolio')}
              className="mt-6 md:mt-0 flex items-center px-6 py-3 bg-white/10 text-white rounded-md hover:bg-white/20 transition-colors"
            >
              <FaArrowLeft className="mr-2" /> Back to Portfolio
            </button>
          </div>
        </div>
      </div>

      {/* Demo Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          {/* Demo Image */}
          <div className="relative h-96 overflow-hidden">
            <img
              src={project.images.main}
              alt={project.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-8">
              <h2 className="text-3xl font-bold text-white mb-2">Demo Preview</h2>
              <p className="text-xl text-blue-200">This is a portfolio example for {project.category} websites</p>
            </div>
          </div>

          <div className="p-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">About This Demo</h3>
                <p className="text-lg text-gray-700 mb-6">
                  This is a demonstration of the type of website I can create for {project.category} businesses like yours.
                  While this is not a live website, it showcases the design style, features, and functionality
                  that would be included in a custom website built specifically for your business.
                </p>

                <div className="mb-8">
                  <h4 className="text-xl font-bold text-gray-900 mb-3">Key Features</h4>
                  <ul className="space-y-2">
                    {project.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-8">
                  <h4 className="text-xl font-bold text-gray-900 mb-3">Client Testimonial</h4>
                  {project.testimonial && (
                    <div className="bg-blue-50 rounded-lg p-6 border-l-4 border-blue-600">
                      <blockquote className="text-lg italic text-gray-700 mb-4">
                        "{project.testimonial.quote}"
                      </blockquote>
                      <div className="font-bold text-gray-900">{project.testimonial.author}</div>
                      <div className="text-blue-600">{project.testimonial.position}</div>
                    </div>
                  )}
                </div>

                <div className="mb-8">
                  <h4 className="text-xl font-bold text-gray-900 mb-3">Want Something Similar?</h4>
                  <p className="text-gray-700 mb-4">
                    I can create a custom website for your {project.category.toLowerCase()} business with similar features and design,
                    tailored specifically to your brand and needs. Contact me today to discuss your project!
                  </p>
                  <a
                    href="/contact"
                    className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200"
                  >
                    Get a Free Quote
                  </a>
                </div>
              </div>

              <div>
                <div className="bg-gray-50 rounded-lg p-6 mb-6">
                  <h4 className="text-lg font-bold text-gray-900 mb-4">Demo Details</h4>
                  <ul className="space-y-3">
                    <li className="flex justify-between">
                      <span className="text-gray-600">Category:</span>
                      <span className="font-medium text-gray-900 capitalize">{project.category}</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-gray-600">Client Type:</span>
                      <span className="font-medium text-gray-900">{project.client}</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-gray-600">Created:</span>
                      <span className="font-medium text-gray-900">{project.date}</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-gray-50 rounded-lg p-6 mb-6">
                  <h4 className="text-lg font-bold text-gray-900 mb-4">Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                      <span key={index} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="bg-gray-50 rounded-lg p-6">
                  <h4 className="text-lg font-bold text-gray-900 mb-4">Gallery</h4>
                  <div className="grid grid-cols-1 gap-4">
                    {project.images.gallery.map((image, index) => (
                      <div key={index} className="rounded-lg overflow-hidden">
                        <img
                          src={image}
                          alt={`${project.title} gallery ${index + 1}`}
                          className="w-full h-auto"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-blue-600 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Ready to Create Your Own Website?</h2>
            <p className="text-xl text-blue-100 mb-8">
              I can build a custom website for your {project.category.toLowerCase()} business that helps you attract more customers and grow your business.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-lg font-medium rounded-md text-blue-600 bg-white hover:bg-blue-50 transition-colors duration-200"
            >
              Contact Me Today
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

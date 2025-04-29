import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/lib/auth';
import dbConnect from '@/lib/db';
import Setting from '@/models/Setting';

// GET /api/settings - Get all settings or settings by category
export async function GET(request: Request) {
  try {
    await dbConnect();
    
    // Get URL parameters
    const { searchParams } = new URL(request.url);
    const category = searchParams.get('category');
    
    // Build query
    const query: any = {};
    
    // Filter by category if specified
    if (category) {
      query.category = category;
    }
    
    // Get settings
    const settings = await Setting.find(query);
    
    // Convert to key-value object for easier consumption
    const settingsObject: Record<string, any> = {};
    
    settings.forEach(setting => {
      if (!settingsObject[setting.category]) {
        settingsObject[setting.category] = {};
      }
      settingsObject[setting.category][setting.key] = setting.value;
    });
    
    return NextResponse.json(settingsObject);
  } catch (error) {
    console.error('Error fetching settings:', error);
    return NextResponse.json(
      { error: 'An error occurred while fetching settings' },
      { status: 500 }
    );
  }
}

// POST /api/settings - Update settings
export async function POST(request: Request) {
  try {
    // Check if user is authenticated and is an admin
    const session = await getServerSession(authOptions);
    
    if (!session || session.user.role !== 'admin') {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }
    
    await dbConnect();
    
    // Parse request body
    const body = await request.json();
    
    // Validate body structure
    if (typeof body !== 'object' || body === null) {
      return NextResponse.json(
        { error: 'Invalid request body' },
        { status: 400 }
      );
    }
    
    // Process each category
    const updatedSettings = [];
    
    for (const [category, settings] of Object.entries(body)) {
      if (typeof settings !== 'object' || settings === null) {
        continue;
      }
      
      // Process each setting in the category
      for (const [key, value] of Object.entries(settings as Record<string, any>)) {
        // Find existing setting or create new one
        let setting = await Setting.findOne({ category, key });
        
        if (setting) {
          // Update existing setting
          setting.value = value;
          await setting.save();
        } else {
          // Create new setting
          setting = await Setting.create({
            category,
            key,
            value,
          });
        }
        
        updatedSettings.push(setting);
      }
    }
    
    return NextResponse.json({ success: true, settings: updatedSettings });
  } catch (error: any) {
    console.error('Error updating settings:', error);
    return NextResponse.json(
      { error: error.message || 'An error occurred while updating settings' },
      { status: 500 }
    );
  }
}

// DELETE /api/settings - Delete a setting
export async function DELETE(request: Request) {
  try {
    // Check if user is authenticated and is an admin
    const session = await getServerSession(authOptions);
    
    if (!session || session.user.role !== 'admin') {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }
    
    await dbConnect();
    
    // Get URL parameters
    const { searchParams } = new URL(request.url);
    const category = searchParams.get('category');
    const key = searchParams.get('key');
    
    if (!category || !key) {
      return NextResponse.json(
        { error: 'Category and key are required' },
        { status: 400 }
      );
    }
    
    // Find and delete the setting
    const result = await Setting.deleteOne({ category, key });
    
    if (result.deletedCount === 0) {
      return NextResponse.json(
        { error: 'Setting not found' },
        { status: 404 }
      );
    }
    
    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error('Error deleting setting:', error);
    return NextResponse.json(
      { error: error.message || 'An error occurred while deleting setting' },
      { status: 500 }
    );
  }
}

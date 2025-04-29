import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/lib/auth';
import dbConnect from '@/lib/db';
import BlogPost from '@/models/BlogPost';
import { isEditorOrAdmin } from '@/lib/auth';

// GET /api/blog - Get all blog posts
export async function GET(request: Request) {
  try {
    await dbConnect();
    
    // Get URL parameters
    const { searchParams } = new URL(request.url);
    const published = searchParams.get('published');
    const limit = searchParams.get('limit');
    const page = searchParams.get('page') || '1';
    const tag = searchParams.get('tag');
    
    // Build query
    const query: any = {};
    
    // Filter by published status if specified
    if (published === 'true') {
      query.published = true;
    } else if (published === 'false') {
      query.published = false;
    }
    
    // Filter by tag if specified
    if (tag) {
      query.tags = tag;
    }
    
    // Pagination
    const pageSize = limit ? parseInt(limit) : 10;
    const pageNumber = parseInt(page);
    const skip = (pageNumber - 1) * pageSize;
    
    // Get posts
    const posts = await BlogPost.find(query)
      .sort({ publishedAt: -1 })
      .skip(skip)
      .limit(pageSize)
      .populate('author', 'name email');
    
    // Get total count for pagination
    const total = await BlogPost.countDocuments(query);
    
    return NextResponse.json({
      posts,
      pagination: {
        total,
        page: pageNumber,
        pageSize,
        totalPages: Math.ceil(total / pageSize),
      },
    });
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    return NextResponse.json(
      { error: 'An error occurred while fetching blog posts' },
      { status: 500 }
    );
  }
}

// POST /api/blog - Create a new blog post
export async function POST(request: Request) {
  try {
    // Check if user is authenticated and has permission
    const session = await getServerSession(authOptions);
    
    if (!session || !isEditorOrAdmin(session)) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }
    
    await dbConnect();
    
    // Parse request body
    const body = await request.json();
    const { title, slug, content, excerpt, coverImage, tags, published } = body;
    
    // Validate required fields
    if (!title || !slug || !content || !excerpt) {
      return NextResponse.json(
        { error: 'Title, slug, content, and excerpt are required' },
        { status: 400 }
      );
    }
    
    // Check if slug is unique
    const existingPost = await BlogPost.findOne({ slug });
    if (existingPost) {
      return NextResponse.json(
        { error: 'A post with this slug already exists' },
        { status: 400 }
      );
    }
    
    // Create post
    const post = await BlogPost.create({
      title,
      slug,
      content,
      excerpt,
      coverImage: coverImage || '',
      author: session.user.id,
      tags: tags || [],
      published: published || false,
      publishedAt: published ? new Date() : null,
    });
    
    return NextResponse.json(post, { status: 201 });
  } catch (error: any) {
    console.error('Error creating blog post:', error);
    return NextResponse.json(
      { error: error.message || 'An error occurred while creating blog post' },
      { status: 500 }
    );
  }
}

// PUT /api/blog - Update a blog post
export async function PUT(request: Request) {
  try {
    // Check if user is authenticated and has permission
    const session = await getServerSession(authOptions);
    
    if (!session || !isEditorOrAdmin(session)) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }
    
    await dbConnect();
    
    // Parse request body
    const body = await request.json();
    const { id, title, slug, content, excerpt, coverImage, tags, published } = body;
    
    // Validate required fields
    if (!id || !title || !slug || !content || !excerpt) {
      return NextResponse.json(
        { error: 'ID, title, slug, content, and excerpt are required' },
        { status: 400 }
      );
    }
    
    // Check if post exists
    const post = await BlogPost.findById(id);
    if (!post) {
      return NextResponse.json(
        { error: 'Post not found' },
        { status: 404 }
      );
    }
    
    // Check if slug is unique (if changed)
    if (slug !== post.slug) {
      const existingPost = await BlogPost.findOne({ slug });
      if (existingPost && existingPost._id.toString() !== id) {
        return NextResponse.json(
          { error: 'A post with this slug already exists' },
          { status: 400 }
        );
      }
    }
    
    // Update post
    post.title = title;
    post.slug = slug;
    post.content = content;
    post.excerpt = excerpt;
    post.coverImage = coverImage || '';
    post.tags = tags || [];
    
    // Update published status if changed
    if (published !== post.published) {
      post.published = published;
      if (published) {
        post.publishedAt = new Date();
      }
    }
    
    await post.save();
    
    return NextResponse.json(post);
  } catch (error: any) {
    console.error('Error updating blog post:', error);
    return NextResponse.json(
      { error: error.message || 'An error occurred while updating blog post' },
      { status: 500 }
    );
  }
}

// DELETE /api/blog - Delete a blog post
export async function DELETE(request: Request) {
  try {
    // Check if user is authenticated and has permission
    const session = await getServerSession(authOptions);
    
    if (!session || !isEditorOrAdmin(session)) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }
    
    await dbConnect();
    
    // Get URL parameters
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');
    
    if (!id) {
      return NextResponse.json(
        { error: 'Post ID is required' },
        { status: 400 }
      );
    }
    
    // Check if post exists
    const post = await BlogPost.findById(id);
    if (!post) {
      return NextResponse.json(
        { error: 'Post not found' },
        { status: 404 }
      );
    }
    
    // Delete post
    await post.deleteOne();
    
    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error('Error deleting blog post:', error);
    return NextResponse.json(
      { error: error.message || 'An error occurred while deleting blog post' },
      { status: 500 }
    );
  }
}

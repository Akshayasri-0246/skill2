// controllers/blogController.js
const Blog = require('../models/blogModel');

// CREATE BLOG
exports.createBlog = async (req, res) => {
  try {
    const { title, content, author } = req.body;

    if (!title || !content) {
      return res.status(400).json({ message: 'Title and content are required' });
    }

    const blog = await Blog.create({
      title,
      content,
      author: author || 'Anonymous'
    });

    res.status(201).json({
      message: 'Blog created successfully',
      blog
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// GET ALL BLOGS
exports.getBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find().sort({ createdAt: -1 });

    res.status(200).json({
      message: 'Blogs retrieved successfully',
      blogs,
      count: blogs.length
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

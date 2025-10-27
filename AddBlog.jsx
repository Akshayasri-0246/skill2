// AddBlog.jsx
import React, { useState } from 'react';
import axios from 'axios';
import './AddBlog.css';

function AddBlog() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title.trim() || !content.trim()) {
      setError('Title and content are required');
      setSuccess('');
      return;
    }

    try {
      const res = await axios.post('/api/blogs', { title, content });
      if (res.status === 201) {
        setSuccess('Blog created successfully');
        setError('');
        // optionally clear fields:
        // setTitle(''); setContent('');
      } else {
        setError('Error creating blog');
        setSuccess('');
      }
    } catch (err) {
      setError('Error creating blog');
      setSuccess('');
    }
  };

  return (
    <div className="add-blog-container">
      <h2>Create New Blog Post</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Blog Title</label>
        <input
          id="title"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <label htmlFor="content">Blog Content</label>
        <textarea
          id="content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />

        <button type="submit">Publish Blog</button>
      </form>

      {/* Show the actual error message (tests look for specific text) */}
      {error && <p className="error-text">{error}</p>}
      {success && <p className="success-text">{success}</p>}
    </div>
  );
}

export default AddBlog;

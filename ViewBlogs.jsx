// ViewBlogs.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './ViewBlogs.css';

function ViewBlogs() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await axios.get('/api/blogs');
        // tests expect data in res.data.blogs
        setBlogs(res.data.blogs || []);
      } catch (err) {
        setError('Unable to load blogs');
      } finally {
        setLoading(false);
      }
    };
    fetchBlogs();
  }, []);

  // Always render the page heading (tests expect this synchronously).
  return (
    <div className="view-blogs-container">
      <h2>All Blog Posts</h2>

      {/* Loading state */}
      {loading && <p>Loading blogs...</p>}

      {/* Error state — display the actual message (tests check content) */}
      {!loading && error && <p>{error}</p>}

      {/* Empty state */}
      {!loading && !error && blogs.length === 0 && <p>No blogs available yet</p>}

      {/* Blog grid */}
      {!loading && !error && blogs.length > 0 && (
        <div className="blog-grid">
          {blogs.map((blog) => (
            <div key={blog._id} className="blog-card">
              <h3>{blog.title}</h3>
              <p>By {blog.author}</p>
              <p>{blog.content}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default ViewBlogs;

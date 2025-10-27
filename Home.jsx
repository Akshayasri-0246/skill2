// Home.jsx
import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="home-container">
      <h1>BlogSpace Management System</h1>
      <div className="button-group">
        <Link to="/add-blog">
          <button>Add Blog</button>
        </Link>
        <Link to="/view-blogs">
          <button>View Blogs</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;

import React from 'react';
import BlogCard from './blog-card';

function Blog() {
  return (
    <div className="blog">
      <h1 className="blog__title">Recent Codepens</h1>
      <BlogCard project="NFL Schedule" hash="NRqXAq" />
      <BlogCard project="React Image Search" hash="qNQPgm" />
      <BlogCard project="Rotating Image Cube" hash="OXgaNy" />

    </div>
  );
}

module.exports = Blog;

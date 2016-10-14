import React from 'react';
import BlogCard from './blog-card';

function Blog() {
  return (
    <div className="blog">
      <h1 className="blog__title">Recent Codepens</h1>
      <BlogCard active project="React Image Search" hash="qNQPgm" theme="dark" />
      <BlogCard project="Rotating Image Cube" hash="OXgaNy" />
      <BlogCard />
    </div>
  );
}

module.exports = Blog;

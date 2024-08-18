import React from 'react';
import topplaces from '../assets/topplaces.jpg'
import worldheritage from '../assets/worldheritage.jpg'

const TravelBlog = () => {
  const blogPosts = [
    { title: 'Top 10 Places to Visit in Nepal', snippet: 'Discover the best travel destinations in Nepal...', image: topplaces },
    { title: 'World Heritage Sites in Nepal', snippet: 'An in-depth guide to the rich culture and traditions...', image: worldheritage }
  ];

  return (
    <section className="travel-blog">
      <h2 className="section-title">Travel Blog</h2>
      <div className="blog-posts">
        {blogPosts.map((post, index) => (
          <div key={index} className="blog-card">
            <img src={post.image} alt={post.title} className="blog-image" />
            <div className="blog-content">
              <h3>{post.title}</h3>
              <p>{post.snippet}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TravelBlog;

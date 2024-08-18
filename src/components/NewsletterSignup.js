import React, { useState } from 'react';

const NewsletterSignup = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement API call for newsletter subscription here
    alert(`Subscribed with ${email}`);
  };

  return (
    <section className="newsletter-signup">
      <h2>Newsletter Signup</h2>
      <form onSubmit={handleSubmit}>
        <input 
          type="email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          placeholder="Enter your email" 
          required 
        />
        <button type="submit">Subscribe</button>
      </form>
    </section>
  );
};

export default NewsletterSignup;

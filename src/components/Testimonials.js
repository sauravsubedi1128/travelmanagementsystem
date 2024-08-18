import React from 'react';
import star from '../assets/star.png'; // Import the star image

const Testimonials = () => {
  const testimonials = [
    { name: 'John Doe', feedback: 'An amazing experience! The trekking routes were breathtaking.', rating: 5 },
    { name: 'Jane Smith', feedback: 'Excellent service and well-organized packages. Highly recommend!', rating: 4 },
    { name: 'Kumar Rai', feedback: 'A truly memorable trip. The cultural tours were insightful and enriching.', rating: 5 },
  ];

  return (
    <div className="testimonials">
      <h2>Customer Testimonials</h2>
      <div className="testimonial-list">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial-card">
            <div className="rating">
              {[...Array(testimonial.rating)].map((_, i) => (
                <img key={i} src={star} alt="Star" className="star" />
              ))}
            </div>
            <p>"{testimonial.feedback}"</p>
            <p><strong>- {testimonial.name}</strong></p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;

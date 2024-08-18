import React from 'react';

const PopularExperiences = () => {
  const experiencesKathmandu = [
    { title: 'Everest Base Camp Trek', price: '$1200' },
    { title: 'Kathmandu City Tour', price: '$200' }
  ];

  const experiencesPokhara = [
    { title: 'Paragliding in Pokhara', price: '$150' },
    { title: 'Annapurna Circuit Trek', price: '$1000' }
  ];

  return (
    <section className="popular-experiences">
      <h2 className="section-title">Most Popular Experiences in Kathmandu</h2>
      <div className="experience-grid">
        {experiencesKathmandu.map((exp, index) => (
          <div key={index} className="experience-box">
            <h4>{exp.title}</h4>
            <p>{exp.price}</p>
          </div>
        ))}
      </div>

      <h2 className="section-title">Most Popular Experiences in Pokhara</h2>
      <div className="experience-grid">
        {experiencesPokhara.map((exp, index) => (
          <div key={index} className="experience-box">
            <h4>{exp.title}</h4>
            <p>{exp.price}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PopularExperiences;

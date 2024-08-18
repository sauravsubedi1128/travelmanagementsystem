import React from 'react';
import kathmandu from '../assets/kathmandu.jpg';
import pokhara from '../assets/pokhara.jpg';
import rara from '../assets/rara.jpg';
import solukhumbu from '../assets/solukhumbu.jpg';

const TopCities = () => {
  const cities = [
    { name: 'Kathmandu', image: kathmandu, description: 'The capital city with rich culture.' },
    { name: 'Pokhara', image: pokhara, description: 'The city of lakes and mountains.' },
    { name: 'Rara', image: rara, description: 'Home to the pristine Rara Lake.' },
    { name: 'Solukhumbu', image: solukhumbu, description: 'Gateway to Mount Everest.' },
  ];

  return (
    <div className="top-cities">
      <div className="top-cities-content">
        <h1>Top Cities To Explore In Nepal</h1>
        <p>Find your next destination, explore the cities of Nepal</p>
      </div>
      <div className="top-cities-row">
        {cities.map((city, index) => (
          <div
            key={index}
            className={`card card${index + 1}`}
            style={{ backgroundImage: `url(${city.image})` }}
          >
            <div className="card-content">
              <h5>{city.name}</h5>
              <p>{city.description}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="button-container">
        <button className="button" type="button">Explore</button>
      </div>
    </div>
  );
};

export default TopCities;

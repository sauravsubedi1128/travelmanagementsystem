import React from 'react';
import mapofnepal from '../assets/mapofnepal.jpg';

const InteractiveMap = () => {
  return (
    <section className="interactive-map">
      <h2>Explore Nepal</h2>
      <div className="map-container">
        <img src={mapofnepal} alt="Map of Nepal" />
      </div>
    </section>
  );
};

export default InteractiveMap;

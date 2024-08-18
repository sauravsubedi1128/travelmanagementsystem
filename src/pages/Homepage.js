import React from 'react';
import DynamicBanner from '../components/DynamicBanner';
import TopCities from '../components/TopCities';
import PopularExperiences from '../components/PopularExperiences';
import TravelBlog from '../components/TravelBlog';
import Testimonials from '../components/Testimonials';
import InteractiveMap from '../components/InteractiveMap';
import NewsletterSignup from '../components/NewsletterSignup';
import Footer from '../components/Footer';

const Homepage = () => {
  return (
    <div>
      <DynamicBanner />
      <TopCities />
      <PopularExperiences />
      <TravelBlog />
      <Testimonials />
      <InteractiveMap />
      <NewsletterSignup />
      <Footer/>
    </div>
  );
};

export default Homepage;

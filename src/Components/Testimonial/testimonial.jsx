import React, { useState } from 'react';
import './Testimonial.css';

import { FaQuoteRight } from 'react-icons/fa';
import { testimonialsData } from './testimonialData';

const Testimonial = () => {
  const [index, setIndex] = useState(0);
  const current = testimonialsData[index];

  const handlePrev = () => {
    setIndex(index === 0 ? testimonialsData.length - 1 : index - 1);
  };

  const handleNext = () => {
    setIndex(index === testimonialsData.length - 1 ? 0 : index + 1);
  };

  return (
    <div className="testimonial-wrapper">
      <h1>What Our <span className="highlight">Customers Say</span></h1>
      <p className="subheading">
        At This Part You Can See Few Of The Many Positive Reviews Of Our Customers.
      </p>

      <div className="testimonial-body">
        {/* Left Image */}
        <div className="profile-img">
          <img src={current.image} alt={current.name} /> {}
        </div>

        {/* Center Review */}
        <div className="testimonial-card">
          <div className="reviewer">
            <span className="name">{current.name}</span>
            <span className="title">{current.title}</span>
          </div>
          <p className="review">{current.review}</p>
          <FaQuoteRight className="quote-icon" />
        </div>

        {/* Right Thumbnails */}
        <div className="testimonial-thumbnails">
          {testimonialsData.map((item, i) => (
            <div
              key={i}
              className={`thumb ${i === index ? 'active' : ''}`}
              onClick={() => setIndex(i)}
            >
              <img src={item.image} alt={item.name} /> {}
              <p>{item.name}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Arrows */}
      <div className="nav-arrows">
        <button onClick={handlePrev}>&larr;</button>
        <button onClick={handleNext}>&rarr;</button>
      </div>
    </div>
  );
};

export default Testimonial;
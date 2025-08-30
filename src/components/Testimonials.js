// src/components/Testimonials.js
import React from 'react';
import './Testimonials.css';

const testimonials = [
  {
    name: "Sugam mama",
    country: "India",
    review: "Exploring Nepal was life-changing! The Himalayas are breathtaking, and the people were so warm and welcoming.",
  },
  {
    name: "Rojash Thapa",
    country: "USA",
    review: "Loved the trek to Annapurna Base Camp. Thanks to this website for guiding my entire journey!",
  },
  {
    name: "Sandesh Boobs",
    country: "Nepal",
    review: "A beautiful initiative to promote local tourism. Proud to see my country showcased like this!",
  },
];

const Testimonials = () => {
  return (
    <section className="testimonials-section" id="testimonials">
      <div className="testimonials-wrapper">
        <h2 className="testimonials-heading">What Visitors Say</h2>
        <div className="testimonials-container">
          {testimonials.map((t, i) => (
            <div key={i} className="testimonial-card">
              <p className="testimonial-text">"{t.review}"</p>
              <h4 className="testimonial-name">{t.name}</h4>
              <span className="testimonial-country">{t.country}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

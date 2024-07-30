import React from 'react';
import './AboutUs.css';

const AboutUs = () => {
  return (
    <div className="about-us-container">
      <div className="about-us-banner">
        <h1 className="about-us-heading">About Us</h1>
      </div>

      <div className="about-us-content">
        <section className="about-us-section">
          <h2 className="section-heading">Overview</h2>
          <p className="section-text">
            We are a boutique consulting firm that aspires to serve industries & businesses improve competitiveness in both local and global markets and help create sustainable competitive advantage. We support, help, and guide our customers to improve performance across different verticals and different functions.
          </p>
          <p className="section-text">
            We believe that the alignment of goals and interventions is key to achieving lasting success. Well-defined, well-articulated, and continuously shared corporate strategy aligned with appropriate people engagement leads to lasting success and sustainable competitive advantage. Delivering value through designing and implementing best practices drives our delivery commitment. While there may be co-opted seasoned professional experts on the team, to bring high-impact value, we take complete responsibility for the quality as well as the confidentiality of the work we do. In every field of activity, we bring customized best practices and that is our hallmark.
          </p>
        </section>

        <section className="about-us-section">
          <h2 className="section-heading">Our Mission</h2>
          <p className="section-text">
            To HELP individuals & organisations in HEALing their pain areas through services that brings a difference in their life, holistic health & deliver HAPPINESS.
          </p>
        </section>

        <section className="about-us-section">
          <h2 className="section-heading">Our Vision</h2>
          <p className="section-text">
            To become the most Trusted & Effective Brand that delivers value, qualitative difference to organisations & people internationally in next five years.
          </p>
        </section>

        <section className="about-us-section">
          <h2 className="section-heading">Our Values</h2>
          <p className="section-text">
            We believe our success is in delivering performance impact – creating a difference. Our core values are:
          </p>
          <ul className="values-list">
            <li>Trust - of customers</li>
            <li>Confidentiality</li>
            <li>Quality - of Service</li>
            <li>Ethics – in our business</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default AboutUs;

import React from "react";
import "./Services.css";

const Services = () => {
  return (
    <div className="services-container">
      <div className="services-banner">
      <h2 className="services-heading">Our Best Services </h2>
      </div>

      <div className="card-grid">
        <div className="service-card">
          <h3>Strategy Consulting Services</h3>
          <ul>
            <li>Management of Organizational Values</li>
            <li>Redefining business strategies</li>
            <li>Management of Change</li>
          </ul>
          <a href="#strategy-consulting" className="read-more">
            Read more...
          </a>
        </div>
        <div className="service-card">
          <h3>Strategic IR Services</h3>
          <ul>
            <li>Develop IR Policies</li>
            <li>Design IR Systems, Processes</li>
            <li>IR Strategies formulation</li>
          </ul>
          <a href="#ir-services" className="read-more">
            Read more...
          </a>
        </div>
        <div className="service-card">
          <h3>Strategic Learning & Development Services</h3>
          <ul>
            <li>L&D Policies</li>
            <li>Design L&D Systems, Processes</li>
            <li>Training Needs Assessment (TNA)</li>
          </ul>
          <a href="#learning-development" className="read-more">
            Read more...
          </a>
        </div>
        <div className="service-card">
          <h3>Safety Services</h3>
          <ul>
            <li>Safety Audit</li>
            <li>Safety Policies formulation</li>
            <li>Behaviour Based Safety implementation</li>
          </ul>
          <a href="#safety-services" className="read-more">
            Read more...
          </a>
        </div>
        <div className="service-card">
          <h3>Strategic CSR Services</h3>
          <ul>
            <li>CSR Policy formulation</li>
            <li>CSR Strategy formulation</li>
            <li>Design & delivery of sustainable CSR initiatives</li>
          </ul>
          <a href="#csr-services" className="read-more">
            Read more...
          </a>
        </div>
        {/* <div className='service-card'>
                    <h3>Strategic Talent Acquisition</h3>
                    <p>We engage in role-defined executive search, Blue Collar & White collar HR search with high degree of success. We handle limited mandates and ensure our customers get high value in return.</p>
                    <a href="#talent-acquisition" className="read-more">Read more...</a>
                </div> */}
        <div className="service-card">
          <h3>Success / Executive Coaching</h3>
          <ul>
            <li>Counselling</li>
            <li>Mentoring</li>
            <li>Executive Coaching</li>
          </ul>
          <a href="#executive-coaching" className="read-more">
            Read more...
          </a>
        </div>
        {/* <div className='service-card'>
                    <h3>Strategic Litigation Management</h3>
                    <ul>
                        <li>Litigation management</li>
                        <li>Legal Advisory Services</li>
                        <li>Statutory & Legal Compliance services</li>
                    </ul>
                    <a href="#litigation-management" className="read-more">Read more...</a>
                </div> */}
        <div className="service-card">
          <h3>Corporate Affairs Services</h3>
          <ul>
            <li>Liaison services</li>
            <li>Media management services</li>
            <li>Corporate Communications services</li>
          </ul>
          <a href="#corporate-affairs" className="read-more">
            Read more...
          </a>
        </div>
        <div className="service-card">
          <h3>HR Shared Services</h3>
          <ul>
            <li>HR Leasing</li>
            <li>Pay Roll processing services</li>
          </ul>
          <a href="#hr-shared-services" className="read-more">
            Read more...
          </a>
        </div>
      </div>
    </div>
  );
};

export default Services;

import React from 'react';
import './RequestQuote.css';

const RequestQuote = () => {
  return (
    <div className="request-quote">
      <div className="form-container">
        <h1>Request A Quote</h1>
        <form>
          <div className="input-group">
            <label htmlFor="name">Your Name*</label>
            <input type="text" id="name" name="name" placeholder="Your Name*" required />
          </div>
          <div className="input-group">
            <label htmlFor="email">Your Email*</label>
            <input type="email" id="email" name="email" placeholder="Your Email*" required />
          </div>
          <div className="input-group">
            <label htmlFor="phone">Phone</label>
            <input type="text" id="phone" name="phone" placeholder="IND +123 123 12345" />
          </div>
          <div className="input-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" placeholder="Message"></textarea>
          </div>
          <button type="submit" className="explore-btn">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default RequestQuote;

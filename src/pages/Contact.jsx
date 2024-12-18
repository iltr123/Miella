import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-container">
      <h1 className="contact-title">Contact <span className="accent-text">Miella</span></h1>
      
      <div className="contact-form-container">
        <form className="contact-form">
          <div className="form-group">
            <input 
              type="text" 
              placeholder="Your Name" 
              required 
              className="form-input"
            />
          </div>
          <div className="form-group">
            <input 
              type="email" 
              placeholder="Your Email" 
              required 
              className="form-input"
            />
          </div>
          <div className="form-group">
            <input 
              type="text" 
              placeholder="Subject" 
              required 
              className="form-input"
            />
          </div>
          <div className="form-group">
            <textarea 
              placeholder="Your Message" 
              rows="6" 
              required 
              className="form-input"
            ></textarea>
          </div>
          <button 
            type="submit" 
            className="primary-btn custom-btn submit-btn"
          >
            Send Message
          </button>
        </form>
      </div>

      <div className="contact-info">
        <div className="contact-item">
          <h3>Instagram</h3>
          <a 
            href="https://www.instagram.com/miella.bags/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="contact-link"
          >
            @miella.bags
          </a>
        </div>
        
        <div className="contact-item">
          <h3>Address</h3>
          <p>Local manal numero 158 1 ere etage</p>
        </div>
        
        <div className="contact-item">
          <h3>Email</h3>
          <a 
            href="mailto:contact@miella.com" 
            className="contact-link"
          >
            contact@miella.com
          </a>
        </div>
        
        <div className="contact-item">
          <h3>Phone</h3>
          <a 
            href="tel:+212722028133" 
            className="contact-link"
          >
            +212 722-028133
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;

import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-container">
      <h1>Contact Us</h1>
      
      <div className="contact-form-container">
        <form className="contact-form">
          <div className="form-group">
            <input type="text" placeholder="Your Name" required />
          </div>
          <div className="form-group">
            <input type="email" placeholder="Your Email" required />
          </div>
          <div className="form-group">
            <input type="text" placeholder="Subject" required />
          </div>
          <div className="form-group">
            <textarea placeholder="Your Message" rows="6" required></textarea>
          </div>
          <button type="submit" className="submit-btn">Send Message</button>
        </form>
      </div>

      <div className="contact-info">
        <div className="contact-item">
          <h3>Instagram</h3>
          <a href="https://www.instagram.com/miellla.store/profilecard/?igsh=MXNpNHM0Z2c2OG8xcw==" 
             target="_blank" 
             rel="noopener noreferrer">
            @miellla.store
          </a>
        </div>
        
        <div className="contact-item">
          <h3>Address</h3>
          <p>Local manal numero 158 1 ere etage</p>
        </div>
        
        <div className="contact-item">
          <h3>Email</h3>
          <p>madayrahch</p>
        </div>
        
        <div className="contact-item">
          <h3>Phone</h3>
          <a href="tel:+212722028133">+212 722-028133</a>
        </div>
      </div>
    </div>
  );
};

export default Contact;

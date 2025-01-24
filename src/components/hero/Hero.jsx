import React from "react";
import "./hero.css";
import logo from "../../assets/logo/logo.jpg"; // Exemple : logo de la marque
import sac1 from "../../assets/img/sac1.jpg"; // Importation des images des produits
import sac2 from "../../assets/img/sac2.jpg";
import sac3 from "../../assets/img/sac3.jpg";
import sac4 from "../../assets/img/sac4.jpg";
import { Link } from "react-router-dom";
const HeroSection = () => {
  return (
    <div>
      {/* Section Héro */}
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            Elevate Your Style
            <br />
            <span className="accent-text">Luxury Handbags</span>
          </h1>
          <p className="hero-subtitle">
            Discover our latest collection of designer handbags. Crafted with
            precision, designed for elegance.
          </p>
          <div className="hero-buttons">
            <a href="/contact" className="secondary-btn">
              Shop now
              <i className="icon-arrow-right"></i>
            </a>
            <a href="/produits" className="secondary-btn">
              View Collection
              <i className="icon-arrow-right"></i>
            </a>
          </div>
        </div>
        <div className="hero-image">
          <img src={logo} alt="Brand Logo" />
        </div>
      </div>

      {/* Section Produits les plus vendus */}
      <div className="bestsellers-section container my-5">
        <h2 className="text-center mb-4">Les Produits les plus vendus</h2>
        <div className="row">
          {[
            { id: 1, img: sac1, title: "Sac Élégant", price: "150 €" },
            { id: 2,img: sac2, title: "Sac Moderne", price: "200 €" },
            { id: 3,img: sac3, title: "Sac Chic", price: "180 €" },
            { id: 4,img: sac4, title: "Sac Luxe", price: "220 €" },
          ].map((product, idx) => (
            <div className="col-md-3 mb-4" key={idx}>
              <div className="card">
                <img
                  src={product.img}
                  className="card-img-top"
                  alt={product.title}
                />
                <div className="card-body">
                  <h5 className="card-title">{product.title}</h5>
                  <p className="card-text">Prix : {product.price}</p>
                  <Link to={`/produitdetails/${product.id}`} className="btn btn-primary">
                  Voir le produit
                </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="footer bg-light-gray py-5">
        <div className="container">
          <div className="row">
            {/* Localisation */}
            <div className="col-md-6">
              <h4 className="footer-title">Localisation</h4>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.835434509143!2d-122.420177!3d37.779026!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085817a3b0a3b0b%3A0x3f3d4534f8c3c9e!2sGolden%20Gate%20Bridge!5e0!3m2!1sen!2sus!4v1602118763321!5m2!1sen!2sus"
                width="100%"
                height="200"
                allowFullScreen=""
                loading="lazy"
                title="Google Maps Location"
              ></iframe>
            </div>

            {/* Contact */}
            <div className="col-md-6">
              <h4 className="footer-title">Contact</h4>
              <ul className="list-unstyled">
                <li>
                  <strong>Téléphone :</strong>{" "}
                  <a href="tel:+212600000000">+212 6 00 00 00 00</a>
                </li>
                <li>
                  <strong>WhatsApp :</strong>{" "}
                  <a
                    href="https://wa.me/212600000000"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Contactez-nous
                  </a>
                </li>
                <li>
                  <strong>Instagram :</strong>{" "}
                  <a
                    href="https://instagram.com/miella_official"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    @miella_official
                  </a>
                </li>
                <li>
                  <strong>Email :</strong>{" "}
                  <a href="mailto:contact@miella.com">contact@miella.com</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HeroSection;

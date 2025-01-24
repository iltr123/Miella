import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import produitsData from './ProduitsData'; // Assurez-vous que vos produits sont stockés ici

const Produits = () => {
  const [search, setSearch] = useState('');
  const [filteredProducts, setFilteredProducts] = useState(produitsData);

  const handleSearch = (e) => {
    setSearch(e.target.value);
    const filtered = produitsData.filter((produit) =>
      produit.nom.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setFilteredProducts(filtered);
  };

  return (
    <div>
      {/* Barre de recherche */}
      <div className="search-bar">
        <input
          type="text"
          value={search}
          onChange={handleSearch}
          placeholder="Rechercher un produit"
          className="form-control"
        />
      </div>

      {/* Liste des produits */}
      <div className="row">
        {filteredProducts.map((produit) => (
          <div className="col-md-3 mb-4" key={produit.id}>
            <div className="card">
              <img src={produit.image} className="card-img-top" alt={produit.nom} />
              <div className="card-body">
                <h5 className="card-title">{produit.nom}</h5>
                <p className="card-text">Prix : {produit.prix} DH</p>
                {produit.couleur && (
                  <p className="card-text">Couleur : {produit.couleur}</p>
                )}
                <Link to={`/produitdetails/${produit.id}`} className="btn btn-primary">
                  Voir le produit
                </Link>
              </div>
            </div>
          </div>
        ))}
        
      </div>

      {/* Instagram Button */}
      <div className="text-center mt-4 mb-4">
        <a 
          href="https://www.instagram.com/miella.bags/" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="btn btn-primary"
        >
          Plus Produits
        </a>
      </div>
    </div>
  );
};

export default Produits;

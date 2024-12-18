import React from 'react';
import { useParams } from 'react-router-dom';
import produits from './ProduitsData'; // Assurez-vous que le chemin est correct
import './ProduitDetails.css';

const ProduitDetails = () => {
  const { id } = useParams();
  const produit = produits.find((p) => p.id === parseInt(id));

  if (!produit) {
    return <div>Produit non trouvé</div>;
  }

  return (
    <div className="produit-detail-container container my-5">
      <div className="row">
        <div className="col-md-6">
          <img src={produit.image} alt={produit.nom} className="produit-detail-image" />
        </div>
        <div className="col-md-6 produit-detail-info">
          <h1>{produit.nom}</h1>
          <p><strong>Description :</strong> Ce sac est parfait pour compléter votre style avec élégance.</p>
          <p><strong>Prix :</strong> {produit.prix} €</p>
          <p><strong>Couleurs disponibles :</strong>{produit.couleur? produit.couleur  : ' Noir, Rouge, Beige'}</p>
          <a 
            href="https://www.instagram.com/yourinstagramaccount" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn btn-danger me-2"
          >
            Passer commande via Instagram
          </a>
          <a 
            href={`https://wa.me/+212722028133?text=Je veux commander: ${produit.nom}`} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn btn-success"
          >
            Passer commande via WhatsApp
          </a>
        </div>
      </div>

      <h3 className="mt-5">Produits Similaires</h3>
      <div className="row">
        {produits
          .filter((p) => p.prix === produit.prix && p.id !== produit.id)
          .slice(0, 3)
          .map((similarProduit) => (
            <div key={similarProduit.id} className="col-md-4 mb-4">
              <div className="card produit-similaire-card">
                <img src={similarProduit.image} className="card-img-top" alt={similarProduit.nom} />
                <div className="card-body">
                  <h5 className="card-title">{similarProduit.nom}</h5>
                  <p className="card-text">Prix : {similarProduit.prix} €</p>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default ProduitDetails;

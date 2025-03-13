import React from 'react';
import { Products } from './Card';
import produits from './products.json';

function Data() {
  return (
    <div className='Data'>
      {produits.map((produit, index) => (
        <Products
          key={index}
          image={produit.image}
          name={produit.titre}
          price={produit.prix}
          info={produit.info}
        />
      ))}
    </div>
  )
}

export default Data
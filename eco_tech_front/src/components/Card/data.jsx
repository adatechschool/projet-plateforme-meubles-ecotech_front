import { Products } from './products';
import produits from './products.json';

function Card() {
  return (
    <div className='App'>
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

export default Card
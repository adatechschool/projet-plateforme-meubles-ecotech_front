import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import "../style/productDetails.css";

function ProductDetails() {
  const { id } = useParams();
  console.log(id);
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const loadProduct = async () => {
      const response = await fetch(`http://localhost:3000/products?id=${id}`);
      const data = await response.json();
      setProduct(data[0]);
    };
    loadProduct();
  }, [id]);
  console.log("Mon produit", product);

    if (product) {
        return (
          <div className="product-detail">
            <img src={product.img} alt={product.title} className="product-image" />
            <p className="product-title">{product.title} ✅</p>
            <p className="product-description">{product.description}</p>
            <p className="product-price">{product.price} €</p>
          </div>
        );
      }
    
      return <p className="no-product">No product found</p>;
    }

export default ProductDetails

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Card } from "../Card/Card";

function Montre() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const MontreProducts = async () => {
      const response2 = await fetch(
        "http://localhost:3000/products?category=8"
      );
      const data2 = await response2.json();
      setProducts(data2);
    };
    MontreProducts();
  }, []);

  return (
    <div className="container">
      <div className="productList">
        {products.map((product) => (
          <Link
            key={product.id}
            to={`/product/${product.id}`}
            className="productLink"
          >
            <Card product={product} />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Montre;

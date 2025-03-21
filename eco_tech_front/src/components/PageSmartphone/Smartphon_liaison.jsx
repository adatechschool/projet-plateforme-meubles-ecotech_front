import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Card } from "../Card/Card";
import "./Smartphone.css"; // Import the CSS file

function Smartphone() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const SmartphoneProducts = async () => {
      const response2 = await fetch(
        "http://localhost:3000/products?category=6"
      );
      const data2 = await response2.json();
      setProducts(data2);
    };
    SmartphoneProducts();
  }, []);

  return (
    <div className="container">
      <div className="productList">
        {products.map((item) => (
          <Link
            key={item.id}
            to={`/product/${item.id}`}
            className="productLink"
          >
            <Card product={item} />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Smartphone;

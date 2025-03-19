import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Card } from "../Card/Card";
import "./Laptop.css"; // Import du fichier CSS

function Laptop() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const LaptopProducts = async () => {
      const resLaptop = await fetch(
        "http://localhost:3000/products?category=9"
      );
      const dataLaptop = await resLaptop.json();
      setProducts(dataLaptop);
    };
    LaptopProducts();
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

export default Laptop;

import React, { useEffect, useState } from "react";
import { Card } from "../Card/Card";

function Moniteur() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const MoniteurProducts = async () => {
      const response2 = await fetch(
        "http://localhost:3000/products?category=7"
      );
      console.log("response", response2);
      const data2 = await response2.json();
      console.log(data2);
      setProducts(data2);
    };
    MoniteurProducts();
  }, []);
  console.log(products);

  return products.map((product) => <Card key={product.id} product={product} />);
}

export default Moniteur;

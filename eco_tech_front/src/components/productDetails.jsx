import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

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
  }, []);
  console.log("Mon produit", product);

  if (product) {
    return;
    <p className="product-title">{product.title} ✅</p>;
  }
  return <p className="">No product found</p>;
}

export default ProductDetails;

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Card } from "./Card";

function ListAllProducts() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const loadProducts = async () => {
            const response = await fetch("http://localhost:3000/products");
            const data = await response.json();
            setProducts(data);
        };
        loadProducts();
    }, []);

    return (
        <div className="container">
            <div className="productList">
                {products.map((item) => (
                    <Link key={item.id} to={`/product/${item.id}`} className="productLink">
                        <Card product={item} />
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default ListAllProducts;

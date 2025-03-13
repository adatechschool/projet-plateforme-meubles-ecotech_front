import { useState, useEffect } from "react";
import { Products } from "./Card";

function ListAllProducts(){
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const loadProducts = async () => {
            const response = await fetch('http://localhost:3000/products');
            const data = await response.json()
            setProducts(data);
        }
        loadProducts();
        
    }, [])
    console.log(products);

    return (
        products.map(item => Products(item))
    )
}

export default ListAllProducts
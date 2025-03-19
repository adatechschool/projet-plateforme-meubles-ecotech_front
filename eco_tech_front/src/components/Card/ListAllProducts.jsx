import { useState, useEffect } from "react";
import { Card } from "./Card";
import { Link } from "react-router-dom";

function ListAllProducts(){
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const loadProducts = async () => {
            const response = await fetch('http://localhost:3000/products');
            const data = await response.json()
            //console.log('data: ', data)
            setProducts(data);

        }
        loadProducts();
        
    }, [])
    console.log('products: ', products);

    return (
        products.map(item =>
            <Link to={`/product/${item.id}`}> 
                <Card key={item.id} product={item}/>
            </Link>
        )
    )
}

export default ListAllProducts
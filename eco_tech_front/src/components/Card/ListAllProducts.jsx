import { useState, useEffect } from "react";
import { Card } from "./Card";

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
        products.map(item => <Card key={item.id} product={item}/>)
    )
}

export default ListAllProducts
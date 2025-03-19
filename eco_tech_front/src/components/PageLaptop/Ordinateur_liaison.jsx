import React, { useEffect, useState } from "react";
import { Card } from "../Card/Card";

function Laptop (){
    const [products,setProducts] = useState([]) 

    useEffect(()=>{
        const LaptopProducts = async() =>{
        const resLaptop = await fetch('http://localhost:3000/products?category=9')
        console.log('response',resLaptop)
        const dataLaptop = await resLaptop.json();
        console.log(dataLaptop);
        setProducts(dataLaptop)
        }
        LaptopProducts();
    },[])

    console.log(products);

    return(
        products.map(product=><Card key = {product.id} product={product}/>)
    )
}
export default Laptop;
import React, { useEffect, useState } from "react";
import { Products } from "../Card/Card";

function laptop (){
    const [products,setProducts] = useState([]) 

    useEffect(()=>{
        const LaptopProducts = async() =>{
        const resLaptop = await fetch('http://localhost:3000/products/type/5')
        console.log('response',resLaptop)
        const dataLaptop = await resLaptop.json();
        console.log(dataLaptop);
        setProducts(dataLaptop)
        }
        LaptopProducts();
    },[])
    
    console.log(products);

    return(
        products.map(product=>Products(product))
    )
}
export default laptop;
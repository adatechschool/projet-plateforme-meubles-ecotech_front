import React, { useEffect, useState } from "react";
import { Card } from "../Card/Card";

function Montre (){
   const [products,setProducts] = useState([]) 
   
     useEffect(()=>{
   
       const MontreProducts =async ()=>{
   const response2 =await fetch('http://localhost:3000/products?category=8')
   console.log('response', response2)
   const data2 = await response2.json()
   console.log(data2)
   setProducts(data2);
       }
       MontreProducts();
   
     },[])
   console.log(products);
   
   return(
       products.map(product => <Card key={product.id} product={product}/>)
   )
   
   }
   
   
   export default Montre
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Card } from "../Card/Card";

function Smartphone (){
  const [products, setProducts] = useState([]) 

  useEffect(()=>{

    const SmartphoneProducts =async ()=>{
const response2 =await fetch('http://localhost:3000/products?category=6')
console.log('response', response2)
const data2 = await response2.json()
console.log(data2)
setProducts(data2);
    }
    SmartphoneProducts();

  },[])
console.log(products);

return(
  products.map(item =>
    <Link key={item.id} to={`/product/${item.id}`}> 
      <Card product={item}/>
    </Link>
  )
)

}


export default Smartphone
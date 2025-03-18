import React, { useEffect, useState } from "react";
import { Products } from "../Card/Card";

function smartphone (){
  const [products,setProducts] = useState([]) 

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
    products.map(product => <Products key={product.id} product={product}/>)
)

}


export default smartphone
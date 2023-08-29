import React, { useContext } from "react";
import { dataContext } from "./ContextStore/Context";

export default function Products(){
    const { products, AddToCart } = useContext(dataContext)
    
    
    return (
        <div>
            {products.map((product,i) => {
                return (
                    <div key={i}>
                        <h3>{product.name}</h3>
                        <p>{product.description}</p>
                        <h4>{product.price}</h4>
                        <div><button onClick={()=>{AddToCart("small",product.id,product)}}>Buy Small</button><p>{product.small}</p></div>
                        <div><button  onClick={()=>{AddToCart("medium",product.id,product)}}>Buy Medium</button><p>{product.medium}</p></div>
                        <div><button  onClick={()=>{AddToCart("large",product.id,product)}}>Buy Large</button><p>{product.large}</p></div>
                    </div>
                )
            })}
        </div>
    )
}
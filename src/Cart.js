import React, { useContext } from "react";
import { dataContext } from "./ContextStore/Context";

export default function Cart() {
    const{cartItems}=useContext(dataContext)
    // fetch data from crud crud
    // remove product from crudcrud
    return (
        <div>
            {cartItems.map((product,i )=> {
                return (
                    <div key={i}>
                        <div>{product.name}</div>
                        <div>{product.price}</div>
                        <div>{product.size}</div>
                        </div>
                 )
             })}
        </div>
    )
}
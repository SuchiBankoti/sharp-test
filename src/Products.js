import React, { useContext, useState,useEffect } from "react";
import { dataContext } from "./ContextStore/Context";
const api = "https://crudcrud.com/api/f37946aaa4a342888f2d1fac93833c72";
export default function Products(){
    const { products, AddToCart } = useContext(dataContext)
    const[allProducts,setAllProducts]=useState(products)
    useEffect(() => {
        async function getProducts(){
            const res = await fetch(`${api}/products`)
            const data =await res.json()
            console.log(data)
            setAllProducts(data)
        }
        getProducts()
    }, [products])
    
    return (
        <div >
            {allProducts.map((product,i) => {
                return (
                    <li key={i} className="Product">
                        <h3>Name: {product.name}</h3>
                        <p>About: {product.description}</p>
                        <h4>Price: {product.price}</h4>
                        <div><button onClick={() => {
                            if(product.small>0){
                                AddToCart("small", product.id, product)
                            } else {
                                alert("product is out of stock")
                            }
                        }}>Buy Small</button>{product.small > 0 ? <p>{product.small}</p> : <p>Out of stock</p>}</div>
                        <div><button onClick={() => {
                            if (product.medium > 0) {
                                AddToCart("medium", product.id, product)
                            }else {
                                alert("product is out of stock")
                            }
                        }}>Buy Medium</button>{product.medium > 0 ? <p>{product.medium}</p> : <p>Out of stock</p>}</div>
                        <div><button onClick={() => {
                            if (product.large > 0) {
                                AddToCart("large", product.id, product)
                            }else {
                                alert("product is out of stock")
                            }
                        }}>Buy Large</button>{product.large > 0 ? <p>{product.large}</p> : <p>Out of stock</p>}</div>
                    </li>
                )
            })}
        </div>
    )
}



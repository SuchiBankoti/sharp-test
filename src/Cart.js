import React, { useContext, useEffect, useState } from "react";
import { dataContext } from "./ContextStore/Context";
const api = "https://crudcrud.com/api/f37946aaa4a342888f2d1fac93833c72";
export default function Cart() {
    const { cartItems,setShowCart } = useContext(dataContext)
    const [cartData, setCartData] = useState(cartItems)
    
    useEffect(() => {
        async function getCart(){
            const res = await fetch(`${api}/cart`)
            const data =await res.json()
            console.log(data)
            setCartData(data)
        }
        getCart()
    }, [cartItems])
    console.log(cartData)
    const groupedObjects = {};
  
  cartData.forEach((obj) => {
    if (!groupedObjects[obj.id]) {
      groupedObjects[obj.id] = {
        id: obj.id,
        name: obj.name,
        price: obj.price,
        sizes: { small: 0, medium: 0, large: 0 },
      };
    }
    groupedObjects[obj.id].sizes[obj.size]++;
  });
  
  const newArray = Object.values(groupedObjects);
  const total=newArray.reduce((TotalPrice, product) => {
    const tp = (product.price) * (product.sizes.small + product.sizes.medium + product.sizes.large)
      TotalPrice += tp
      return TotalPrice
},0)
  console.log(newArray);
    return (
        <div>
            <button onClick={()=>{setShowCart(false)}}>Close</button>
        <div>
            {newArray.map((product,i )=> {
                return (
                    <div key={i} style={{display:"flex", gap:"20px"}}>
                        <div>{product.name}</div>
                        {product.sizes.small>0?<div>{product.sizes.small}S</div>:""}
                        {product.sizes.medium>0? <div>{product.sizes.medium}M</div>:""}
                        {product.sizes.large>0? <div>{product.sizes.large}L</div>:""}

                        <div>{(product.price)*(product.sizes.small+product.sizes.medium+product.sizes.large)}</div>
                        </div>
                 )
             })}
            </div>
            <div>
                <h2>Total Price:<span>
                    {total}
                </span></h2>
                <h3>Total Items:<span>{cartData.length}</span></h3>
            </div>
            <p onClick={()=>setShowCart(false)}>Cancel</p>
            </div>
    )
}
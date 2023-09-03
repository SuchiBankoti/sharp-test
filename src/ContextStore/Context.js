import React, { createContext, useEffect, useState } from "react";

const contextDataProvider = createContext();
const api="https://crudcrud.com/api/f37946aaa4a342888f2d1fac93833c72"
function MenuProvider(props) {
    const [products, setProducts] = useState([])
    const [cartItems, setCartItems] = useState([])
    const[showCart,setShowCart]=useState(false)

    useEffect(() => {
        async function getProducts(){
            const res = await fetch(`${api}/products`)
            const data =await res.json()
            console.log(data)
            setProducts(data)
        }
        async function getCart(){
            const res = await fetch(`${api}/cart`)
            const data =await res.json()
            console.log(data)
            setCartItems(data)
        }
        getProducts()
        getCart()
        //  fetch at the beginneinf
     },[])

     async function addProduct(newProduct) {
         const res = await fetch(`${api}/products`, {
             method: "POST",
             body: JSON.stringify(newProduct),
             headers:{"Content-type": "application/json"}
            })
            const data =await res.json()
            console.log(data)
        // async fucntion adds to crudcrud
        setProducts(prev=>[...prev,newProduct])
    }
    async function AddToCart(value, id, item) {
        const res = await fetch(`${api}/cart`, {
            method: "POST",
            body: JSON.stringify({
                name:item.name,price:item.price,id:item.id,size:value
            }),
            headers:{"Content-type": "application/json"}
           })
           const data =await res.json()
           console.log(data)
            // add to crud crud
        setCartItems(prev => [...prev, { name: item.name, price: item.price, id: item.id, size: value }])
        console.log('item', item)
        console.log("id", item._id)
        console.log('value', value)
        const newitem = {
            ...item
        }
        delete newitem._id
        await fetch(`${api}/products/${item._id}`, {
            method: "PUT",
            body: JSON.stringify({
                ...newitem,
                [value]: (item[value] > 0 ? (item[value] - 1) : 0),
                
            }),
            headers:{"Content-type": "application/json"}
           })

        setProducts(prev=>prev.map(product => product.id === id ? {
            ...product,
           [value]:product[value]>0?(product[value]-1):0
        } : product))

    }


    // async function RemoveFromCart(id){
    //     console.log('remove from cart')
    //        await fetch(`${api}/cart/${id}`, {
    //         method: "DELETE",
    //        })
        // delete from crud
    //     setCartItems(prev=>prev.filter(product=>product.id!==id))
    // }
//     function RemoveProduct(id) {
//         console.log('remove prodcs')
//         // delete from crud
//         setProducts(prev=>prev.filter(product=>product.id!==id))
//    }

  return (
    <contextDataProvider.Provider
      value={{
              products,
             addProduct,
              cartItems, AddToCart,
              showCart,setShowCart
      }}
    >
      {props.children}
    </contextDataProvider.Provider>
  );
}
export { contextDataProvider as dataContext, MenuProvider };
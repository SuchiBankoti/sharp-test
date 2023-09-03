import './App.css';
import AddProduct from './AddProduct';
import Products from './Products';
import Cart from './Cart';
import { useContext } from 'react';
import { dataContext } from './ContextStore/Context';
function App() {
  const { cartItems,showCart,setShowCart } = useContext(dataContext)
  
  return (
    <div className="App">
      {showCart?<div className='Overlay'></div>:""}
      <AddProduct />
      <div style={{ display: 'flex' ,width:"500px", gap:"100px"}}>
        <div>
        <h2>All Products</h2>
      <Products />
        </div>
        <div>
          <h2 className='cartBox'><button onClick={()=>setShowCart(true)}>Cart</button><span style={{ border: "1px solid black", padding: "10px" }}>{cartItems.length}</span></h2>
          {
            showCart ?
              <div className='Cart'>
                <Cart/>
                </div>
:""          }
        </div>
      </div>
    
    </div>
  );
}

export default App;

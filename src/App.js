import './App.css';
import AddProduct from './AddProduct';
import Products from './Products';
import Cart from './Cart';
function App() {
  return (
    <div className="App">
      <AddProduct />
      <div style={{display:'flex'}}>
      <Products />
      <Cart/>
      </div>
    
    </div>
  );
}

export default App;

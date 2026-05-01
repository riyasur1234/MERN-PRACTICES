import logo from './logo.svg';
import './App.css';
import Navbar from './component/Navbar';
import ProductList from './component/ProductList';
//import Navbar from './component/Navbar';
import React, {useState} from 'react';



function App() {
  const Product = [
    {
      price: 99999,
      name: "iphone max",
      quantity: 0,
    },

    {
      price: 9999,
      name: "Red Me Note7",
      quantity: 0,
    }
  ]

  let [Product, setProduct] = useState(Product)
  incrementQuantity = (index) => {
    let newProduct = [...Product]
    newProduct[index].quantity++
    setProduct(newProduct);
  }
  return (
    <>
    <Navbar/>
    <main className='container' mt-9="true">
    <ProductList Product={Product} incrementQuantity = {this.incrementQuantity}/>
    </main>
    </>
  )
}

export default App;

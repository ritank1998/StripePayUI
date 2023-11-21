import React, { useState } from 'react';
import { Routes,Route } from 'react-router-dom';
import Success from './Success';
import Props from './Props';
import "./Pricing.css"
import { handleBuyClick, handleToBuyItem } from './ApiController';
import SingleItems from './SingleItems';


const App = () => {

  
  const [products, setProducts] = useState([
    { id: 1, name: 'Gold', price: 100 , img: "images/gold.jpeg"},
    { id: 2, name: 'Silver', price: 200 , img: "images/silver.jpeg"},
    { id: 3, name: 'Platinum', price: 300 , img: "images/platinum.jpeg"}
    // Add more products as needed
  ]);

  
  const handleBuyClicksss=(product)=>{

    const response=handleBuyClick(product)
console.log(response)
  }
  return (
    <div>
      <h1 className='heading'>Subscription Pricing</h1>
          <ul>
            <li>
            <Props Products={products}/>
            </li>
          </ul>
          <SingleItems/>

      <Routes>
          <Route exact path="/success" element={<Success/>}/>
        </Routes>
      
    </div>
  );
};

export default App;
import React from 'react'
import logo from "../assets/logo.jpg"
import Button from './UI/Button';
import CartContext from '../store/CartContext';
import { useContext } from 'react';


const Navbar = () => {

   const cartCtx = useContext(CartContext);

   const totalCartItems = cartCtx.items.reduce((totalNumberOfItems, item) => {
     return totalNumberOfItems + item.quantity;
   }, 0);

  return <header id="main-header">
  <div id='title'>
    <img src= {logo}  alt='Logo'/>
    <h1 >
    React Food App
    </h1>
    </div>
    <nav>
    <Button textOnly={true}>Cart({totalCartItems})</Button>
    </nav>
  </header>;
    

}

export default Navbar
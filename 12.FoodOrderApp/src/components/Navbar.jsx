import React, { useRef,useState } from 'react'
import logo from "../assets/logo.jpg"
import Button from './UI/Button';
import CartContext from '../store/CartContext';
import { useContext } from 'react';
import Modal from './UI/Modal';
import UserProgressContext from '../store/UserProgressContext';


const Navbar = () => {




   const userProgressCtx = useContext(UserProgressContext);

   const cartCtx = useContext(CartContext);

   const totalCartItems = cartCtx.items.reduce((totalNumberOfItems, item) => {
     return totalNumberOfItems + item.quantity;
   }, 0);

     function handleShowCart() {
       userProgressCtx.showCart();
     }

  return (
    <header id="main-header">
      <div id="title">
        <img src={logo} alt="Logo" />
        <h1>React Food App</h1>
      </div>
      <nav>
       
      
          <Button onClick = {handleShowCart} textOnly={true}>
               Cart({totalCartItems})
          </Button>
           
      </nav>
    </header>
  );
    

}

export default Navbar
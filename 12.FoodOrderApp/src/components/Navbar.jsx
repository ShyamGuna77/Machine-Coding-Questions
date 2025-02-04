import React from 'react'
import logo from "../assets/logo.jpg"
import Button from './UI/Button';
const Navbar = () => {
  return <header id="main-header">
  <div id='title'>
    <img src= {logo}  alt='Logo'/>
    <h1 >
    React Food App
    </h1>
    </div>
    <nav>
    <Button textOnly={true}>Cart(0)</Button>
    </nav>
  </header>;
    

}

export default Navbar
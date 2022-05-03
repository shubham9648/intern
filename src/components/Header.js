import React from 'react';
import './style/header.css'
import Rectangle from '../images/Rectangle.png'
import Vector from '../images/Vector.png';
import Vector1 from '../images/Vector (1).png'

const Header = () =>{
    return (
        <>
        <div className='header'>
        <h1>ATG WORLD</h1>
        <div>
          <input 
          type="text" 
          placeholder='Search for your favourite group in ATG'
          className='rectangle'/>
          <img src={Vector} className="search"/>
        </div>
        <div>
          <p>Create Account.
            <span className='text'>It's Free</span>
            <span><img src={Vector1}/></span>
            </p>
         </div>
         </div>
        </>
    )
}

export default Header
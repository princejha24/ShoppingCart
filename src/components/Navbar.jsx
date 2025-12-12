import {FaShoppingCart} from "react-icons/fa"
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import React from 'react'

const Navbar = () => {
 
  const cart= useSelector((state)=>state.cart.items);
  

  return (
    <div >
      <nav className="flex justify-between items-center h-20 max-w-6xl  mx-auto" >
        <NavLink to="/">
        <div className="ml-5">
                  <img src="logo.png" alt="" className="h-14" />
        </div>
        </NavLink>
        <div className="flex items-center font-medium space-x-6 mr-5 text-slate-100 text-lg ">
          <NavLink to="/">
              <p>Home</p>
          </NavLink>
          
          <NavLink to="/cart"> 
          <div className="relative">
             <FaShoppingCart  className="text-2xl"/>{
               cart.length > 0 &&
               <span className="absolute -top-2 -right-2 bg-green-600 rounded-full px-2 text-xs w-5 h-5 flex items-center justify-center animate-bounce text-white">{cart.length}</span>
             }   
          </div>
           </NavLink>
        </div>
          
      </nav>
     
    </div>
  )
};

export default Navbar;

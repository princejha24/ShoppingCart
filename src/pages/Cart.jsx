import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";


const Cart = () => {

  const cart= useSelector((state)=>state.cart.items);
 const [totalAmount,setTotalAmount]=useState(0);
 

 useEffect(() => {
      setTotalAmount(cart.reduce((acc, curr)=> acc + curr.price * curr.quantity,0));
 },[cart]);
  return (
    <div>
      {
        cart.length > 0 ? (
          <div className=" flex gap-16 max-w-6xl p-6 mx-auto flex-wrap lg:flex-nowrap">
            <div className="lg:w-[70%]">

              {
              cart.map((item, index)=>(
                <CartItem key={item.id} item={item}/>
              ))}
            </div>

            <div className="md:w-[30%] w-full flex flex-col gap-8 justify-between">
              <div className="mt-20">
              <div className="text-xl font-semibold text-green-800 uppercase">Your Cart</div>
              <div className="text-5xl font-semibold text-green-700 uppercase">Summary</div>
              <p className="mt-4 font-semibold text-xl text-slate-700"> Total Items:  
                 <span className=" font-normal"> {cart.reduce((acc, curr) => acc + curr.quantity, 0)}</span>
              </p>
                </div>
                <div className="mb-20 ">
                  <p className="font-semibold text-xl text-slate-700 mb-5">Total Amount:<span className="font-bold ml-2 text-black">${totalAmount.toFixed(2)}</span></p>
                  <button className=" text-lg w-full py-2.5 rounded-lg font-bold text-white bg-[#15803d]
          border-2 border-[#15803d] hover:bg-white hover:text-[#15803d] transition-all duration-300 ease-in">
                    <p>CheckOut Now</p>
                  </button>
                </div>
            </div>
          
          </div>
        ) : (<div className="flex flex-col justify-center items-center h-[80vh] gap-6">
          <p className="text-6xl font-bold">Your cart is empty</p>
          <Link className="text-3xl font-bold" to="/">Shop Now</Link>
        </div>)
      } 

  
    </div>
  );
};

export default Cart;

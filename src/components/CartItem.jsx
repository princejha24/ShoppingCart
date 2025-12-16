
import {MdDeleteSweep} from "react-icons/md"
import { useDispatch } from "react-redux";

import { toast } from "react-hot-toast";
import { useSelector } from "react-redux";
import {add} from "../redux/Slices/CartSlice";
import { remove } from "../redux/Slices/CartSlice";
import { removeItem } from "../redux/Slices/CartSlice";


const CartItem = ({item, itemIndex}) => {
  
   const  cart=useSelector((state)=>state.cart.items);
   

  const dispatch=useDispatch();
   const incrementItem = () => {
    dispatch(add(item));
    toast.success("Item added");
  };

  const decrementItem = () => {
    dispatch(remove(item.id));
    toast.success("Item removed");
  };

  return (
    <div className="p-4 border-b-2 last:border-none border-slate-600">
      <div className=" flex justify-between py-3.5 px-2.5 gap-14 flex-col md:flex-row">
        <div className="md:w-[30%] w-full flex justify-center items-center">
          <img src={item.image} alt="" className="w-[40%] md:w-[50%] lg:w-full"/>
        
         </div>
          <div className="md:w-[70%] w-full flex flex-col gap-5">
            <h1 className="font-semibold text-xl text-gray-700" >{item.title}</h1>

            <h1 className="text-gray-600">{item.description.split(" ").slice(0,15).join(" ")+"..."}</h1>
            <div className="flex  gap-2 justify-between">
              <p className="text-green-600 font-bold text-lg" >${item.price}</p>
            
                 
        
    <div className="flex items-center justify-between  gap-2 h-9 w-[120px] rounded-lg bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-base text-sm px-2 py-2.5 text-center leading-5">


            <button className="text-white flex justify-center  items-center rounded-lg w-4 h-4 bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-base text-sm px-4 py-2.5 text-center leading-5  " onClick={decrementItem}>-</button>

            <p className="font-semibold w-8 h-8 flex items-center justify-center text-white tabular-nums ">{item.quantity}</p>
           
            <button className="text-white flex justify-center  items-center rounded-lg w-4 h-4 bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-base text-sm px-4 py-2.5 text-center leading-5 e-in " onClick={incrementItem}>+</button>
          
        
       </div>


                </div>
        <div className="w-10 h-10 mt-[-10px] rounded-full bg-red-200 flex justify-center items-center
             hover:bg-red-400 group transition-all">
                <MdDeleteSweep  className="hover:text-white text-red-800 transition-all " fontSize={25}
                  onClick={() => {
                    dispatch(removeItem(item.id));
                    toast.error("Item removed from cart");
                  }}
                 />
              </div>
       
    
              
          
            </div>
      </div>
      
    </div>
  );
};

export default CartItem;

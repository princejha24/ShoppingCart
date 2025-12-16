
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
            
                  <div className="flex items-center gap-1  mt-1 border-2 border-gray-700 rounded-full p-2 h-10 w-[120px] bg-red-500">
        
            <button className="text-gray-700 border-2 bg-white border-gray-700 rounded-full font-semibold text-[12px] p-1 px-3 uppercase hover:bg-gray-700 hover:text-slate-100 transition duration-300 ease-in  w-[40px] text-bold" onClick={decrementItem}>-</button>

            <p className="text-white font-bold w-[15px] mr-1">{item.quantity}</p>
           
            <button className="text-gray-700 border-2 bg-white border-gray-700 rounded-full font-semibold text-[12px] p-1 px-3 uppercase hover:bg-gray-700 hover:text-slate-100 transition duration-300 ease-in text-bold w-[40px]" onClick={incrementItem}>+</button>
              
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


import {MdDeleteSweep} from "react-icons/md"
import { useDispatch } from "react-redux";
import { remove } from "../redux/Slices/CartSlice";
import { toast } from "react-hot-toast";

const CartItem = ({item, itemIndex}) => {
 
  const dispatch=useDispatch();

const removeFromCart=()=>{
    dispatch(remove(item.id));
    toast.error("Item removed from cart");
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
            <div className="flex gap-4 justify-between">
              <p className="text-green-600 font-bold text-lg" >${item.price}</p>
              <div className="w-10 h-10 rounded-full bg-red-200 flex justify-center items-center
             hover:bg-red-400 group transition-all">
                <MdDeleteSweep  className="hover:text-white text-red-800 transition-all" fontSize={25}
                  onClick={
                    removeFromCart
                  }
                 />
              </div>
            </div>
            </div>
      </div>
      
    </div>
  );
};

export default CartItem;

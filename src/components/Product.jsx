import { toast } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import {add ,remove} from "../redux/Slices/CartSlice";


const Product = ({product}) => {
 const  cart=useSelector((state)=>state.cart.items);
 const dispatch=useDispatch();

 const addToCart=()=>{
    dispatch(add(product));
    
    toast.success("Item added to cart");
 };

 const removeFromCart=()=>{
    dispatch(remove(product.id));
    if(cart.find((p)=>p.id===product.id)){
    toast.error("Item removed from cart");}
 }
 

  return (
    <div  className="   hover:shadow-[0_10px_20px_rgba(240,_46,_170,_0.7)] 
    
    flex flex-col items-center justify-between w-full gap-3 p-4 rounded-xl 
    border-2 border-[#00095] shadow-lg hover:scale-[1.03]
    md:hover:scale-[1.05] transition ease-in">
      <div >
        <p  className=" text-gray-700 font-semibold text-lg text-left truncate w-40 mt-1">{product.title.split(" ").slice(0,3).join(" ")+"..."}</p>

      </div>
      <div>
        <p className="w-40 text-gray-400 font-normal text-[10px] text-left" >{product.description.split(" ").slice(0,10).join(" ")+"..."}</p>
      </div>  
      <div className="h-[180px]">
        <img src={`${product.image}`} className="h-full w-full" />
      </div>
      <div className="flex justify-between gap-10 items-center w-full mt-2">
         <div>
        <p className="text-green-600">${product.price}</p>
      </div>
       <div className="flex items-center justify-between  gap-2 h-9 w-[120px] rounded-lg bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-base text-sm px-2 py-2.5 text-center leading-5">


            <button className="text-white flex justify-center  items-center rounded-lg w-4 h-4 bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-base text-sm px-4 py-2.5 text-center leading-5  " onClick={removeFromCart}>-</button>

            <p className="font-semibold w-8 h-8 flex items-center justify-center text-white tabular-nums ">{cart.find((p)=>p.id===product.id)?.quantity || 0}</p>
           
            <button className="text-white flex justify-center  items-center rounded-lg w-4 h-4 bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-base text-sm px-4 py-2.5 text-center leading-5 e-in " onClick={addToCart}>+</button>
          
        
       </div>
      </div>
      
    </div>
  );
};

export default Product;

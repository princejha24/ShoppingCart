import { useState, useEffect } from "react";
import Spinner from "../components/Spinner";
import Product from "../components/Product";

const Home = () => {
 const API_URL="https://fakestoreapi.com/products";
 const [products,setProducts]=useState([]);
 const [loading,setLoading]=useState(false);

  async function fetchProducts() {
    setLoading(true);
    try {
    const res=await fetch(API_URL);
    const data=await res.json();
    setProducts(data);
    }
    catch (error) {
      console.log("Error fetching products:", error);
      setProducts([]);
    }
    setLoading(false);
  }
  useEffect(() => {
    fetchProducts();
  }, [])


  return (
    <div>
      {
        loading ? <Spinner /> : 
        products.length > 0 ? (<div className="
          grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5
        gap-y-8 max-w-6xl p-6 mx-auto my-7 min-h-[80vh]">{
          products.map((product)=>(
            <Product key={product.id} product={product} />
            ))}
        </div>):<div className="flex justify-center items-center">
        <p>No products found</p>

        </div>
      }
        
    </div>
  );
};

export default Home;

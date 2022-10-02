import React from "react";
import { createContext ,useState,useEffect} from "react";




export const CartContext = createContext();



const CartContextProvider = ({children}) => {
   const [cartData,setCartData] =useState([]);
   const [price,setPrice]=useState(0);

 
  
    const handleCart = (data) => {
   
        setCartData([...cartData, data]);
      
    };


    const handleRemove = (id) => {
      const arr = cartData.filter((item) => item.id !== id);
      setCartData(arr);
      handlePrice();
    };
    const handlePrice = () => {
      let price = 0;
  
      cartData.map((el) => {
   
         price += el.discounted_price;
      });
  
      setPrice(price);
      console.log(price);
    };
  
    useEffect(() => {
      handlePrice();
    });
    return ( 
    <CartContext.Provider value={{cartData,price,handlePrice,handleRemove,handleCart}} >
      {children}
    </CartContext.Provider>
     
  )
};

export default CartContextProvider;

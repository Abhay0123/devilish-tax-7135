import { Button,  SimpleGrid,Image, VStack,Box, Text, } from "@chakra-ui/react";
import React, { useContext } from "react";
import { CartContext } from "./CartContextProvider";

const Cart = () => {
 const {cartData,price,handleRemove, handleCart} = useContext(CartContext)
return (
    <Box p='10px'>
         <Box position='fixed' Top='140px' p='10px'>
         <Text as='mark'  fontSize="xl">Total Price(After Discount) : ₹{price}</Text>
         </Box>
<SimpleGrid columns={{base:1,sm:2,md:2,lg:4}} w='80%'>
  {
        cartData.map((el)=>(
          <Box key={el.id} w='80%' p='10px' borderRadius='5px' boxShadow='rgba(0, 0, 0, 0.35) 0px 5px 15px' mt='140px'>
           
            <Image  src={el.images[0]}/>
            <VStack key={el.id}>
            <Text>{el.title}</Text>
            <Text>Strike Price : ₹{el.strike_price}</Text>
            <Text>Discounted Price : ₹{el.discounted_price}</Text>
            <Button  colorScheme='red' onClick={()=>handleRemove(el.id)} >REMOVE</Button>
            </VStack> 
         
          </Box>
        ))
      }
    </SimpleGrid>
   
    
     </Box>
  )
};

export default Cart;




import { Link ,Text,Box,Button,ButtonGroup,Spacer,Flex,Heading,Image} from "@chakra-ui/react";


import { NavLink } from "react-router-dom";

const Links = [

    { title: "Women", path:"/women" },
    { title: "Men" ,   path: "/men"},
    { title: "Kids", path:"/child" },
  
  ]


const Navbar = () => {
      return (
        <>{
            <Flex alignItems='center' gap='10' p={10} >
 
  <Box>{
 Links.map((el)=>(
      <NavLink key={el.name} to={el.path}
      className={({ isActive }) => {
        return isActive ? "activeStyle" : "defaultStyle"; }} >
        {el.title}
      </NavLink>
    ))

   }</Box>
<Spacer />
<Box>
<Heading as='h1' size='4xl'><Image
  
  
  w='240px'
  h='30px'
  src='https://www.farfetch.com/static/images/logo.png'
  alt='image'
/></Heading>
</Box>


<Spacer />
  <Box>
  <ButtonGroup gap='2'>
   
 
    <Link href='#'><Image
  borderRadius='full'
  boxSize='24px'
  src='https://cdn4.iconfinder.com/data/icons/world-flags-circular/1000/Flag_of_India_-_Circle-512.png'
  alt='image'
/></Link>
    <Link href='#'><Image
  borderRadius='full'
  boxSize='24px'
  src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGMeEbDEy0gsUwg3hv_UUwNHnMXHhcJROvsWmahy9V1w0zJZpau-hG0jqpryJcOdnIEl0&usqp=CAU'
  alt='image'
/></Link>
    <Link href='#'><Image
  borderRadius='full'
  boxSize='24px'
  src='https://www.svgrepo.com/show/13666/heart.svg'
  alt='image'
/></Link>
    <Link href='#'><Image
  borderRadius='full'
  boxSize='24px'
  src='https://icons.veryicon.com/png/o/commerce-shopping/merchant-product-icon-library/shopping-32.png'
  alt='image'
/></Link>
  </ButtonGroup>
  </Box>
</Flex>

      }</>
      )

   }
 


export default Navbar;
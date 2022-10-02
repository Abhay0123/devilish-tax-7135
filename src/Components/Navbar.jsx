import {
  Link,
  Box,
  ButtonGroup,
  Spacer,
  Flex,
    Image ,
   } from "@chakra-ui/react";


import { NavLink } from "react-router-dom";

const Links = [
  { title: "Women", path: "/women" },
  { title: "Men", path: "/men" },
  { title: "Kids", path: "/child" },
  { title: "Cart" , path:"/cart" }
];

const Navbar = () => {



  return (
    <Box className="navbar">
      {
        <Flex mt='20px' alignItems="center" gap="5" p={5}>
          <Box>
            {Links.map((el) => (
              <NavLink
                
                key={el.id}
                to={el.path}
                className={({ isActive }) => {
                  return isActive ? "activeStyle" : "defaultStyle";
                }}
              >
                {el.title}
              </NavLink>
            ))}
          </Box>
          <Spacer />
          <Box>
           
              <Image
                w="240px"
                h="30px"
              
                src="https://www.farfetch.com/static/images/logo.png"
                alt="image"
              />
        
          </Box>

          <Spacer />
          <Box>
            <ButtonGroup gap="2">
              <Link href="#">
                <Image
                  boxSize="24px"
                  src="https://cdn4.iconfinder.com/data/icons/world-flags-circular/1000/Flag_of_India_-_Circle-512.png"
                  alt="image"
                />
              </Link>
           
                <Image
                  boxSize="24px"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGMeEbDEy0gsUwg3hv_UUwNHnMXHhcJROvsWmahy9V1w0zJZpau-hG0jqpryJcOdnIEl0&usqp=CAU"
                  alt="image"
                />
            
              <Link href="#">
                <Image
                  boxSize="24px"
                  src="https://www.svgrepo.com/show/13666/heart.svg"
                  alt="image"
                />
              </Link>
              <Link href="#">
                <Image
                  boxSize="24px"
                  src="https://icons.veryicon.com/png/o/commerce-shopping/merchant-product-icon-library/shopping-32.png"
                  alt="image"
                />
              </Link>
            </ButtonGroup>
          
          </Box>
        </Flex>
      }
    </Box>
  );
};

export default Navbar;

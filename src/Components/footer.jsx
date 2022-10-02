import { 
    
    Box,
    Image,
    SimpleGrid,
   Container,
    VStack,Heading,
Button,
    Text,
    Stack,
    Icon,
    Radio,RadioGroup,
    Popover,
  PopoverTrigger,
  PopoverContent,
 
  PopoverBody,
 Link,HStack,
  PopoverArrow,
  PopoverCloseButton,
 
  Input,
 
  

 } from "@chakra-ui/react";
 import {QuestionOutlineIcon, ChatIcon } from '@chakra-ui/icons'
const Footer=()=>{
    return (
        <Box p='20px'>
<SimpleGrid columns={{base:1,md:3,lg:3}} spacing='30px' mt='50px'>
  <VStack  height='110px' border='1px solid gray' p='10px'>
 <Image display='Flex' justifyContent='flex-start' boxSize='30px' src='https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Clothes_hanger_icon_3.svg/800px-Clothes_hanger_icon_3.svg.png?20150106164522'/>
 
 <Text textAlign='Left'>HOW TO SHOP </Text>
 <Text>Your guide to shopping and placing orders</Text>
  </VStack>
  <VStack  height='110px' border='1px solid gray' p='10px'>
  <Icon as={QuestionOutlineIcon} w={6} h={6}  />

 <Text>FAQS
 </Text>
 <Text>Your questions answered</Text>
  </VStack>
  <VStack  height='110px' border='1px solid gray' p='10px'>
  <Icon as={ChatIcon} w={6} h={6}  />
 
 <Text>NEED HELP?
</Text>
 <Text>Contact our global Customer Service team</Text>
  </VStack>
   
</SimpleGrid>
    
    <Container maxW='2xl' w={{base:'300px',lg:'400px'}} mt='100px'  centerContent>
        <VStack>
   <Heading as='h4' >SIGN UP AND GET 15% OFF</Heading>
   <Text>Sign up for promotions, tailored new arrivals, stock updates and more – straight to your inbox</Text>
   <RadioGroup defaultValue='2'>
  <Stack spacing={5} direction='row'>
    <Radio  value='1'>
    Womenswear
    </Radio>
    <Radio  value='2'>
    Menswear
    </Radio>
  </Stack>
</RadioGroup>
    <Text>GET UPDATES BY</Text>
    <Stack spacing={[1, 5]} direction={['column']}>
 
 
  <Popover>
  <PopoverTrigger>
    <Button colorScheme='teal' variant='outline'>Email</Button>
  </PopoverTrigger>
  <PopoverContent>
  
    <PopoverCloseButton />
   
    <PopoverBody><Input variant='filled' placeholder='Enter Your Email' /></PopoverBody>
  </PopoverContent>
</Popover>
<Popover>
  <PopoverTrigger>
    <Button colorScheme='teal' variant='outline' >SMS</Button>
  </PopoverTrigger>
  <PopoverContent>
    <PopoverArrow />
    <PopoverCloseButton />
   
    <PopoverBody><Input variant='filled' placeholder='Enter Your Mobile Number' /></PopoverBody>
  </PopoverContent>
</Popover>
</Stack>

  <Button bg='black' color='white' variant='solid' w='full'>Sign Up</Button>
</VStack>
<Text>By signing up, you agree to our <Link textDecoration='underLined'> Privacy Policy</Link>. Unsubscribe anytime at the bottom of our emails.</Text>
    </Container>

    
        <Box  mt='70px'>  
        <Box p='10px' color='white' bg='black' w='full' h='450px'>  
           <SimpleGrid minChildWidth='120px' spacing='40px' >
         <Box  height='80px'>
           <Text>FARFETCH APP</Text>
           <Link>Farfetch App foriOS and Andriod</Link>
         </Box>
         <Box  height='80px'>
           <Text>DESTINATION/REGION, CURRENCY AND LANGUAGE</Text>
           <HStack> <Image
         borderRadius='full'
         boxSize='24px'
         src='https://cdn4.iconfinder.com/data/icons/world-flags-circular/1000/Flag_of_India_-_Circle-512.png'
         alt='image'/>
         <Link> India, USD $</Link>
         </HStack>
         <Text>FOLLOW US</Text>
         <HStack mt='-100px'>
        
         
         <Link><Image   boxSize='300px' src='https://ddb9l06w3jzip.cloudfront.net/uploadedFiles/giving_demo/contentFiles/file/59'/></Link>
         <Link><Image   boxSize='300px' src="https://ddb9l06w3jzip.cloudfront.net/uploadedFiles/giving_demo/contentFiles/file/60"/></Link>
         <Link><Image   src='https://www.pinclipart.com/picdir/big/94-946233_snapchat-logo-png-snapchat-black-icon-png-clipart.png'/></Link>
         <Link><Image  borderRadius='50px' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTExIfhPCEmtFLV2HZ5b6fLE_vkSbUcyYNS4EWPigoL9CMyZAW_JPKJ-I5drMHy4ieOQB8&usqp=CAU'/></Link>
         <Link><Image   src='https://i.pinimg.com/736x/11/de/ee/11deee130829af292f99e25b4d60b687.jpg' /></Link>
         </HStack>
        
           
          
         </Box>
         <VStack  height='80px'>
           
          <Text>CUSTOMER SERVICE</Text>
          <Link>Contact us</Link>
          <Link>Accessibility</Link>
       <Link>Orders & delivery</Link>
       <Link>Payment & pricing</Link>
       <Link>Returns & refunds</Link>
       <Link>FAQs</Link>
       <Link>Terms & conditions</Link>
       <Link>Promotion terms & conditions</Link>
       <Link>Privacy policy</Link>
       
         </VStack>

         <Stack className="text" height='80px' >
         <Text>ABOUT FARFETCH</Text>
       
          <Link>About Us </Link>
          <Link>Investors</Link>
          <Link>Boutique Partners</Link>
          <Link>Affiliate Programme</Link>
         <Link>Student discount UNiDAYS</Link>
         <Link>Youth discount</Link>
         <Link>Careers</Link>
         <Link>Customer Promise</Link>
         <Link>FARFETCH App</Link>
         <Link>Sitemap</Link>
        <Link>Positively FARFETCH</Link>
         </Stack>
       </SimpleGrid>
        <Text mt='300px' display='Flex' justifyContent='flex-start'>'FARFETCH' and the 'FARFETCH' logo are trade marks of FARFETCH UK Limited and are registered in numerous jurisdictions around the world.</Text>
        <Text display='Flex' justifyContent='flex-start'>© Copyright 2022 FARFETCH UK Limited. All rights reserved.</Text>
       </Box> 
       </Box>
       </Box>
    )
} 
export default Footer;
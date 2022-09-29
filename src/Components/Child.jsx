import React from "react"
import { Container,
    Flex,
    Box,
    Image,
    SimpleGrid,
    Spacer,
    Heading,
    VStack,
    HStack,
    Text,
    Button,
    Stack,
    Icon,
    Radio,RadioGroup
 } from "@chakra-ui/react";
import {QuestionOutlineIcon, ChatIcon } from '@chakra-ui/icons'
const Child=()=>{
    return (
        <>
      
        <SimpleGrid columns={2} spacing={10}>
      
            <VStack >
            <Heading as='h1' size='4xl' noOfLines={1}>FALL'S BEST OUTWEAR</Heading>
              <Text fontSize='30px'>Layer up in the new season’s best styles from Stand Studio, Amiri and more</Text>
      
        <Button  size='lg' p='10px' colorScheme='teal' variant='outline'>Shop Now</Button>
            </VStack>
            
           
        <Box  height='80px'> <Image src='https://cdn-static.farfetch-contents.com/cms-cm10/caas/v1/media/3965680/data/1493d066b69d04f7eb7f69b1ebf4d9fc/1x1_messaging-side/637/data.jpeg' alt='child' />
       </Box>
        
      </SimpleGrid>
     
     
    <Box mt='430px'>
    <Text fontSize='25px'>The best of new in</Text>
    <SimpleGrid columns={3} spacing='40px'>
        <Box >
        <Image
    boxSize='400px'
   
    src='https://cdn-static.farfetch-contents.com/cms-cm10/caas/v1/media/3965638/data/f643fcbe064f1784f86cfeba03fad19a/1x1_three-columns/480/data.jpeg'
    alt='Dan Abramov'
  />
   <Text>BABY
Cozy snowsuits and unmistakable checks</Text>
   </Box>
   <Box>
   <Image
    boxSize='400px'
  
    src='https://cdn-static.farfetch-contents.com/cms-cm10/caas/v1/media/3965766/data/437665710b0100a1573e87a23e01ec95/1x1_three-columns/480/data.jpeg'
    alt='Dan Abramov'
  />
  <Text>KIDS
The season’s key layers</Text>
   </Box>
  
  <Box>
  <Image boxSize='400px' src='https://cdn-static.farfetch-contents.com/cms-cm10/caas/v1/media/3965660/data/c4a3b767e6dab99cffea70cdb489c07e/1x1_three-columns/480/data.jpeg' alt='Dan Abramov' />
  <Text>TEENS
From chunky boots to matching sets</Text>
  </Box>
  
</SimpleGrid>

    </Box>
   
    <Box>
    <SimpleGrid columns={2} spacing={10}>
  <Box height='80px'>
    <Image src='https://cdn-static.farfetch-contents.com/cms-cm10/caas/v1/media/3965648/data/5b86ebffdb6e11dbb7217d93039bdccf/1x1_two-columns/637/data.jpeg'/>
    <Text>NEW KICKS
Explore our sneaker edit, courtesy of fashion’s biggest names</Text>
  </Box>
  <Box  height='80px'>
    <Image src='https://cdn-static.farfetch-contents.com/cms-cm10/caas/v1/media/3965758/data/467ff31f68b8e8c2e761ee2c52358788/1x1_two-columns/637/data.jpeg'/>
    <Text>CONSCIOUS FASHION
Little clothes made with the bigger picture in mind</Text>
  </Box>
 
</SimpleGrid>
    </Box>
     
    <Flex mt='630px'>
  <Box p='4' bg='red.400'>
  Trending now: 150 most-wanted pieces
  </Box>
  <Spacer />
  <Box p='4' bg='green.400'>
  <Button colorScheme='teal' variant='outline'>
    Shop Now
  </Button>
  </Box>
</Flex>
<SimpleGrid minChildWidth='10px' spacing='10px' mt='50px'>
<Box height='10px' bg='gray'>
    <Image bg='gray' boxSize='300px' src='https://cdn-images.farfetch-contents.com/19/03/88/49/19038849_41591319_600.jpg'/>
    <Text>New Season

Moncler Enfant

Careil belted puffer jacket

$980</Text>
  </Box>
  <Box height='10px'>
    <Image boxSize='300px' src='https://cdn-images.farfetch-contents.com/18/58/77/47/18587747_40143873_1000.jpg'/>
    <Text>New Season

Moncler Enfant

knitted beanie hat

$170</Text>
  </Box>
  <Box height='10px'>
    <Image boxSize='300px' src='https://cdn-images.farfetch-contents.com/18/41/13/41/18411341_40381432_600.jpg'/>
    <Text>New Season

Marc Jacobs Kids

logo-tape velvet dress 

$140</Text>
  </Box>
  <Box height='10px'>
    <Image boxSize='300px' src='https://cdn-images.farfetch-contents.com/18/67/48/40/18674840_40337332_600.jpg'/>
    <Text>New Season

Karl Lagerfeld Kids

lace-up leather boots

$327</Text>
  </Box>
  
</SimpleGrid>
<Box mt='400px' ml='-340px'>
    <Image boxSize='600px' src='https://cdn-static.farfetch-contents.com/cms-cm10/caas/v1/media/3965740/data/6ee964c35a7d4526d278bf7089f2bebc/1x1_two-columns/637/data.jpeg'/>
<text>GIVENCHY KIDS
Reenergized closet staples for fall</text>
</Box>



<SimpleGrid columns={[2, null, 3]} spacing='40px' mt='50px'>
  <VStack height='80px' border='1px solid gray' p='15px'>
 <Image boxSize='30px' src='https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Clothes_hanger_icon_3.svg/800px-Clothes_hanger_icon_3.svg.png?20150106164522'/>
 <Text>HOW TO SHOP </Text>
 <Text>Your guide to shopping and placing orders</Text>
  </VStack>
  <VStack height='80px' border='1px solid gray' p='15px'>
  <Icon boxSize='30px' as={ QuestionOutlineIcon} />
 <Text>HOW TO SHOP </Text>
 <Text>Your guide to shopping and placing orders</Text>
  </VStack>
  <VStack height='80px' border='1px solid gray' p='15px'>
  <Icon boxSize='30px' as={  ChatIcon} />
 <Text>HOW TO SHOP </Text>
 <Text>Your guide to shopping and placing orders</Text>
  </VStack>
   
</SimpleGrid>
    
    <Container maxW='2xl' w='400px' bg='blue.600' centerContent>
   <Heading as='h1'>SIGN UP AND GET 15% OFF</Heading>
   <Text>Sign up for promotions, tailored new arrivals, stock updates and more – straight to your inbox</Text>
   <RadioGroup defaultValue='2'>
  <Stack spacing={5} direction='row'>
    <Radio colorScheme='red' value='1'>
      Radio
    </Radio>
    <Radio colorScheme='green' value='2'>
      Radio
    </Radio>
  </Stack>
</RadioGroup>
    </Container>


       </>
    )
}
export default Child;

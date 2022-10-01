import React from "react"
import Footer from "./footer";

import {useNavigate} from "react-router-dom";

 import { 
    Flex,
    Box,
    Image,
    SimpleGrid,
    Spacer,
    Heading,
    VStack,
     Text,
    Button,
  

 } from "@chakra-ui/react";

const MenPage=()=>{
    const goTo=useNavigate();
    const ChildAllData=()=>{
        return(
          goTo('./AllKidsData')        
        )
        }

    return (
        <Box>
      
      
        <Box p="20px">
        <SimpleGrid columns={2} spacing={10} mt="120px">
          <VStack mt="140px">
            <Heading as="h2" size="2xl" w="500px" noOfLines={3}>
              VALENTINO GARAVANI: ALL PINK EVERYTHING
            </Heading>
            <Text fontSize="23px" w="550px">
              Creative Director Pierpaolo Piccioli’s new Valentino Pink PP
              collection turns fashion’s boldest shade into an ultra-wearable
              modern neutral — discover the runway highlights here
            </Text>

            <Button size="lg"  p="10px" colorScheme="black" variant="outline">
             Explore More
            </Button>
          </VStack>

          <Box height="50px">
            {" "}
            <Image
              src="https://cdn-static.farfetch-contents.com/cms-cm10/caas/v1/media/3966294/data/1a5d386d73d925e6f4b523c422406e5c/1x1_messaging-side/637/data.jpeg"
              alt="man"
            />
          </Box>
        </SimpleGrid>
     
     
    <Box mt='230px'>
    <Text fontSize='30px' mb='10px'>The best of new in</Text>
    <SimpleGrid columns={3} spacing='40px' mb='30px'>
        <Box >
        <Image
    boxSize='400px'
   
    src='https://cdn-static.farfetch-contents.com/cms-cm10/caas/v1/media/3965638/data/f643fcbe064f1784f86cfeba03fad19a/1x1_three-columns/480/data.jpeg'
    alt='Dan Abramov'
  />
  <Text>BABY</Text>
   <Text>Cozy snowsuits and unmistakable checks</Text>
   </Box>
   <Box>
   <Image
    boxSize='400px'
  
    src='https://cdn-static.farfetch-contents.com/cms-cm10/caas/v1/media/3965766/data/437665710b0100a1573e87a23e01ec95/1x1_three-columns/480/data.jpeg'
    alt='Dan Abramov'
  />
  <Text>KIDS</Text>
  <Text>The season’s key layers</Text>
   </Box>
  
  <Box>
  <Image boxSize='400px' src='https://cdn-static.farfetch-contents.com/cms-cm10/caas/v1/media/3965660/data/c4a3b767e6dab99cffea70cdb489c07e/1x1_three-columns/480/data.jpeg' alt='Dan Abramov' />
  <Text>TEENS</Text>
  <Text>From chunky boots to matching sets</Text>
  </Box>
  
</SimpleGrid>

    </Box>
   
    <Box>
    <SimpleGrid columns={2} spacing={10}>
  <Box height='80px'>
    <Image src='https://cdn-static.farfetch-contents.com/cms-cm10/caas/v1/media/3965648/data/5b86ebffdb6e11dbb7217d93039bdccf/1x1_two-columns/637/data.jpeg'/>
    <Text>NEW KICKS </Text>
       <Text>  Explore our sneaker edit, courtesy of fashion’s biggest names</Text>
     
  </Box>
  <Box  height='80px'>
    <Image src='https://cdn-static.farfetch-contents.com/cms-cm10/caas/v1/media/3965758/data/467ff31f68b8e8c2e761ee2c52358788/1x1_two-columns/637/data.jpeg'/>
    <Text>CONSCIOUS FASHION</Text>
        <Text>Little clothes made with the bigger picture in mind</Text>

  </Box>
 
</SimpleGrid>
    </Box>
     
    <Flex mt='630px'>
  <Text p='4' fontSize='30px' >
  Trending now: 150 most-wanted pieces
  </Text>
  <Spacer />
 
  <Button onClick={ChildAllData} size='lg' p='10px' colorScheme='black' variant='outline'>
    Shop Now
  </Button>

</Flex>
<SimpleGrid minChildWidth='10px' spacing='10px' mt='50px'>
<Box className="parent"   borderRadius='30px' p='18px' position='relative'>
    <Image bg='gray' boxSize='250px' src='https://cdn-images.farfetch-contents.com/19/03/88/49/19038849_41591319_600.jpg'/>
    <Image className="hover-img" boxSize='260px' src='https://cdn-images.farfetch-contents.com/19/03/88/49/19038849_41590521_1000.jpg'></Image>
    <Text color='gray'>New Season</Text>
    <Text fontSize='18px' >Moncler Enfant</Text>
    <Text>Careil belted puffer jacket</Text>
    <Text>$980</Text>
  </Box>
  <Box className="parent"   p='15px' position='relative'>
    <Image boxSize='250px' src='https://cdn-images.farfetch-contents.com/18/58/77/47/18587747_40143873_1000.jpg'/>
    <Image className="hover-img" boxSize='260px' src='https://cdn-images.farfetch-contents.com/18/58/64/21/18586421_40143830_1000.jpg'></Image>
    <Text color='gray'>New Season</Text>
    <Text fontSize='18px'>Moncler Enfant</Text>
    <Text>knitted beanie hat</Text>
    <Text>$170</Text>

  </Box>
  <Box className="parent"  p='15px' position='relative'>
    <Image boxSize='250px' src='https://cdn-images.farfetch-contents.com/18/41/13/41/18411341_40381432_600.jpg'/>
    <Image className="hover-img" boxSize='260px'  src='https://cdn-images.farfetch-contents.com/18/41/13/41/18411341_40378610_1000.jpg'/>

    <Text color='gray'> New Season</Text>
    <Text fontSize='18px'>Marc Jacobs Kids</Text>
    <Text>logo-tape velvet dress </Text>
    <Text>$140</Text>

  </Box>
  <Box  className="parent" p='15px' position='relative'>
    <Image boxSize='250px' src='https://cdn-images.farfetch-contents.com/18/67/48/40/18674840_40337332_600.jpg'/>
    <Image className="hover-img" boxSize='260px' src='https://cdn-images.farfetch-contents.com/18/67/48/40/18674840_40336697_1000.jpg'/>

    <Text color='gray'>New Season</Text>
    <Text fontSize='18px'>Karl Lagerfeld Kids</Text>
    <Text>lace-up leather boots</Text>
    <Text>$327</Text>
  </Box>
  
</SimpleGrid>

<SimpleGrid columns={2} spacing={5}>
<Box mt='60px'>
    <Image boxSize='600px' src='https://cdn-static.farfetch-contents.com/cms-cm10/caas/v1/media/3965740/data/6ee964c35a7d4526d278bf7089f2bebc/1x1_two-columns/637/data.jpeg'/>
<Text>GIVENCHY KIDS</Text>
<Text>Reenergized closet staples for fall</Text>
</Box>

<Box mt='60px'>
    <Image boxSize='600px' src='https://cdn-static.farfetch-contents.com/content/images/Home_CMS/Cms/New%20folder%20(48)/KW/31-08-KW-TEENS-NEW_IN.jpg'/>
<Text>GIVENCHY KIDS</Text>
<Text>Reenergized closet staples for fall</Text>
</Box>

</SimpleGrid>



    </Box>

       <Footer/>
    
       </Box>
    )
}
export default MenPage;

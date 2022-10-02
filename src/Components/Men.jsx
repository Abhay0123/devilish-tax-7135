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
          goTo('./AllMenData')        
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
     
     
        <SimpleGrid minChildWidth='10px' spacing='10px' mt='250px'>
<Box className="parent"   borderRadius='30px' p='18px' position='relative'>
    <Image bg='gray' boxSize='210px' src='https://cdn-images.farfetch-contents.com/19/05/33/77/19053377_41670187_1000.jpg'/>
    <Image className="hover-img" boxSize='230px' src='https://cdn-images.farfetch-contents.com/19/05/33/77/19053377_41668992_1000.jpg'></Image>
    <Text color='gray'>New Season</Text>
    <Text fontSize='18px' >Moncler Enfant</Text>
    <Text>Careil belted puffer jacket</Text>
    <Text>$980</Text>
  </Box>
  <Box className="parent"   p='15px' position='relative'>
    <Image boxSize='250px' src='https://cdn-images.farfetch-contents.com/18/53/61/99/18536199_41050535_1000.jpg'/>
    <Image className="hover-img" boxSize='260px' src='https://cdn-images.farfetch-contents.com/18/53/61/99/18536199_41052154_1000.jpg'></Image>
    <Text color='gray'>New Season</Text>
    <Text fontSize='18px'>Moncler Enfant</Text>
    <Text>knitted beanie hat</Text>
    <Text>$170</Text>

  </Box>
  <Box className="parent"  p='15px' position='relative'>
    <Image boxSize='210px' src='https://cdn-images.farfetch-contents.com/18/02/57/49/18025749_39820818_1000.jpg'/>
    <Image className="hover-img" boxSize='230px'  src='https://cdn-images.farfetch-contents.com/18/02/57/49/18025749_39833910_1000.jpg'/>

    <Text color='gray'> New Season</Text>
    <Text fontSize='18px'>Marc Jacobs Kids</Text>
    <Text>logo-tape velvet dress </Text>
    <Text>$140</Text>

  </Box>
  <Box  className="parent" p='15px' position='relative'>
    <Image boxSize='220px' src='https://cdn-images.farfetch-contents.com/18/37/32/21/18373221_40975813_1000.jpg'/>
    <Image className="hover-img" boxSize='240px' src='https://cdn-images.farfetch-contents.com/18/37/32/21/18373221_40978501_1000.jpg'/>

    <Text color='gray'>New Season</Text>
    <Text fontSize='18px'>Karl Lagerfeld Kids</Text>
    <Text>lace-up leather boots</Text>
    <Text>$327</Text>
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
   
   
<SimpleGrid columns={3} spacing={5}>
<Box mt='60px'>
    <Image boxSize='600px' src='https://cdn-static.farfetch-contents.com/cms-cm10/caas/v1/media/3969212/data/0c331e37e3a0e6c3adf0c33a2adcf32a/3x4_three-columns/480/data.jpeg'/>
<Text>GUCCI
</Text>
<Text>The new Exquisite collection is here</Text>
</Box>

<Box mt='60px'>
    <Image boxSize='600px' src='https://cdn-static.farfetch-contents.com/cms-cm10/caas/v1/media/3966310/data/a94ef12bfc9bdd5c17447a34b96c6748/3x4_three-columns/480/data.jpeg'/>
<Text>FERRAGAMO
</Text>
<Text>Quietly elegant wardrobe staples</Text>
</Box>
<Box mt='60px'>
    <Image boxSize='600px' src='https://cdn-static.farfetch-contents.com/cms-cm10/caas/v1/media/3966258/data/26fd1aac47f8ca27de0ea83948524a46/3x4_three-columns/480/data.jpeg'/>
<Text>MONOCHROME SEPARATES</Text>
<Text>From blown-up proportions to classic cuts</Text>
</Box>

</SimpleGrid>
     
    <Flex mt='120px'>
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
    <Image bg='gray' boxSize='210px' src='https://cdn-images.farfetch-contents.com/18/68/68/74/18686874_41603228_1000.jpg'/>
    <Image className="hover-img" boxSize='230px' src='https://cdn-images.farfetch-contents.com/18/68/68/74/18686874_41603221_1000.jpg'></Image>
    <Text color='gray'>New Season</Text>
    <Text fontSize='18px' >Moncler Enfant</Text>
    <Text>Careil belted puffer jacket</Text>
    <Text>$980</Text>
  </Box>
  <Box className="parent"   p='15px' position='relative'>
    <Image boxSize='250px' src='https://cdn-images.farfetch-contents.com/18/72/86/72/18728672_41723041_1000.jpg'/>
    <Image className="hover-img" boxSize='260px' src='https://cdn-images.farfetch-contents.com/18/72/86/72/18728672_41724036_1000.jpg'></Image>
    <Text color='gray'>New Season</Text>
    <Text fontSize='18px'>Moncler Enfant</Text>
    <Text>knitted beanie hat</Text>
    <Text>$170</Text>

  </Box>
  <Box className="parent"  p='15px' position='relative'>
    <Image boxSize='210px' src='https://cdn-images.farfetch-contents.com/19/05/40/45/19054045_41684572_1000.jpg'/>
    <Image className="hover-img" boxSize='230px'  src='https://cdn-images.farfetch-contents.com/19/05/40/45/19054045_41684578_1000.jpg'/>

    <Text color='gray'> New Season</Text>
    <Text fontSize='18px'>Marc Jacobs Kids</Text>
    <Text>logo-tape velvet dress </Text>
    <Text>$140</Text>

  </Box>
  <Box  className="parent" p='15px' position='relative'>
    <Image boxSize='220px' src='https://cdn-images.farfetch-contents.com/18/65/95/82/18659582_40730782_1000.jpg'/>
    <Image className="hover-img" boxSize='240px' src='https://cdn-images.farfetch-contents.com/18/65/95/82/18659582_40729460_1000.jpg'/>

    <Text color='gray'>New Season</Text>
    <Text fontSize='18px'>Karl Lagerfeld Kids</Text>
    <Text>lace-up leather boots</Text>
    <Text>$327</Text>
  </Box>
  
</SimpleGrid>




    </Box>

       <Footer/>
    
       </Box>
    )
}
export default MenPage;

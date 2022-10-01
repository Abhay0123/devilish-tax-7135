import React from "react";

import Footer from "./footer";
import { useNavigate } from "react-router-dom";

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

const Women = () => {
  const goTo = useNavigate();
  const ChildAllData = () => {
    return goTo("./AllKidsData");
  };

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
              src="https://cdn-static.farfetch-contents.com/cms-cm10/caas/v1/media/3966998/data/5372c6d768851325cc11dd478fb98488/1x1_messaging-side/637/data.jpeg"
              alt="child"
            />
          </Box>
        </SimpleGrid>

        <Box mt="230px">
          <Text fontSize="30px" mb="10px">
            The best of new in
          </Text>
          <SimpleGrid columns={4} spacing="40px" mb="30px">
            <Box>
              <Image
                boxSize="400px"
                src="https://cdn-images.farfetch-contents.com/17/92/07/35/17920735_41351763_600.jpg"
                alt="Dan Abramov"
              />
              <Text>BABY</Text>
              <Text>Cozy snowsuits and unmistakable checks</Text>
            </Box>
            <Box>
              <Image
                boxSize="400px"
                src="https://cdn-images.farfetch-contents.com/18/61/16/61/18611661_41137933_600.jpg"
                alt="Dan Abramov"
              />
              <Text>KIDS</Text>
              <Text>The season’s key layers</Text>
            </Box>

            <Box>
              <Image
                boxSize="400px"
                src="https://cdn-images.farfetch-contents.com/18/59/84/85/18598485_40743820_600.jpg"
                alt="Dan Abramov"
              />
              <Text>TEENS</Text>
              <Text>From chunky boots to matching sets</Text>
            </Box>

            <Box>
              <Image
                boxSize="400px"
                src="https://cdn-images.farfetch-contents.com/18/03/09/12/18030912_41670240_600.jpg"
                alt="Dan Abramov"
              />
              <Text>BABY</Text>
              <Text>Cozy snowsuits and unmistakable checks</Text>
            </Box>
          </SimpleGrid>
        </Box>

        <Box>
          <SimpleGrid columns={2} spacing={10}>
            <Box height="80px">
              <Image src="https://cdn-static.farfetch-contents.com/cms-cm10/caas/v1/media/3967016/data/cbf4021be1c80966be1d6062f869870a/1x1_two-columns/637/data.jpeg" />
              <Text>NEW KICKS </Text>
              <Text>
                {" "}
                Explore our sneaker edit, courtesy of fashion’s biggest names
              </Text>
            </Box>
            <Box height="80px">
              <Image
                boxSize="630px"
                src="https://cdn-static.farfetch-contents.com/cms-cm10/caas/v1/media/3971378/data/ebf56a404917263db776af479e606ec4/451x628/451/data.jpeg"
              />
              <Text>CONSCIOUS FASHION</Text>
              <Text>Little clothes made with the bigger picture in mind</Text>
            </Box>
          </SimpleGrid>
        </Box>

        <Flex mt="630px">
          <Text p="4" fontSize="30px">
            Trending now: 150 most-wanted pieces
          </Text>
          <Spacer />

          <Button
            onClick={ChildAllData}
            size="lg"
            p="10px"
            colorScheme="black"
            variant="outline"
          >
            Shop Now
          </Button>
        </Flex>
        <SimpleGrid minChildWidth="10px" spacing="10px" mt="50px">
          <Box border="1px solid gray" borderRadius="50px" p="15px">
            <Image
              bg="gray"
              boxSize="300px"
              src="https://cdn-images.farfetch-contents.com/18/65/88/09/18658809_41201361_600.jpg"
            />
            <Text color="gray">New Season</Text>
            <Text fontSize="18px">Moncler Enfant</Text>
            <Text>Careil belted puffer jacket</Text>
            <Text>$980</Text>
          </Box>
          <Box border="1px solid gray" borderRadius="50px" p="15px">
            <Image
              boxSize="300px"
              src="https://cdn-images.farfetch-contents.com/18/30/66/38/18306638_41723854_600.jpg"
            />
            <Text color="gray">New Season</Text>
            <Text fontSize="18px">Moncler Enfant</Text>
            <Text>knitted beanie hat</Text>
            <Text>$170</Text>
          </Box>
          <Box border="1px solid gray" borderRadius="50px" p="15px">
            <Image
              boxSize="300px"
              src="https://cdn-images.farfetch-contents.com/19/04/71/24/19047124_41674487_600.jpg"
            />
            <Text color="gray"> New Season</Text>
            <Text fontSize="18px">Marc Jacobs Kids</Text>
            <Text>logo-tape velvet dress </Text>
            <Text>$140</Text>
          </Box>
          <Box border="1px solid gray" borderRadius="50px" p="15px">
            <Image
              boxSize="300px"
              src="https://cdn-images.farfetch-contents.com/18/37/87/38/18378738_40613827_600.jpg"
            />
            <Text color="gray">New Season</Text>
            <Text fontSize="18px">Karl Lagerfeld Kids</Text>
            <Text>lace-up leather boots</Text>
            <Text>$327</Text>
          </Box>
        </SimpleGrid>

        <SimpleGrid columns={3} spacing={5}>
          <Box mt="60px">
            <Image
              boxSize="600px"
              src="https://cdn-static.farfetch-contents.com/cms-cm10/caas/v1/media/3938354/data/2d234013748d4136bb8813a3aae676ec/3x4_three-columns/480/data.jpeg"
            />
            <Text>GIVENCHY KIDS</Text>
            <Text>Reenergized closet staples for fall</Text>
          </Box>

          <Box mt="60px">
            <Image
              boxSize="600px"
              src="https://cdn-static.farfetch-contents.com/cms-cm10/caas/v1/media/3967014/data/645545f25420b8556bea08325a3f88ad/3x4_three-columns/480/data.jpeg"
            />
            <Text>GIVENCHY KIDS</Text>
            <Text>Reenergized closet staples for fall</Text>
          </Box>
          <Box mt="60px">
            <Image
              boxSize="600px"
              src="https://cdn-static.farfetch-contents.com/cms-cm10/caas/v1/media/3967012/data/3676c4377a255dbbcc0fae4b97028415/3x4_three-columns/480/data.jpeg"
            />
            <Text>GIVENCHY KIDS</Text>
            <Text>Reenergized closet staples for fall</Text>
          </Box>
        </SimpleGrid>
      </Box>

      <Footer />
    </Box>
  );
};
export default Women;

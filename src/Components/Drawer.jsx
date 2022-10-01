import React from "react"
import {DrawerOverlay,useDisclosure} from '@chakra-ui/react'

import {Radio,Button,Input,Drawer,RadioGroup,Stack,DrawerBody,DrawerContent,DrawerHeader,Container,Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,} from "@chakra-ui/react";


function Drawerinput() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [placement, setPlacement] = React.useState('right')
  
    return (
      <>
        <RadioGroup defaultValue={placement} onChange={setPlacement}>
          <Stack direction='row' mb='3'>
            <Radio value='top'></Radio>
           
          </Stack>
        </RadioGroup>
        <Button  onClick={onOpen}>
          Search Product
        </Button>
        <Drawer placement={placement} onClose={onClose} isOpen={isOpen}>
          <DrawerOverlay />
          <DrawerContent>
            <DrawerHeader borderBottomWidth='1px'></DrawerHeader>
            <DrawerBody>
                <Container> <Input   htmlSize={50} width='auto' placeholder='search Your Product'/></Container>
           
              
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </>
    )
  }
   export default Drawerinput;

  function Login() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
      <>
        <Button onClick={onOpen}>Open Modal</Button>
  
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Modal Title</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
            <Input />
            <Input />
            </ModalBody>
  
            <ModalFooter>
              <Button colorScheme='blue' mr={3} onClick={onClose}>
                Close
              </Button>
              <Button variant='ghost'>Secondary Action</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }
  export  {Login}; 
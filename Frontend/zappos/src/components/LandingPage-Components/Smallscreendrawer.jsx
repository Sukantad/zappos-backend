import {
    Drawer,
    DrawerBody,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    useDisclosure,
    Spacer,
    Text,
    Flex,
    Button,
    DrawerHeader,
  } from '@chakra-ui/react'
import React from 'react';
import { IoIosArrowForward } from 'react-icons/io';
import { GiHamburgerMenu } from 'react-icons/gi';
import { Link } from 'react-router-dom';

function DrawerExample() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()
  
    return (
      <>
        <Button ref={btnRef} colorScheme='white' color='black' onClick={onOpen}>
          <GiHamburgerMenu/>
        </Button>
        <Drawer
          isOpen={isOpen}
          placement='left'
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
  
            <DrawerBody>
                <DrawerHeader>
                    Zappos Collection
                </DrawerHeader>

              <Flex alignItems='center' mb='5'>
              <Text>New</Text>
              <Spacer/>
                <IoIosArrowForward/>
              </Flex>
              
              <Flex alignItems='center' mb='5'>
              <Link to="/womensclothing"><Text>Women</Text></Link>
              <Spacer/>
                <IoIosArrowForward/>
              </Flex>

              <Flex alignItems='center' mb='5'>
              <Link to="/mensclothing"><Text>Men</Text></Link>
              <Spacer/>
                <IoIosArrowForward/>
              </Flex>

              <Flex alignItems='center' mb='5'>
              <Text>Kids</Text>
              <Spacer/>
                <IoIosArrowForward/>
              </Flex>


              <Flex alignItems='center' mb='5'>
              <Text>Departments</Text>
              <Spacer/>
                <IoIosArrowForward/>
              </Flex>


              <Flex alignItems='center' mb='5'>
              <Text>Brands</Text>
              <Spacer/>
                <IoIosArrowForward/>
              </Flex>

              <Flex alignItems='center' mb='5'>
              <Text>Sale</Text>
              <Spacer/>
                <IoIosArrowForward/>
              </Flex>


              <Flex alignItems='center' mb='5'>
              <Text>🔥 Clothing</Text>
              <Spacer/>
                <IoIosArrowForward/>
              </Flex>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </>
    )
  }

  export default DrawerExample;
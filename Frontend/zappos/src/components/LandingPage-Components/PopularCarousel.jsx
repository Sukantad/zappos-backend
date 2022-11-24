import { Box, Center, Flex, Image, Text } from "@chakra-ui/react";
// import { Carousel } from "react-responsive-carousel";
// import "react-responsive-carousel/lib/styles/carousel.min.css";
import Flickity from "react-flickity-component";
import "./flickity.css";

const PopularCarousel = () => {


    return (

            <Flickity height='300px'>

            <Box w='40%' ml='20px' h='300px' border='1px solid #f5f5f5'>
                    <Flex h='300px' alignItems='center' bg='#f5f5f5'>
                    <Image src='https://m.media-amazon.com/images/I/71CNa3Q3lTL._AC_SX255_.jpg'/>
                    </Flex>
                    <Center><Text mt='10px' as='button'
                    _hover={{textDecoration:'underline', color:'blue.400'}}
                    >Running Shoes</Text></Center>
                </Box>

                <Box w='40%' ml='20px' h='300px' border='1px solid #f5f5f5'>
                    <Flex h='300px' alignItems='center' bg='#f5f5f5'>
                    <Image src='https://m.media-amazon.com/images/I/61+on0q5FHL._AC_SX255_.jpg'/>
                    </Flex>
                    <Center><Text mt='10px' as='button'
                    _hover={{textDecoration:'underline', color:'blue.400'}}
                    >Running Shoes</Text></Center>
                </Box>

                <Box w='40%' ml='20px' h='300px' border='1px solid #f5f5f5'>
                    <Flex h='300px' alignItems='center' bg='#f5f5f5'>
                    <Image h='100%' w='100%' src='https://m.media-amazon.com/images/I/71XNQyih6WL._AC_SX255_.jpg'/>
                    </Flex>
                    <Center><Text mt='10px' as='button'
                    _hover={{textDecoration:'underline', color:'blue.400'}}
                    >Running Shoes</Text></Center>
                </Box>

                <Box w='40%' ml='20px' h='300px' border='1px solid #f5f5f5'>
                    <Flex h='300px' alignItems='center' bg='#f5f5f5'>
                    <Image h='100%' w='100%' src='https://m.media-amazon.com/images/I/71ARoYPrJ6L._AC_SX255_.jpg'/>
                    </Flex>
                    <Center><Text mt='10px' as='button'
                    _hover={{textDecoration:'underline', color:'blue.400'}}
                    >Running Shoes</Text></Center>
                </Box>

                <Box w='40%' ml='20px' h='300px' border='1px solid #f5f5f5'>
                    <Flex h='300px' alignItems='center' bg='#f5f5f5'>
                    <Image src='https://m.media-amazon.com/images/I/61Jq4k1kyyL._AC_SX255_.jpg'/>
                    </Flex>
                    <Center><Text mt='10px' as='button'
                    _hover={{textDecoration:'underline', color:'blue.400'}}
                    >Running Shoes</Text></Center>
                </Box>

                <Box w='40%' ml='20px' h='300px' border='1px solid #f5f5f5'>
                    <Flex h='300px' alignItems='center' bg='#f5f5f5'>
                    <Image h='100%' w='100%' src='https://m.media-amazon.com/images/I/91ZXKHtVTcL._AC_SX255_.jpg'/>
                    </Flex>
                    <Center><Text mt='10px' as='button'
                    _hover={{textDecoration:'underline', color:'blue.400'}}
                    >Running Shoes</Text></Center>
                </Box>

            </Flickity>

    )
}

export default PopularCarousel;
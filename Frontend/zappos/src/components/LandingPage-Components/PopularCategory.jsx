import { Box, Center, Flex, Grid, GridItem, Image, Text } from "@chakra-ui/react"
import PopularCarousel from "./PopularCarousel";


const PopularCategory = () => {


    return (
        <Box>
            <Text
            mt={{base:'300px', sm:'300px', md:'10px', lg:'25px', xl:'25px'}}
            fontWeight='bold' fontSize='30px' mb='20px' ml='2%'
            >Shop Popular Categories</Text>


            <Grid templateColumns='repeat(6, 1fr)' gap={2} w='95%' m='auto'
            display={{base:'none', sm:'none', md:'grid', lg:'grid', xl:'grid'}}
            >
                <GridItem w='100%' h='350px' border='1px solid #f5f5f5'>
                    <Flex h='300px' alignItems='center' bg='#f5f5f5'>
                    <Image src='https://m.media-amazon.com/images/I/71CNa3Q3lTL._AC_SX255_.jpg'/>
                    </Flex>
                    <Center><Text mt='10px' as='button'
                    _hover={{textDecoration:'underline', color:'blue.400'}}
                    >Running Shoes</Text></Center>
                </GridItem>

                <GridItem w='100%' h='300px' border='1px solid #f5f5f5'>
                    <Flex h='300px' alignItems='center' bg='#f5f5f5'>
                    <Image src='https://m.media-amazon.com/images/I/61+on0q5FHL._AC_SX255_.jpg'/>
                    </Flex>
                    <Center><Text mt='10px' as='button'
                    _hover={{textDecoration:'underline', color:'blue.400'}}
                    >Running Shoes</Text></Center>
                </GridItem>

                <GridItem w='100%' h='300px' border='1px solid #f5f5f5'>
                    <Flex h='300px' alignItems='center' bg='#f5f5f5'>
                    <Image h='100%' w='100%' src='https://m.media-amazon.com/images/I/71XNQyih6WL._AC_SX255_.jpg'/>
                    </Flex>
                    <Center><Text mt='10px' as='button'
                    _hover={{textDecoration:'underline', color:'blue.400'}}
                    >Running Shoes</Text></Center>
                </GridItem>

                <GridItem w='100%' h='300px' border='1px solid #f5f5f5'>
                    <Flex h='300px' alignItems='center' bg='#f5f5f5'>
                    <Image h='100%' w='100%' src='https://m.media-amazon.com/images/I/71ARoYPrJ6L._AC_SX255_.jpg'/>
                    </Flex>
                    <Center><Text mt='10px' as='button'
                    _hover={{textDecoration:'underline', color:'blue.400'}}
                    >Running Shoes</Text></Center>
                </GridItem>

                <GridItem w='100%' h='300px' border='1px solid #f5f5f5'>
                    <Flex h='300px' alignItems='center' bg='#f5f5f5'>
                    <Image src='https://m.media-amazon.com/images/I/61Jq4k1kyyL._AC_SX255_.jpg'/>
                    </Flex>
                    <Center><Text mt='10px' as='button'
                    _hover={{textDecoration:'underline', color:'blue.400'}}
                    >Running Shoes</Text></Center>
                </GridItem>

                <GridItem w='100%' h='300px' border='1px solid #f5f5f5'>
                    <Flex h='300px' alignItems='center' bg='#f5f5f5'>
                    <Image h='100%' w='100%' src='https://m.media-amazon.com/images/I/91ZXKHtVTcL._AC_SX255_.jpg'/>
                    </Flex>
                    <Center><Text mt='10px' as='button'
                    _hover={{textDecoration:'underline', color:'blue.400'}}
                    >Running Shoes</Text></Center>
                </GridItem>

            </Grid>
            {/* display={{base:'block', sm:'block', md:'none', lg:'none', xl:'none'}} */}
            <Box display={{base:'block', sm:'block', md:'none', lg:'none', xl:'none'}}>
            <PopularCarousel/>
            </Box>








            <Box w='95%' m='auto' mt='50px'>
            <Grid templateColumns={{base:'repeat(1, 1fr)', sm:'repeat(3, 1fr)', md:'repeat(3, 1fr)', lg:'repeat(3, 1fr)', xl:'repeat(3, 1fr)'}} gap={3}>
                
                <GridItem w='100%' border='1px solid white'
                h={{base:'550px', sm:'480px', md:'480px', lg:'620px', xl:'620px'}}
                >
                    <Image w='100%'
                    h={{base:'400px', sm:'250px', md:'300px', lg:'500px', xl:'500px'}}
                    src='https://m.media-amazon.com/images/G/01/2022/womens/WOMENS-SWEATERS-CARDIGANS-OCTOBER-TRIPTYCH-500x500.jpg' alt='add'/>
                
                
                    <Text textAlign='center' fontWeight='bold.800' mt='10px' fontSize='20px'>Bundle Up: Sweaters & Cardigans</Text>
                    <Text w='100%' textAlign='center' fontSize='18px'>These versatile layering pieces pair effortlessly with every outfit</Text>
                    <Text textAlign='center' fontWeight='bold.100' textDecoration='underline'>SHOP WOMEN'S SWEATERS & CARDIGANS</Text>
                
                </GridItem>

                <GridItem w='100%' border='1px solid white'
                h={{base:'550px', sm:'480px', md:'480px', lg:'620px', xl:'620px'}}
                >
                    <Image w='100%'
                    h={{base:'400px', sm:'250px', md:'300px', lg:'500px', xl:'500px'}}
                    src='https://m.media-amazon.com/images/G/01/2022/homepage10.03/BROADCAST-SLIPPERS-NEW-ARRIVALS-OCTOBER-TRIPTYCH-500x500.jpg' alt='add'/>
                
                
                    <Text textAlign='center' fontWeight='bold.800' mt='10px' fontSize='20px'>Bundle Up: Sweaters & Cardigans</Text>
                    <Text w='100%' textAlign='center' fontSize='18px'>These versatile layering pieces pair effortlessly with every outfit</Text>
                    <Text textAlign='center' fontWeight='bold.100' textDecoration='underline'>SHOP WOMEN'S SWEATERS & CARDIGANS</Text>
                
                </GridItem>

                <GridItem w='100%' border='1px solid white'
                h={{base:'550px', sm:'480px', md:'480px', lg:'620px', xl:'620px'}}
                >
                    <Image w='100%'
                    h={{base:'400px', sm:'250px', md:'300px', lg:'500px', xl:'500px'}}
                    src='https://m.media-amazon.com/images/G/01/2022/homepage10.03/HOMEPAGE-DENIM-NEW-ARRIVALS-TRIPTYCH-500x500.jpg' alt='add'/>
                
                
                    <Text textAlign='center' fontWeight='bold.800' mt='10px' fontSize='20px'>Bundle Up: Sweaters & Cardigans</Text>
                    <Text w='100%' textAlign='center' fontSize='18px'>These versatile layering pieces pair effortlessly with every outfit</Text>
                    <Text textAlign='center' fontWeight='bold.100' textDecoration='underline'>SHOP WOMEN'S SWEATERS & CARDIGANS</Text>
                
                </GridItem>

                
                
            </Grid>
            </Box>
        </Box>
    )
}

export default PopularCategory;
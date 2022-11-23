import { Box, Button, Flex, Grid, GridItem, Image, Text } from "@chakra-ui/react"
import { AiOutlineHeart } from 'react-icons/ai'
const BelowTrending = () => {

    return (
        <Box>
            <Grid templateColumns={{ base: 'repeat(1, 1fr)', sm: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)', xl: 'repeat(3, 1fr)' }} gap={3} w='95%' m='auto' mt='80px'

            >

                <GridItem>
                    <Text fontSize='25px' fontWeight='bold.800'
                    >Stay Cozy with Koolaburra by UGG®</Text>
                    <Button mt='20px' border='1px solid black' bg='white' mb='20px'
                        _hover={{ bg: 'black', color: 'white' }}
                    >SHOP FALL KOOLABURRA BYUGG</Button>
                    <Image src="https://m.media-amazon.com/images/G/01/2022/homepage10.10.2/Koola_photo_500x740_1.jpg" />
                </GridItem>

                <GridItem colSpan={{ base: '1', sm: '1', md: '1', lg: '2', xl: '2' }}>
                    <Grid templateColumns={{ base: 'repeat(1, 1fr)', sm: 'repeat(2, 1fr)', md: 'repeat(2, 1fr)', lg: 'repeat(4, 1fr)', xl: 'repeat(4, 1fr)' }} gap={5}>

                        <GridItem mr='20px' bg='white' border='1px solid white' w='100%'
                            h={{ base: '405px', sm: '360px', md: '360px', lg: '360px', xl: '360px' }}
                        >
                            <Flex h={{ base: '290px', sm: '240px', md: '240px', lg: '240px', xl: '240px' }}
                            alignItems='center' border='1px solid #f5f5f5' bg='#f5f5f5'
                            >
                                <Image display='flex' m='auto'
                                    
                                    src="https://m.media-amazon.com/images/I/711RItcObGL._AC_SX255_.jpg" alt='img' />
                            </Flex>
                            <Flex m='10px' mb='-5px' alignItems='center'><AiOutlineHeart /> 11</Flex>
                            <Text m='10px' mb='-5px'>Koolaburra by UGG Peachee</Text>
                            <Text m='10px'>$ 44.95</Text>
                        </GridItem>

                        <GridItem mr='20px' bg='white' border='1px solid white' w='100%'
                            h={{ base: '405px', sm: '360px', md: '360px', lg: '360px', xl: '360px' }}
                        >
                            <Flex h={{ base: '290px', sm: '240px', md: '240px', lg: '240px', xl: '240px' }}
                            alignItems='center' border='1px solid #f5f5f5' bg='#f5f5f5'
                            >
                                <Image display='flex' m='auto'
                                    
                                    src="https://m.media-amazon.com/images/I/61h+FkkvRgL._AC_SX255_.jpg" alt='img' />
                            </Flex>
                            <Flex m='10px' mb='-5px' alignItems='center'><AiOutlineHeart /> 18</Flex>
                            <Text m='10px' mb='-5px'>Koolaburra by UGG Milo Peep</Text>
                            <Text m='10px'>$ 49</Text>
                        </GridItem>
                        
                        <GridItem mr='20px' bg='white' border='1px solid white' w='100%'
                            h={{ base: '405px', sm: '360px', md: '360px', lg: '360px', xl: '360px' }}
                        >
                            <Flex h={{ base: '290px', sm: '240px', md: '240px', lg: '240px', xl: '240px' }}
                            alignItems='center' border='1px solid #f5f5f5' bg='#f5f5f5'
                            >
                                <Image display='flex' m='auto'
                                    
                                    src="https://m.media-amazon.com/images/I/719iSl6EsEL._AC_SX255_.jpg" alt='img' />
                            </Flex>
                            <Flex m='10px' mb='-5px' alignItems='center'><AiOutlineHeart /> 4</Flex>
                            <Text m='10px' mb='-5px'>Koolaburra by UGG Kolson</Text>
                            <Text m='10px'>$ 34</Text>
                        </GridItem>
                        
                        <GridItem mr='20px' bg='white' border='1px solid white' w='100%'
                            h={{ base: '405px', sm: '360px', md: '360px', lg: '360px', xl: '360px' }}
                        >
                            <Flex h={{ base: '290px', sm: '240px', md: '240px', lg: '240px', xl: '240px' }}
                            alignItems='center' border='1px solid #f5f5f5' bg='#f5f5f5'
                            >
                                <Image display='flex' m='auto'
                                    
                                    src="https://m.media-amazon.com/images/I/61h64gXFxwL._AC_SX255_.jpg" alt='img' />
                            </Flex>
                            <Flex m='10px' mb='-5px' alignItems='center'><AiOutlineHeart /> 44</Flex>
                            <Text m='10px' mb='-5px'>Koolaburra by UGG Cardina</Text>
                            <Text m='10px'>$ 38</Text>
                        </GridItem>
                        
                        <GridItem mr='20px' bg='white' border='1px solid white' w='100%'
                        display={{ base: 'none', sm: 'none', md: 'none', lg: 'block', xl: 'block' }}
                            h={{ base: '405px', sm: '360px', md: '360px', lg: '360px', xl: '360px' }}
                        >
                            <Flex h={{ base: '290px', sm: '240px', md: '240px', lg: '240px', xl: '240px' }}
                            alignItems='center' border='1px solid #f5f5f5' bg='#f5f5f5'
                            >
                                <Image display='flex' m='auto'
                                    
                                    src="https://m.media-amazon.com/images/I/71QWLyRtJSL._AC_SX255_.jpg" alt='img' />
                            </Flex>
                            <Flex m='10px' mb='-5px' alignItems='center'><AiOutlineHeart /> 17</Flex>
                            <Text m='10px' mb='-5px'>Koolaburra by UGG Victoria Short</Text>
                            <Text m='10px'>$ 46.95</Text>
                        </GridItem>
                        
                        <GridItem mr='20px' bg='white' border='1px solid white' w='100%'
                        display={{ base: 'none', sm: 'none', md: 'none', lg: 'block', xl: 'block' }}
                            h={{ base: '405px', sm: '360px', md: '360px', lg: '360px', xl: '360px' }}
                        >
                            <Flex h={{ base: '290px', sm: '240px', md: '240px', lg: '240px', xl: '240px' }}
                            alignItems='center' border='1px solid #f5f5f5' bg='#f5f5f5'
                            >
                                <Image display='flex' m='auto'
                                    
                                    src="https://m.media-amazon.com/images/I/612fuvHjV6L._AC_SX255_.jpg" alt='img' />
                            </Flex>
                            <Flex m='10px' mb='-5px' alignItems='center'><AiOutlineHeart /> 15</Flex>
                            <Text m='10px' mb='-5px'>Koolaburra by UGG Advay Tall</Text>
                            <Text m='10px'>$ 40</Text>
                        </GridItem>
                        
                        <GridItem mr='20px' bg='white' border='1px solid white' w='100%'
                        display={{ base: 'none', sm: 'none', md: 'none', lg: 'block', xl: 'block' }}
                            h={{ base: '405px', sm: '360px', md: '360px', lg: '360px', xl: '360px' }}
                        >
                            <Flex h={{ base: '290px', sm: '240px', md: '240px', lg: '240px', xl: '240px' }}
                            alignItems='center' border='1px solid #f5f5f5' bg='#f5f5f5'
                            >
                                <Image display='flex' m='auto'
                                    
                                    src="https://m.media-amazon.com/images/I/71WnCiyJllL._AC_SX255_.jpg" alt='img' />
                            </Flex>
                            <Flex m='10px' mb='-5px' alignItems='center'><AiOutlineHeart /> 21</Flex>
                            <Text m='10px' mb='-5px'>Koolaburra by UGG Sundell Fuzz Chukka</Text>
                            <Text m='10px'>$ 30</Text>
                        </GridItem>
                        
                        
                        <GridItem mr='20px' bg='white' border='1px solid white' w='100%'
                        display={{ base: 'none', sm: 'none', md: 'none', lg: 'block', xl: 'block' }}
                            h={{ base: '405px', sm: '360px', md: '360px', lg: '360px', xl: '360px' }}
                        >
                            <Flex h={{ base: '290px', sm: '240px', md: '240px', lg: '240px', xl: '240px' }}
                            alignItems='center' border='1px solid #f5f5f5' bg='#f5f5f5'
                            >
                                <Image display='flex' m='auto'
                                    
                                    src="https://m.media-amazon.com/images/I/71YyXlX2wnL._AC_SX255_.jpg" alt='img' />
                            </Flex>
                            <Flex m='10px' mb='-5px' alignItems='center'><AiOutlineHeart /> 3</Flex>
                            <Text m='10px' mb='-5px'>Koolaburra by UGG Easson</Text>
                            <Text m='10px'>$ 34.95</Text>
                        </GridItem>


                    </Grid>
                </GridItem>

            </Grid>
        </Box>
    )
}

export default BelowTrending;
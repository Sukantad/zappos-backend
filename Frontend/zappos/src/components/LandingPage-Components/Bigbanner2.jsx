import { Box, Button, Grid, GridItem, Image, Text } from "@chakra-ui/react"


const Bigbanner2 = () => {


    return (
        <Box mb='80px' mt='100px'>

            <Grid w='95%' m='auto' mt='60px'
                templateColumns={{ base: 'repeat(1, 1fr)', sm: 'repeat(1, 1fr)', md: 'repeat(3, 1fr)', lg: 'repeat(3, 1fr)', xl: 'repeat(3, 1fr)' }} gap={2}>
                <GridItem
                    colSpan={2}
                >
                    <Image
                        h={{ base: '200px', sm: 'auto', md: '500px', lg: 'auto', xl: 'auto' }}
                        src="https://m.media-amazon.com/images/G/01/2022/the-style-room/EDITORS-PICKS-OCTOBER-TSR-960x500.jpg" />
                </GridItem>


                <GridItem border=' 1px solid white' bg='white' p='5px'>

                    <Box textAlign='center'>
                        <Text fontSize='30px' fontWeight='bold.500'
                            mt={{ base: '0', sm: '0', md: '20%', lg: '20%', xl: '20%' }}
                        >THE STYLE ROOM</Text>
                        <Text fontSize='30px' fontWeight='bold.500'
                            mt='10px'
                        >Fall 2022 Stylist Picks</Text>
                        <Text w='95%' m='auto' fontSize='20px' mt='20px'>Showcasing our favourite mood-boosting fall arrivals featuring vivid color and unconventional pairings.</Text>
                        <Button mt='20px' border='1px solid black' bg='white'
                            _hover={{ bg: 'black', color: 'white' }}
                        >SHOP FALL 2022 STYLIST PICKS</Button>
                    </Box>

                </GridItem>

            </Grid>

        </Box>
    )
}

export default Bigbanner2;
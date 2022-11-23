import { Box, Button, Grid, GridItem, Image, Text } from "@chakra-ui/react"


const Bigbanners = ()=>{


    return (
        <Box>
            

                <Grid w='90%' m='auto' mt='60px'
                 templateColumns={{base:'repeat(1, 1fr)', sm:'repeat(1, 1fr)', md:'repeat(2, 1fr)', lg:'repeat(2, 1fr)', xl:'repeat(2, 1fr)'}} gap={5}>
                        <GridItem border=' 1px solid #f5f5f5' bg='#f5f5f5'>
                            
                                    <Box textAlign='center'>
                                        <Image display='flex' w='50%' m='auto' mt='25%' src="https://m.media-amazon.com/images/G/01/2022/homepage7.04/COOP-NEW-ARRIVAL-LOGO-1X-01_1.svg"/>
                                        <Text w='70%' m='auto' fontSize='18px' mt='20px'>Zappos Print Lab X Crocs Gone Wild Exclusives! We’ve gone wild for this Crocs collab, featuring maximalist animal prints and bandana-layered attitude.</Text>
                                        <Button mt='20px' border='1px solid black' bg='#f5f5f5'
                                        _hover={{bg:'black', color:'white'}}
                                        >SHOP OUR CROCS EXCLUSIVES</Button>
                                    </Box>
                            
                        </GridItem>

                        <GridItem>
                            <Image
                            h={{base:'auto', sm:'auto', md:'500px', lg:'auto', xl:'auto'}}
                            src="https://m.media-amazon.com/images/G/01/2022/homepage10.10.2/COOP-CROCS-GONE-WILD-NEW-ARRIVALS-DESKTOP-RIGHT-1X-634x634.jpg"/>
                        </GridItem>
                </Grid>




                <Grid w='95%' m='auto' mt='60px' 
                 templateColumns={{base:'repeat(1, 1fr)', sm:'repeat(1, 1fr)', md:'repeat(3, 1fr)', lg:'repeat(3, 1fr)', xl:'repeat(3, 1fr)'}} gap={5}>
                        <GridItem border=' 1px solid #f5f5f5' bg='#f5f5f5' p='5px'>
                            
                                    <Box textAlign='center'>
                                        <Text fontSize='30px' fontWeight='bold.500'
                                        mt={{base:'0', sm:'0', md:'20%', lg:'20%', xl:'20%'}}
                                        >Be Seen with Brooks Run Visible</Text><Text w='95%' m='auto' fontSize='18px' mt='20px'>Brighten up your late-night run with apparel and sneakers featuring 3M™ Scotchlite™ Carbon Black Stretch reflectivity and contrasting fluorescent colors.</Text>
                                        <Button mt='20px' border='1px solid black' bg='#f5f5f5'
                                        _hover={{bg:'black', color:'white'}}
                                        >Shop All Brooks</Button>
                                    </Box>
                            
                        </GridItem>

                        <GridItem
                        colSpan={2}
                        >
                            <Image
                            h={{base:'auto', sm:'auto', md:'500px', lg:'auto', xl:'auto'}}
                            src="https://m.media-amazon.com/images/G/01/2022/homepage10.10.2/HP-AOE-BROOKS-RUNVIS-960x500_1.png"/>
                        </GridItem>
                </Grid>


                
        </Box>
    )
}

export default Bigbanners;
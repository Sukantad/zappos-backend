import { Box, Grid, GridItem, Image, Text } from "@chakra-ui/react"

const Zapposforgood = ()=>{


    return(
        <Box mt='60px'>
            <Grid w='95%' m='auto'
            templateColumns={{ base: 'repeat(1, 1fr)', sm: 'repeat(1, 1fr)', md: 'repeat(3, 1fr)', lg: 'repeat(3, 1fr)', xl: 'repeat(3, 1fr)' }} gap={4}
            >
                <GridItem w='100%'>
                    <Image w='100%' src='https://m.media-amazon.com/images/G/01/zappos/landing/opus/2021/homepage/Zappos_ONE_Retina.png'/>

                    <Text fontSize='20px' fontWeight='bold.500' textAlign='center'
                    >Diversity Equity & Inclusion</Text>

                    <Text textAlign='center'>At Zappos, diversity and individuality are central to our core values</Text>
                
                    <Text fontSize='18px' fontWeight='bold.500' textDecoration='underline' textAlign='center'
                    >LEARN MORE ABOUT ZAPPOS ONE PORPOSE</Text>
                </GridItem>


                <GridItem w='100%'>
                    <Image w='100%' src='https://m.media-amazon.com/images/G/01/2022/homepage2.08/Blank_500_x_500-491.jpg'/>

                    <Text fontSize='20px' fontWeight='bold.500' textAlign='center'
                    >Zappos for Good</Text>

                    <Text textAlign='center'>Learn how to easily donate or recycle your secondhand items.</Text>
                
                    <Text fontSize='18px' fontWeight='bold.500' textDecoration='underline' textAlign='center'
                    >EXPLORE ZAPPOS FOR GOOD</Text>
                </GridItem>

                <GridItem w='100%'>
                    <Image w='100%' src='https://m.media-amazon.com/images/G/01/zappos/landing/opus/2020/homepage/july/GGPromo.png'/>

                    <Text fontSize='20px' fontWeight='bold.500' textAlign='center'
                    >Goods for Good</Text>

                    <Text textAlign='center'>We're highlighting brands who are making a difference and helping build a better place for us all.</Text>
                
                    <Text fontSize='18px' fontWeight='bold.500' textDecoration='underline' textAlign='center'
                    >SHOP GOODS FOR GOOD</Text>
                </GridItem>
            </Grid>
        </Box>
    )
}

export default Zapposforgood
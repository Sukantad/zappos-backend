import { Box, Button, Flex, Grid, GridItem, Input, Text } from "@chakra-ui/react"
import { HiOutlineMailOpen } from 'react-icons/hi';
import { RiWechatLine } from 'react-icons/ri';
import { AiFillFacebook, AiFillInstagram, AiFillTwitterCircle, AiFillYoutube } from 'react-icons/ai';
import { BsPinterest } from 'react-icons/bs';
const Footer = () => {

    return (
        <Box>
            <Box bg='#032c48' mt='80px' color='white' pt='20px' pl='30px'
            h={{ base: '180px', sm: '180px', md: '180px', lg: '160px', xl: '160px' }}
            >
                <Text fontWeight='bold' fontSize='18px'>Make Zappos (Emails) Your New BFF!</Text>
                <Text>Email</Text>
                
                <Input placeholder='Email Address' bg='white'  mt='10px' 
                w={{ base: '80%', sm: '80%', md: '40%', lg: '25%', xl: '25%' }}
                />
                <Button bg='#032c48' border='2px solid white' ml='20px'
                    _hover={{ bg: 'white', color: '#032c48' }}
                    mt={{ base: '10px', sm: '10px', md: '-5px', lg: '-5px', xl: '-5px' }}
                ><HiOutlineMailOpen /> SUBSCRIBE TO ZAPPOS EMAILS</Button>
            </Box>


            <Grid bg='#003953' color='white' p='50px'
                templateColumns={{ base: 'repeat(1, 1fr)', sm: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)', lg: 'repeat(4, 1fr)', xl: 'repeat(4, 1fr)' }} gap={3}>
                <GridItem w='100%'

                >
                    <Text fontWeight='bold'>Explore Zappos</Text>
                    <Text>Brands</Text>
                    <Text>Clothing</Text>
                    <Text>The Style Room</Text>
                    <Text>Eyewear</Text>
                    <Text>New Arrivals</Text>
                    <Text>Outdoor</Text>
                    <Text>Rideshop</Text>
                    <Text>Running</Text>
                    <Text>Jackets</Text>
                    <Text>Leather Jackets</Text>
                </GridItem>



                <GridItem w='100%'

                >

                    <Text fontWeight='bold'>Customer Service</Text>
                    <Text>FAQs</Text>
                    <Text>Contact Info</Text>
                    <Text>¿Ayuda en español?</Text>
                    <Text>Shipping And Returns Policy</Text>
                    <Text>About Proposition 65</Text>

                    <Text fontWeight='bold' mt='50px'>Fit Info</Text>
                    <Text>Measurement Guide</Text>
                    <Text>Size Conversion Chart</Text>
                    <Text>Measure Your Bra Size</Text>
                </GridItem>

                <GridItem w='100%'

                >


                    <Text fontWeight='bold'>About Zappos</Text>
                    <Text>About</Text>
                    <Text>Zappos ONE</Text>
                    <Text>Zappos for Good</Text>
                    <Text>Get the Zappos Mobile App</Text>
                    <Text>Amazon Prime Benefits</Text>
                    <Text>Zappos VIP Benefits</Text>
                    <Text>Powered by Zappos</Text>
                    <Text>Coupons</Text>
                    <Text>Accessibility Statement</Text>



                    <Text fontWeight='bold' mt='50px'>Resources</Text>
                    <Text>Associates Program</Text>
                    <Text>Influencer Program</Text>
                    <Text>Jobs</Text>
                    <Text>Press Kit & Brand Inquiries</Text>
                    <Text>Site Map</Text>
                </GridItem>


                <GridItem w='100%'

                >
                    <Box bg='#144860' p='10px'
                    >
                        <Text fontWeight='bold'>Your Voice Matters</Text>
                        <Text>We'd love to learn more about your shopping experiences on Zappos.com and how we can improve!</Text>
                        <Button bg='#144860' border='2px solid white' mt='10px'
                        _hover={{bg:'white', color:'#144860'}}
                        ><RiWechatLine/> TAKE SURVEY</Button>
                    </Box>

                    <Text fontWeight='bold' fontSize='18px' mt='40px'
                    >Connect With US</Text>
                    <Flex >
                    <AiFillFacebook size='35px'/>
                    <AiFillInstagram size='35px'/>
                    <AiFillTwitterCircle size='35px'/>
                    <BsPinterest size='35px'/>
                    <AiFillYoutube size='35px'/>
                    </Flex>
                </GridItem>
            </Grid>

            <Box bg='#003953' color='white' p='10px' borderTop='2px solid #032c48'
            >
                <Text>
                Terms of Use | Privacy Policy | Fur Policy | Interest-Based Ads | 24/7 Customer Service (800) 927-7671
                </Text>
                <Text>© 2009–2022 - Zappos.com LLC or its affiliates</Text>
            </Box>
        </Box>
    )
}

export default Footer;
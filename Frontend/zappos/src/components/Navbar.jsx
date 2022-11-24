import { Box, Button, Flex, Image, Input, Menu, MenuButton, MenuItem, MenuList, Spacer, Tab, TabList, TabPanels, Tabs, Text } from "@chakra-ui/react"
import { ChevronDownIcon } from '@chakra-ui/icons'

import { AiOutlineShoppingCart } from 'react-icons/ai';
import { CgProfile } from 'react-icons/cg';
import DrawerExample from "../components/LandingPage-Components/Smallscreendrawer";
import SignInModal from "./SignInModal";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getlogout } from "../Redux/action";
import MyCart from "../pages/MyCart";

const Navbar = () => {

    const [search, setSearch] = useState("");
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { isauth, userprofile } = useSelector((state) => state);

    const handlesearch = () => {
        if (search === "men" || search === "mens" || search === "mens shirt" || search === "mens cloths" || search === "mensclothing" || search === "menscloths") {
            setSearch("");
            navigate("/category/menscloths")
        }
        if (search === "women" || search === "tops" || search === "womens" || search === "womens shirt" || search === "womens cloths" || search === "womensclothing" || search === "womenscloths") {
            setSearch("");
            navigate("/category/womencloths")
        }
        if (search === "sneakers" || search === "shoes" || search === "boots") {
            setSearch("");
            navigate("/category/menssneakers")
        }
    }

    return (
        <Box w='100%'>
            <Tabs variant='unstyled'>
                <TabList>
                    <Tab _selected={{ color: 'white', bg: 'blue.500' }}
                        h={30} w={20}
                    >
                        <Image

                            h={5} w={20}
                            src='https://m.media-amazon.com/images/G/01/zappos/melody/black-logo.svg' alt='logo' />
                    </Tab>
                    <Tab _selected={{ color: 'white', bg: 'gray.400' }}
                        h={30} w={20}
                    >
                        <Image
                            h={5} w={20}
                            src='https://m.media-amazon.com/images/G/01/vrsnl/vrsnl-logo._CB1564076501_.svg' alt='logo' />
                    </Tab>
                </TabList>
                <TabPanels>
                    {/* <TabPanel>
                    <p>one!</p>
                    </TabPanel> */}
                    {/* <TabPanel>
                        <p>two!</p>
                    </TabPanel> */}
                </TabPanels>
            </Tabs>



            <Flex bg="blue.500" >
                <Menu>
                    <MenuButton bg="blue.500" color='white'
                        _hover={{ bg: "blue.500", color: 'white' }}
                        _active={{ bg: "blue.500", color: 'white' }}
                        as={Button} rightIcon={<ChevronDownIcon />}>
                        Customer Service
                    </MenuButton>
                    <MenuList>
                        <MenuItem>Contact Info</MenuItem>
                        <MenuItem>FAQ</MenuItem>
                        <MenuItem>Give Us Feedback</MenuItem>
                    </MenuList>
                </Menu>
                <Spacer />
                <Text
                    m={2}
                    mr={5}
                    color='white'
                    alignItems='center'
                    display={{ base: 'none', sm: 'none', md: 'none', lg: 'block', xl: 'block' }}
                >
                    Every Zappos order comes with FAST, FREE Shipping, plus a FREE 365-Day Return Policy! More About Shipping and Returns
                </Text>
            </Flex>


            <Flex bg="gray.50">
                <Flex p='4' w='60%'
                justifyContent={'center'}
                >
                    <Box
                        display={{ base: 'flex', sm: 'flex', md: 'flex', lg: 'none', xl: 'none' }}
                    >
                        <DrawerExample />
                    </Box>

                    <Link to="/">
                        <Image
                        m="5px 40px 5px 20px"
                            h="40px" 
                            src="https://m.media-amazon.com/images/G/01/zappos/melody/zapposPBS._CB1509642213_.svg" />
                    </Link>
                 
                    <Input
                        display={{ base: 'none', sm: 'none', md: 'none', lg: 'flex', xl: 'flex' }}
                        border='2px solid #DDDDDD'
                        variant='unstyled'
                        rounded={'0px'}
                         height='40px'

                        w='80%'
                        padding={'10px 12px'}
                        placeholder={ isauth ? `${userprofile.name}, Search for shoes, clothes, etc` :
                                    `Search for shoes, clothes, etc`
                                }
                    
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />

                    <Button
                        display={{ base: 'none', sm: 'none', md: 'none', lg: 'flex', xl: 'flex' }}
                        // p={5}
                        bg='#003953'
                        color='white'
                        rounded={'0px'}
                        _hover={{ bg: "blue.500", color: 'white' }}
                        onClick={handlesearch}
                    >SEARCH</Button>
                </Flex>

                <Spacer />

                <Box m={4} display={{ base: 'block', sm: 'block', md: 'block', lg: 'none', xl: 'none' }}>
                    <CgProfile size={40} />
                </Box>

                <Box m={4} display={{ base: 'block', sm: 'block', md: 'block', lg: 'none', xl: 'none' }}>
                    <Link to="/mycart"><AiOutlineShoppingCart size={40} /></Link>
                </Box>

                <Box p='4' display={{ base: 'none', sm: 'none', md: 'none', lg: 'block', xl: 'block' }}>
                    {
                        isauth ? <MyCart/>
                        :
                        <Link to="/signin"><Button
                        m={2}
                        bg='green.200'
                        _hover={{ bg: "green.100" }}
                    ><Box mr="10px"><AiOutlineShoppingCart /></Box> <span>MY CART</span></Button>
                            </Link>
                    }
                </Box>

            </Flex>


            <Flex p='4' w='100%'
                display={{ base: 'flex', sm: 'flex', md: 'flex', lg: 'none', xl: 'none' }}
            >
                <Input
                    border='1px solid'
                    borderColor='black'
                    w='95%'
                    placeholder={ isauth ? `${userprofile.name}, search for shoes, clothes, etc` :
                    `search for shoes, clothes, etc`
                }
                    m={2}
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />

                <Button
                 
                    bg='#003953'
                    color='white'
                    _hover={{ bg: "blue.500", color: 'white' }}
                    m={2}
                    onClick={handlesearch}
                >SEARCH</Button>
            </Flex>

            <Flex p='2px 10px' justifyContent={'center'} bg="#F4F4F4" display={{ base: 'none', sm: 'none', md: 'none', lg: 'flex', xl: 'flex' }}>
                <Flex color={'rgb(0, 57, 83)'} fontWeight='bold'>
                    <Menu>
                        <MenuButton
                            as={Button} rightIcon={<ChevronDownIcon/>}>
                            Women
                        </MenuButton>
                        <MenuList>
                            <Flex ml='20px'>

                                <MenuList>
                                    <MenuItem fontWeight='bold'>Shoes</MenuItem>
                                    <MenuItem><Link to="/category/womenSneakers">Sneakers and Athletic</Link></MenuItem>
                                    <MenuItem>Sandals</MenuItem>
                                    <MenuItem>Clogs and Mules</MenuItem>
                                    <MenuItem>Heels</MenuItem>
                                    <MenuItem>Boots and Booties</MenuItem>
                                    <MenuItem>Slippers</MenuItem>
                                    <MenuItem>Flats</MenuItem>
                                    <MenuItem>Loafers</MenuItem>
                                    <MenuItem>Comfort</MenuItem>
                                    <MenuItem>Wide</MenuItem>
                                </MenuList>

                                <MenuList>
                                    <MenuItem fontWeight='bold'>Clothing</MenuItem>
                                    <MenuItem><Link to="/womensclothing">Shirts and Tops</Link></MenuItem>
                                    <MenuItem>Swimwear</MenuItem>
                                    <MenuItem>Dresses</MenuItem>
                                    <MenuItem>Shorts</MenuItem>
                                    <MenuItem>Jeans and Denim</MenuItem>
                                    <MenuItem>Underwear and Intimates</MenuItem>
                                    <MenuItem>Coats and Outerwear</MenuItem>
                                    <MenuItem>Socks</MenuItem>
                                    <MenuItem>Sleepwear</MenuItem>
                                    <MenuItem>Activewear</MenuItem>
                                </MenuList>

                                <MenuList>
                                    <MenuItem fontWeight='bold'>Accessories and More</MenuItem>
                                    <MenuItem>Bags and Handbags</MenuItem>
                                    <MenuItem>Backpacks</MenuItem>
                                    <MenuItem>Belt Bags</MenuItem>
                                    <MenuItem>Sunglasses</MenuItem>
                                    <MenuItem>Hats</MenuItem>
                                    <MenuItem>Face Masks</MenuItem>
                                    <MenuItem>Scarves</MenuItem>
                                    <MenuItem>Tech Accessories</MenuItem>
                                    <MenuItem>Blue Light Glasses</MenuItem>
                                    <MenuItem>Shop All Accessories</MenuItem>
                                </MenuList>

                                <MenuList>
                                    <MenuItem fontWeight='bold'>Gift Cards</MenuItem>
                                    <MenuItem>Sale</MenuItem>
                                    <MenuItem>Sneakers and Athletic</MenuItem>
                                    <MenuItem>Heels</MenuItem>
                                    <MenuItem>Sandals</MenuItem>
                                    <MenuItem>Slippers</MenuItem>
                                    <MenuItem>Boots</MenuItem>
                                    <MenuItem>Shirts and Tops</MenuItem>
                                    <MenuItem>Dresses</MenuItem>
                                    <MenuItem>Swim</MenuItem>
                                    <MenuItem>Denim</MenuItem>
                                </MenuList>

                                <Box>
                                    <Image
                                        h='200px' w='130px'
                                        src="https://m.media-amazon.com/images/G/01/2022/Global-Nav/September/COOP-UGG-WOMENS-350x350.jpg" alt="addimage" />

                                    <Image
                                        h='200px' w='130px' mt={3}
                                        src="https://m.media-amazon.com/images/G/01/2022/Global-Nav/October/COOP-DANSKO-WOMENS-350x350.jpg" alt="add" />
                                </Box>


                            </Flex>
                            <Flex p='4'>
                                <Input
                                    border='1px solid'
                                    borderColor='black'
                                    w={400}
                                    placeholder='Gaurav, search for shoes, clothes, etc'
                                    m={2}
                                />

                                <Button
                                    bg='#003953'
                                    color='white'
                                    _hover={{ bg: "blue.500", color: 'white' }}
                                    m={2}
                                >SEARCH</Button>
                            </Flex>
                        </MenuList>

                    </Menu>






                    <Menu>
                        <MenuButton
                            as={Button} rightIcon={<ChevronDownIcon />}>
                            Men
                        </MenuButton>
                        <MenuList>
                            <Flex>

                                <MenuList>
                                    <MenuItem fontWeight='bold'>Shoes</MenuItem>
                                    <MenuItem><Link to="/category/menssneakers">Sneakers and Athletic</Link></MenuItem>
                                    <MenuItem>Sandals</MenuItem>
                                    <MenuItem>Clogs and Mules</MenuItem>
                                    <MenuItem>Heels</MenuItem>
                                    <MenuItem>Boots and Booties</MenuItem>
                                    <MenuItem>Slippers</MenuItem>
                                    <MenuItem>Flats</MenuItem>
                                    <MenuItem>Loafers</MenuItem>
                                    <MenuItem>Comfort</MenuItem>
                                    <MenuItem>Wide</MenuItem>
                                </MenuList>

                                <MenuList>
                                    <MenuItem fontWeight='bold'>Clothing</MenuItem>
                                    <MenuItem><Link to="/mensclothing">Shirts and Tops</Link></MenuItem>
                                    <MenuItem>Swimwear</MenuItem>
                                    <MenuItem>Dresses</MenuItem>
                                    <MenuItem>Shorts</MenuItem>
                                    <MenuItem>Jeans and Denim</MenuItem>
                                    <MenuItem>Underwear and Intimates</MenuItem>
                                    <MenuItem>Coats and Outerwear</MenuItem>
                                    <MenuItem>Socks</MenuItem>
                                    <MenuItem>Sleepwear</MenuItem>
                                    <MenuItem>Activewear</MenuItem>
                                </MenuList>

                                <MenuList>
                                    <MenuItem fontWeight='bold'>Accessories and More</MenuItem>
                                    <MenuItem>Bags and Handbags</MenuItem>
                                    <MenuItem>Backpacks</MenuItem>
                                    <MenuItem>Belt Bags</MenuItem>
                                    <MenuItem>Sunglasses</MenuItem>
                                    <MenuItem>Hats</MenuItem>
                                    <MenuItem>Face Masks</MenuItem>
                                    <MenuItem>Scarves</MenuItem>
                                    <MenuItem>Tech Accessories</MenuItem>
                                    <MenuItem>Blue Light Glasses</MenuItem>
                                    <MenuItem>Shop All Accessories</MenuItem>
                                </MenuList>

                                <MenuList>
                                    <MenuItem fontWeight='bold'>Gift Cards</MenuItem>
                                    <MenuItem>Sale</MenuItem>
                                    <MenuItem>Sneakers and Athletic</MenuItem>
                                    <MenuItem>Heels</MenuItem>
                                    <MenuItem>Sandals</MenuItem>
                                    <MenuItem>Slippers</MenuItem>
                                    <MenuItem>Boots</MenuItem>
                                    <MenuItem>Shirts and Tops</MenuItem>
                                    <MenuItem>Dresses</MenuItem>
                                    <MenuItem>Swim</MenuItem>
                                    <MenuItem>Denim</MenuItem>
                                </MenuList>

                                <Box>
                                    <Image
                                        h='200px' w='130px'
                                        src="https://m.media-amazon.com/images/G/01/2022/Global-Nav/October/COOP-DANSKO-MENS-350x350.jpg" alt="addimage" />

                                    <Image
                                        h='200px' w='130px' mt={3}
                                        src="https://m.media-amazon.com/images/G/01/2022/Global-Nav/September/COOP-UGG-MENS-NEUMEL-LTA-350x350.jpg" alt="add" />
                                </Box>


                            </Flex>
                            <Flex p='4'>
                                <Input
                                    border='1px solid'
                                    borderColor='black'
                                    w={400}
                                    placeholder='Gaurav, search for shoes, clothes, etc'
                                    m={2}
                                />

                                <Button
                                    bg='#003953'
                                    color='white'
                                    _hover={{ bg: "blue.500", color: 'white' }}
                                    m={2}
                                >SEARCH</Button>
                            </Flex>
                        </MenuList>

                    </Menu>







                    <Menu>
                        <MenuButton
                            as={Button} rightIcon={<ChevronDownIcon />}>
                            Kids
                        </MenuButton>
                        <MenuList>
                            <Flex>

                                <MenuList>
                                    <MenuItem fontWeight='bold'>Shoes</MenuItem>
                                    <MenuItem>Sneakers and Athletic</MenuItem>
                                    <MenuItem>Sandals</MenuItem>
                                    <MenuItem>Clogs and Mules</MenuItem>
                                    <MenuItem>Heels</MenuItem>
                                    <MenuItem>Boots and Booties</MenuItem>
                                    <MenuItem>Slippers</MenuItem>
                                    <MenuItem>Flats</MenuItem>
                                    <MenuItem>Loafers</MenuItem>
                                    <MenuItem>Comfort</MenuItem>
                                    <MenuItem>Wide</MenuItem>
                                </MenuList>

                                <MenuList>
                                    <MenuItem fontWeight='bold'>Clothing</MenuItem>
                                    <MenuItem>Shirts and Tops</MenuItem>
                                    <MenuItem>Swimwear</MenuItem>
                                    <MenuItem>Dresses</MenuItem>
                                    <MenuItem>Shorts</MenuItem>
                                    <MenuItem>Jeans and Denim</MenuItem>
                                    <MenuItem>Underwear and Intimates</MenuItem>
                                    <MenuItem>Coats and Outerwear</MenuItem>
                                    <MenuItem>Socks</MenuItem>
                                    <MenuItem>Sleepwear</MenuItem>
                                    <MenuItem>Activewear</MenuItem>
                                </MenuList>

                                <MenuList>
                                    <MenuItem fontWeight='bold'>Accessories and More</MenuItem>
                                    <MenuItem>Bags and Handbags</MenuItem>
                                    <MenuItem>Backpacks</MenuItem>
                                    <MenuItem>Belt Bags</MenuItem>
                                    <MenuItem>Sunglasses</MenuItem>
                                    <MenuItem>Hats</MenuItem>
                                    <MenuItem>Face Masks</MenuItem>
                                    <MenuItem>Scarves</MenuItem>
                                    <MenuItem>Tech Accessories</MenuItem>
                                    <MenuItem>Blue Light Glasses</MenuItem>
                                    <MenuItem>Shop All Accessories</MenuItem>
                                </MenuList>

                                <MenuList>
                                    <MenuItem fontWeight='bold'>Gift Cards</MenuItem>
                                    <MenuItem>Sale</MenuItem>
                                    <MenuItem>Sneakers and Athletic</MenuItem>
                                    <MenuItem>Heels</MenuItem>
                                    <MenuItem>Sandals</MenuItem>
                                    <MenuItem>Slippers</MenuItem>
                                    <MenuItem>Boots</MenuItem>
                                    <MenuItem>Shirts and Tops</MenuItem>
                                    <MenuItem>Dresses</MenuItem>
                                    <MenuItem>Swim</MenuItem>
                                    <MenuItem>Denim</MenuItem>
                                </MenuList>

                                <Box>
                                    <Image
                                        h='200px' w='130px'
                                        src="https://m.media-amazon.com/images/G/01/2022/Global-Nav/October/KIDS-ADIDAS-SEPTEMBER-GN-350X350.png" alt="addimage" />

                                    <Image
                                        h='200px' w='130px' mt={3}
                                        src="https://m.media-amazon.com/images/G/01/2022/Global-Nav/September/COOP-UGG-KIDS-ULTRA-MINI-350x350.jpg" alt="add" />
                                </Box>


                            </Flex>
                            <Flex p='4'>
                                <Input
                                    border='1px solid'
                                    borderColor='black'
                                    w={400}
                                    placeholder='Gaurav, search for shoes, clothes, etc'
                                    m={2}
                                />

                                <Button
                                    bg='#003953'
                                    color='white'
                                    _hover={{ bg: "blue.500", color: 'white' }}
                                    m={2}
                                >SEARCH</Button>
                            </Flex>
                        </MenuList>

                    </Menu>






                    <Menu>
                        <MenuButton
                            as={Button} rightIcon={<ChevronDownIcon />}>
                            Departments
                        </MenuButton>
                        <MenuList>
                            <Flex>

                                <MenuList>
                                    <MenuItem fontWeight='bold'>Shoes</MenuItem>
                                    <MenuItem>Sneakers and Athletic</MenuItem>
                                    <MenuItem>Sandals</MenuItem>
                                    <MenuItem>Clogs and Mules</MenuItem>
                                    <MenuItem>Heels</MenuItem>
                                    <MenuItem>Boots and Booties</MenuItem>
                                    <MenuItem>Slippers</MenuItem>
                                    <MenuItem>Flats</MenuItem>
                                    <MenuItem>Loafers</MenuItem>
                                    <MenuItem>Comfort</MenuItem>
                                    <MenuItem>Wide</MenuItem>
                                </MenuList>

                                <MenuList>
                                    <MenuItem fontWeight='bold'>Clothing</MenuItem>
                                    <MenuItem>Shirts and Tops</MenuItem>
                                    <MenuItem>Swimwear</MenuItem>
                                    <MenuItem>Dresses</MenuItem>
                                    <MenuItem>Shorts</MenuItem>
                                    <MenuItem>Jeans and Denim</MenuItem>
                                    <MenuItem>Underwear and Intimates</MenuItem>
                                    <MenuItem>Coats and Outerwear</MenuItem>
                                    <MenuItem>Socks</MenuItem>
                                    <MenuItem>Sleepwear</MenuItem>
                                    <MenuItem>Activewear</MenuItem>
                                </MenuList>

                                <MenuList>
                                    <MenuItem fontWeight='bold'>Accessories and More</MenuItem>
                                    <MenuItem>Bags and Handbags</MenuItem>
                                    <MenuItem>Backpacks</MenuItem>
                                    <MenuItem>Belt Bags</MenuItem>
                                    <MenuItem>Sunglasses</MenuItem>
                                    <MenuItem>Hats</MenuItem>
                                    <MenuItem>Face Masks</MenuItem>
                                    <MenuItem>Scarves</MenuItem>
                                    <MenuItem>Tech Accessories</MenuItem>
                                    <MenuItem>Blue Light Glasses</MenuItem>
                                    <MenuItem>Shop All Accessories</MenuItem>
                                </MenuList>

                                <MenuList>
                                    <MenuItem fontWeight='bold'>Gift Cards</MenuItem>
                                    <MenuItem>Sale</MenuItem>
                                    <MenuItem>Sneakers and Athletic</MenuItem>
                                    <MenuItem>Heels</MenuItem>
                                    <MenuItem>Sandals</MenuItem>
                                    <MenuItem>Slippers</MenuItem>
                                    <MenuItem>Boots</MenuItem>
                                    <MenuItem>Shirts and Tops</MenuItem>
                                    <MenuItem>Dresses</MenuItem>
                                    <MenuItem>Swim</MenuItem>
                                    <MenuItem>Denim</MenuItem>
                                </MenuList>

                                <Box>
                                    <Image
                                        h='200px' w='130px'
                                        src="https://m.media-amazon.com/images/G/01/2022/Global-Nav/February/ZGC-globalnav-010322.jpg" alt="addimage" />

                                    <Image
                                        h='200px' w='130px' mt={3}
                                        src="https://m.media-amazon.com/images/G/01/2022/Global-Nav/September/WOMENS-DENIM-BEST-SELLERS-AUGUST-PROMO-350X350.png" alt="add" />
                                </Box>


                            </Flex>
                            <Flex p='4'>
                                <Input
                                    border='1px solid'
                                    borderColor='black'
                                    w={400}
                                    placeholder='Gaurav, search for shoes, clothes, etc'
                                    m={2}
                                />

                                <Button
                                    bg='#003953'
                                    color='white'
                                    _hover={{ bg: "blue.500", color: 'white' }}
                                    m={2}
                                >SEARCH</Button>
                            </Flex>
                        </MenuList>

                    </Menu>


                    <Menu>
                        <MenuButton
                            as={Button} rightIcon={<ChevronDownIcon />}>
                            Brands
                        </MenuButton>
                    </Menu>



                    <Menu>
                        <MenuButton
                            as={Button} rightIcon={<ChevronDownIcon />}>
                            Sale
                        </MenuButton>
                        <MenuList>
                            <Flex>

                                <MenuList>
                                    <MenuItem fontWeight='bold'>Shoes</MenuItem>
                                    <MenuItem>Sneakers and Athletic</MenuItem>
                                    <MenuItem>Sandals</MenuItem>
                                    <MenuItem>Clogs and Mules</MenuItem>
                                    <MenuItem>Heels</MenuItem>
                                    <MenuItem>Boots and Booties</MenuItem>
                                    <MenuItem>Slippers</MenuItem>
                                    <MenuItem>Flats</MenuItem>
                                    <MenuItem>Loafers</MenuItem>
                                    <MenuItem>Comfort</MenuItem>
                                    <MenuItem>Wide</MenuItem>
                                </MenuList>

                                <MenuList>
                                    <MenuItem fontWeight='bold'>Clothing</MenuItem>
                                    <MenuItem>Shirts and Tops</MenuItem>
                                    <MenuItem>Swimwear</MenuItem>
                                    <MenuItem>Dresses</MenuItem>
                                    <MenuItem>Shorts</MenuItem>
                                    <MenuItem>Jeans and Denim</MenuItem>
                                    <MenuItem>Underwear and Intimates</MenuItem>
                                    <MenuItem>Coats and Outerwear</MenuItem>
                                    <MenuItem>Socks</MenuItem>
                                    <MenuItem>Sleepwear</MenuItem>
                                    <MenuItem>Activewear</MenuItem>
                                </MenuList>

                                <MenuList>
                                    <MenuItem fontWeight='bold'>Accessories and More</MenuItem>
                                    <MenuItem>Bags and Handbags</MenuItem>
                                    <MenuItem>Backpacks</MenuItem>
                                    <MenuItem>Belt Bags</MenuItem>
                                    <MenuItem>Sunglasses</MenuItem>
                                    <MenuItem>Hats</MenuItem>
                                    <MenuItem>Face Masks</MenuItem>
                                    <MenuItem>Scarves</MenuItem>
                                    <MenuItem>Tech Accessories</MenuItem>
                                    <MenuItem>Blue Light Glasses</MenuItem>
                                    <MenuItem>Shop All Accessories</MenuItem>
                                </MenuList>

                                <MenuList>
                                    <MenuItem fontWeight='bold'>Gift Cards</MenuItem>
                                    <MenuItem>Sale</MenuItem>
                                    <MenuItem>Sneakers and Athletic</MenuItem>
                                    <MenuItem>Heels</MenuItem>
                                    <MenuItem>Sandals</MenuItem>
                                    <MenuItem>Slippers</MenuItem>
                                    <MenuItem>Boots</MenuItem>
                                    <MenuItem>Shirts and Tops</MenuItem>
                                    <MenuItem>Dresses</MenuItem>
                                    <MenuItem>Swim</MenuItem>
                                    <MenuItem>Denim</MenuItem>
                                </MenuList>

                                <Box>
                                    <Image
                                        h='200px' w='130px'
                                        src="https://m.media-amazon.com/images/G/01/2022/MMK/ZAPPOS_350x350_PLATE.jpg" alt="addimage" />

                                    <Image
                                        h='200px' w='130px' mt={3}
                                        src="https://m.media-amazon.com/images/G/01/2022/katespade/KATE-SPADE-GLOBAL-NAV-350x350.png" alt="add" />
                                </Box>


                            </Flex>
                            <Flex p='4'>
                                <Input
                                    border='1px solid'
                                    borderColor='black'
                                    w={400}
                                    placeholder='Gaurav, search for shoes, clothes, etc'
                                    m={2}
                                />

                                <Button
                                    bg='#003953'
                                    color='white'
                                    _hover={{ bg: "blue.500", color: 'white' }}
                                    m={2}
                                >SEARCH</Button>
                            </Flex>
                        </MenuList>

                    </Menu>







                    <Menu>
                        <MenuButton
                            as={Button} rightIcon={<ChevronDownIcon />}>
                            🔥 Clothing
                        </MenuButton>
                        <MenuList>
                            <Flex>

                                <MenuList>
                                    <MenuItem fontWeight='bold'>Shoes</MenuItem>
                                    <MenuItem>Sneakers and Athletic</MenuItem>
                                    <MenuItem>Sandals</MenuItem>
                                    <MenuItem>Clogs and Mules</MenuItem>
                                    <MenuItem>Heels</MenuItem>
                                    <MenuItem>Boots and Booties</MenuItem>
                                    <MenuItem>Slippers</MenuItem>
                                    <MenuItem>Flats</MenuItem>
                                    <MenuItem>Loafers</MenuItem>
                                    <MenuItem>Comfort</MenuItem>
                                    <MenuItem>Wide</MenuItem>
                                </MenuList>

                                <MenuList>
                                    <MenuItem fontWeight='bold'>Clothing</MenuItem>
                                    <MenuItem>Shirts and Tops</MenuItem>
                                    <MenuItem>Swimwear</MenuItem>
                                    <MenuItem>Dresses</MenuItem>
                                    <MenuItem>Shorts</MenuItem>
                                    <MenuItem>Jeans and Denim</MenuItem>
                                    <MenuItem>Underwear and Intimates</MenuItem>
                                    <MenuItem>Coats and Outerwear</MenuItem>
                                    <MenuItem>Socks</MenuItem>
                                    <MenuItem>Sleepwear</MenuItem>
                                    <MenuItem>Activewear</MenuItem>
                                </MenuList>

                                <MenuList>
                                    <MenuItem fontWeight='bold'>Accessories and More</MenuItem>
                                    <MenuItem>Bags and Handbags</MenuItem>
                                    <MenuItem>Backpacks</MenuItem>
                                    <MenuItem>Belt Bags</MenuItem>
                                    <MenuItem>Sunglasses</MenuItem>
                                    <MenuItem>Hats</MenuItem>
                                    <MenuItem>Face Masks</MenuItem>
                                    <MenuItem>Scarves</MenuItem>
                                    <MenuItem>Tech Accessories</MenuItem>
                                    <MenuItem>Blue Light Glasses</MenuItem>
                                    <MenuItem>Shop All Accessories</MenuItem>
                                </MenuList>

                                <MenuList>
                                    <MenuItem fontWeight='bold'>Gift Cards</MenuItem>
                                    <MenuItem>Sale</MenuItem>
                                    <MenuItem>Sneakers and Athletic</MenuItem>
                                    <MenuItem>Heels</MenuItem>
                                    <MenuItem>Sandals</MenuItem>
                                    <MenuItem>Slippers</MenuItem>
                                    <MenuItem>Boots</MenuItem>
                                    <MenuItem>Shirts and Tops</MenuItem>
                                    <MenuItem>Dresses</MenuItem>
                                    <MenuItem>Swim</MenuItem>
                                    <MenuItem>Denim</MenuItem>
                                </MenuList>

                                <Box>
                                    <Image
                                        h='200px' w='130px'
                                        src="https://m.media-amazon.com/images/G/01/2022/Global-Nav/October/ACCESSORIES-FALL-ESSENTIALS-GN-AUGUST-350X350.png" alt="addimage" />

                                    <Image
                                        h='200px' w='130px' mt={3}
                                        src="https://m.media-amazon.com/images/G/01/2022/Global-Nav/September/dresses350x350.png" alt="add" />
                                </Box>


                            </Flex>
                            <Flex p='4'>
                                <Input
                                    border='1px solid'
                                    borderColor='black'
                                    w={400}
                                    placeholder='Gaurav, search for shoes, clothes, etc'
                                    m={2}
                                />

                                <Button
                                    bg='#003953'
                                    color='white'
                                    _hover={{ bg: "blue.500", color: 'white' }}
                                    m={2}
                                >SEARCH</Button>
                            </Flex>
                        </MenuList>

                    </Menu>

                </Flex>

                <Spacer />

                <Box m={2} mr={5}
                    _hover={{ borderBottom: '2px solid' }}
                >
                    {isauth ?
                    <Flex>
                        <Button>Favourites</Button>
                        <Menu>
                            <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                                My Account
                            </MenuButton>
                            <MenuList color={'rgb(0, 57, 83)'}>
                                <MenuItem color="#144860" fontWeight="bold.100">Welcome, back {userprofile.name} !</MenuItem>
                                <MenuItem>VIP Dashboard</MenuItem>
                                <Link to="/orderhistory"><MenuItem>View Orders / Return Items</MenuItem></Link>
                                <MenuItem>Account Overview</MenuItem>
                                <MenuItem onClick={()=>dispatch(getlogout())}
                                >Not {userprofile.name}? Sign Out</MenuItem>
                            </MenuList>
                        </Menu>
                        </Flex>
                        : <SignInModal />}
                </Box>

            </Flex>

            <Box bg='#e4f0f6' textAlign='center' p={1}>
                Virtual Try-On Just Launched: Try on shoes IRL! 👟 Learn More
            </Box>

        </Box>
    )
}

export default Navbar;
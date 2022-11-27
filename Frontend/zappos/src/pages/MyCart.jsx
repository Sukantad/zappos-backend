import { EmailIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Center,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Image,
  Input,
  Select,
  SimpleGrid,
  Spacer,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { BsCheckLg, BsStars } from "react-icons/bs";
import { Link } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { deletefromcart, fetchCartData, increasecart } from "../Redux/action";

const MyCart = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  // console.log(cart);
  // const [cart, setCart] = useState([]);
  useEffect(() => {
    // fetchData();
    dispatch(fetchCartData());
  }, []);

  // const fetchData = () => {
  //   fetch(
  //     `https://zappos.cyclic.app/cart/${
  //       JSON.parse(localStorage.getItem("profile"))._id
  //     }`
  //   )
  //     .then((res) => res.json())
  //     .then((res) => {
  //       res.data ? setCart(res.data) : setCart([]);
  //     });
  // };

  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    const getAmount = () => {
      let amt = cart?.reduce((acc, elem) => {
        return acc + elem.productId.price * elem.quantity;
      }, 0);
      setTotalAmount(amt ? Math.floor(amt) : 0);
    };
    getAmount();
  }, [cart]);
  return (
    <>
      <Button
        ref={btnRef}
        onClick={onOpen}
        m={2}
        bg="green.200"
        _hover={{ bg: "green.100" }}
      >
        <Box mr="10px">
          <AiOutlineShoppingCart />
        </Box>{" "}
        <span>{`${cart ? cart.length : 0} ITEMS IN CART`}</span>
      </Button>
      <Drawer
        size={"md"}
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>My Cart</DrawerHeader>

          <DrawerBody m={0} p={0}>
            <Box p="5px" bg={"#e5f1f8"}>
              <Center>
                <BsStars color="#28AFBD" />
                <Text ml={"5px"}>
                  Check out to earn up to <b>$0.57</b> in VIP points
                </Text>
              </Center>
            </Box>
            <Box>
              {cart?.map((elem) => (
                <Flex
                  p={2}
                  key={
                    elem._id * Math.random() +
                    Date.now() +
                    elem.productId.imageurl
                  }
                >
                  <Flex>
                    <Box
                      borderRadius={2}
                      boxShadow={"md"}
                      position={"relative"}
                    >
                      <Box
                        padding={"4px 6px"}
                        boxShadow="sm"
                        borderEndStartRadius={"10px"}
                        bg={"white"}
                        position={"absolute"}
                        right="0"
                        top={0}
                      >
                        <AiOutlineHeart />
                      </Box>
                      <Image
                        w={"150px"}
                        h="200px"
                        src={elem.productId.imageurl}
                        alt="image of product"
                      />
                    </Box>
                    <Box pl="10px">
                      <Text>{elem.productId.brand}</Text>
                      <Text>
                        <b>{elem.productId.desc}</b>
                      </Text>
                      <Text>Color: French Blue/Black</Text>
                      <Text>Size: 7</Text>
                      <Text>Width: B - Medium</Text>
                    </Box>
                  </Flex>

                  <Box ml="40px">
                    <Text color={"red"}>${elem.productId.price}</Text>
                    <Text as={"del"}>$195.31</Text>
                    <Select
                      mt={"5px"}
                      mb={"5px"}
                      w={"80px"}
                      value={elem.quantity}
                      onChange={(e) => {
                        fetch(
                          `https://zappos.cyclic.app/cart/${elem.productId._id}`,
                          {
                            method: "PATCH",
                            body: JSON.stringify({
                              userId: elem.userId,
                              quantity: e.target.value,
                            }),
                            headers: {
                              "Content-type": "application/json",
                            },
                          }
                        ).then((res) => {
                          console.log(res);
                          dispatch(fetchCartData());
                        });
                      }}
                    >
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                      <option value="6">6</option>
                    </Select>
                    <Button
                      bg={"initial"}
                      borderWidth="0"
                      borderBottom={"1px solid #003953"}
                      color="#003953"
                      borderRadius={0}
                      textDecoration="none"
                      padding="0"
                      _hover={{
                        bg: "white",
                        color: "teal",
                        borderBottom: "1px solid teal",
                      }}
                      onClick={() => {
                        fetch(
                          `https://zappos.cyclic.app/cart/${elem.productId._id}`,
                          {
                            method: "DELETE",
                            body: JSON.stringify({
                              userId: elem.userId,
                            }),
                            headers: {
                              "Content-type": "application/json",
                            },
                          }
                        ).then(() => {
                          dispatch(fetchCartData());
                        });
                        // dispatch(deletefromcart(elem));
                      }}
                    >
                      REMOVE
                    </Button>
                  </Box>
                </Flex>
              ))}
            </Box>
          </DrawerBody>

          <DrawerFooter display={"block"} bg={"#f5f5f5"}>
            <Text mb={"5px"} textAlign={"right"}>
              Cart Subtotal ({cart?.length} Items)${totalAmount}
            </Text>
            <Flex>
              <Box>
                <Link to="/mycart">
                  <Button
                    border={"2px solid #003953"}
                    color="#003953"
                    _hover={{
                      bg: "#003953",
                      color: "white",
                    }}
                    onClick={onClose}
                  >
                    {" "}
                    VIEW CART
                  </Button>
                </Link>
              </Box>
              <Spacer />
              <Box>
                <Link to="/checkout">
                  <Button bg="#a7e688" color="#003953" onClick={onClose}>
                    PROCEED T0 CHECKOUT
                  </Button>
                </Link>
              </Box>
            </Flex>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default MyCart;

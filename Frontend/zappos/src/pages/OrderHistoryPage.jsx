import { Box, Button, Flex, Image, Select, Spacer, Text } from "@chakra-ui/react"
import { useSelector } from "react-redux";
import { AiOutlineHeart } from "react-icons/ai";
import { useEffect, useState } from "react";


const OrderHistoryPage = () => {
    const userprofile = useSelector((state) => state.userprofile);
    const { orders } = userprofile;
    const [ totalAmount, setTotalAmount ] = useState(0);
    console.log(orders)

    useEffect(()=>{
        const getAmount = ()=>{
          let amt = orders?.reduce((acc, elem)=>{
              return acc + elem.price*elem.count
          },0)
          setTotalAmount(Math.floor(amt));
        }
        getAmount();
      },[orders])
    return (
        <Box>
            <Text fontSize="25px" ml="5%" mt="50px" mb="10px"
            >Order History</Text>

            <Box w="90%" m="auto" border="1px solid black">
                <Flex bg="#f5f5f5">

                    <Flex p="10px" justifyContent="space-between" w="32%" alignItems="center" fontSize="14px" ml="20px">
                        <Box>
                            <Text>Order Date</Text>
                            <Text>Oct 18, 2022</Text>
                        </Box>
                        <Box>
                            <Text>Order Number</Text>
                            <Text textDecoration="underline">114-8154941-1026666</Text>
                        </Box>
                    </Flex>

                    <Spacer/>

                    <Flex alignItems="center" w="30%" justifyContent="space-between" mr="12%">
                        <Box>
                            <Text fontSize="14px">Total</Text>
                            <Text fontSize="14px">${totalAmount}</Text>
                        </Box>
                        <Box>
                            <Text fontWeight="bold">Show Less</Text>
                        </Box>
                    </Flex>

                </Flex>
                <Box p="10px">
                    {
                        orders?.map((elem) => (
                            <Box key={Math.random()*Date.now()+elem.imageurl+Math.random()}
                            >
                            <Flex p={2} w="90%" justifyContent="space-between">
                            <Flex w="43%">
                            <Box borderRadius={2} boxShadow={"md"} position={"relative"}>
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
                                src={elem.imageurl}
                                alt="image of product"
                              />
                            </Box>
                            <Box pl="10px">
                              <Text>{elem.brand}</Text>
                              <Text>
                                <b>{elem.desc}</b>
                              </Text>
                              <Text>Color: French Blue/Black</Text>
                              <Text>Size: 7</Text>
                              <Text>Width: B - Medium</Text>
                            </Box>
                            </Flex>

                            <Flex alignItems="center">
                            <Text textAlign="center"
                            >Arriving Oct 25, 2022</Text></Flex>

                            <Box mt="50px">
                                <Text color={"green"}>${elem.price}</Text>
                                <Text as={"del"}>$156.31</Text><br/>
                            
                            
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
                                >
                                    CANCEL ITEM
                                </Button>
                              </Box>
                            </Flex>
                         </Box>
                        ))
                    }
                </Box>
            </Box>
        </Box>
    )
}

export default OrderHistoryPage;
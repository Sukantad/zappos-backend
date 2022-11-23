import { Box, Button, Flex, Text } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";


const OrdersuccessPage = ()=>{
    const { cart, userprofile, shipaddress } = useSelector((state) => state);
    return(
        <Box border="1px solid #144860" p="10px" w="90%" m="auto" mt="50px">
            <Text fontSize="25px" mb="20px">Thank You!</Text>
            <Text fontSize="18" mb="4px">Your order has been placed.</Text>
            <Text fontSize="18" mb="15px">An email confirmation has been sent with your order details.</Text>
            <Text fontWeight="bold" mb="10px">Order: 114-8154941-1026666</Text>
            <Text>{`${userprofile.orders.length} items will be shipped to:`}</Text>

            <Text>{userprofile.name}</Text>
            <Text>{shipaddress.name}</Text>
            <Text>{shipaddress.country}</Text>
            <Text>{shipaddress.detailadd}</Text>
            <Text mb="15px">{shipaddress.number}</Text>

            <Text mb="20px">Arriving: <span color="#0076bd">Arriving Oct 25, 2022</span></Text>


            <Flex w="45%" justifyContent="space-between" alignItems="center" pb="10px">
                <Button bg="#144860" color="white"
                _hover={{bg:"#0076bd"}}
                >REVIEW OR EDIT YOUR ORDER</Button> or

                <Link to="/">
                <Button bg="white" color="#144860" border="2px solid #144860"
                _hover={{bg:"#0076bd", color:"white", border:"none"}}
                >CONTINUE SHOPPING</Button></Link>
            </Flex>
        </Box>
    )
}

export default OrdersuccessPage;
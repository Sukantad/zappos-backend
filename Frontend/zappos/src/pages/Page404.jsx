import { Box, Center, Heading, Image } from "@chakra-ui/react";
import React from "react";

const Page404 = () => {

    return (

        <Box>
            <Heading mt="50px" textAlign="center">Page does not exist</Heading>

            <Image w="25%" m="auto"
             src="https://surveyheart.com/images/error.svg" alt="logo" />

            <Heading textAlign="center"
            >OOPS!</Heading>

    
                <Heading textAlign="center">
                    We can't find the page that you are looking for :(
                </Heading>
            
        </Box>
    )

}

export default Page404;
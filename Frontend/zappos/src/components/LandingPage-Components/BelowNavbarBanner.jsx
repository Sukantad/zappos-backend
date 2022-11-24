import { Box, Button, Heading, Img, Text } from "@chakra-ui/react";

import React from "react";


const BelowNavbarBanner = () => {
  return (
    <Box
      h={{ base: "0px", sm: "0px", md: "300px", lg: "500x", xl: "470px" }}
    >
      <Img src="https://m.media-amazon.com/images/G/01/2022/homepageBFearly/HOMEPAGE-BLACK-FRIDAY-EARLY-ACCESS-HERO-1440x500_1.gif"/>
    </Box>
  );
};

export default BelowNavbarBanner;

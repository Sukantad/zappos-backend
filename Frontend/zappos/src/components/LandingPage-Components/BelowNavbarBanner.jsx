import { Box, Button, Heading, Text } from "@chakra-ui/react";

import React from "react";
import styled from "styled-components";

const ImgBox = styled.div`
  border: 1px solid black;
  background-image: url("https://m.media-amazon.com/images/G/01/2022/homepage10.03/COOP-CROCS-GONE-WILD-TAKEOVER-HERO-2880x1400.jpg'%20alt=%22middleimg");
  background-size: contain;
  width: 100%;
  height: 100%;
  margin-bottom: 20px;
`;

const BelowNavbarBanner = () => {
  return (
    <Box
      h={{ base: "200px", sm: "355px", md: "615px", lg: "615px", xl: "615px" }}
    >
      <ImgBox>
        <Box
          mt="16%"
          ml="2%"
          bg="white"
          w="35%"
          p="24px"
          display={{
            base: "none",
            sm: "none",
            md: "block",
            lg: "block",
            xl: "block",
          }}
        >
          <Heading>Zappos Print Lab X Crocs Gone Wild</Heading>
          <Text mt="10px">
            Zappos Print Lab X Crocs Gone Wild We’re going wild for this
            exclusive Crocs collab! The latest in vogue streetwear will entice
            even the tamest of stylists.
          </Text>
          <Button mt="25px" _hover={{ bg: "black", color: "white" }}>
            SHOPCROCS GONE WILD
          </Button>
        </Box>
      </ImgBox>

      <Box
        mt="10px"
        w="100%"
        textAlign="center"
        display={{
          base: "block",
          sm: "block",
          md: "none",
          lg: "none",
          xl: "none",
        }}
      >
        <Heading>Zappos Print Lab X Crocs Gone Wild</Heading>
        <Text w="80%" m="auto" mt="10px">
          Zappos Print Lab X Crocs Gone Wild We’re going wild for this exclusive
          Crocs collab! The latest in vogue streetwear will entice even the
          tamest of stylists.
        </Text>
        <Button mt="25px" _hover={{ bg: "black", color: "white" }}>
          SHOPCROCS GONE WILD
        </Button>
      </Box>
    </Box>
  );
};

export default BelowNavbarBanner;

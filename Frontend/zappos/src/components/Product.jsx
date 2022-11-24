import { StarIcon } from "@chakra-ui/icons";
import { Box, Flex, Image, Link, Text } from "@chakra-ui/react";
import React from "react";
import { AiOutlineHeart } from "react-icons/ai";

const Product = (props) => {
  const { elem, i } = props;
  return (
    <Box key={i} m="5px" boxShadow="sm">
      <Box maxW="sm" overflow="hidden">
        <Flex pos="relative">
          <Image src={elem.imageurl} alt={elem.imageurl} />
          <Flex
            pos="absolute"
            w="40px"
            zIndex={4}
            bg="white"
            right="0"
            justifyContent="space-around"
            borderEndStartRadius="5px"
            boxShadow="sm"
          >
            <Box as="button">
              <AiOutlineHeart />
            </Box>

            <Box>
              <Text>7</Text>
            </Box>
          </Flex>
        </Flex>
        <Box p="1">
          {/* <Link> */}
            <Box mt="1" fontWeight="semibold" as="h4" noOfLines={1}>
              {elem.brand}{" "}
            </Box>
            <Box as="p" noOfLines={1}>
              {elem.desc}{" "}
            </Box>
          {/* </Link> */}

          <Box> ${elem.price}</Box>

          <Box display="flex" mt="1" alignItems="center">
            {Array(5)
              .fill("")
              .map((_, i) => (
                <StarIcon key={Math.random()*Date.now()+i+Math.random()} color={i < 4 ? "teal.500" : "gray.300"} />
              ))}
            <Box as="span" ml="2" color="gray.600" fontSize="sm">
              ({elem.ratings})
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Product;

import React from "react";

import { Box, Flex, Img, Text } from "@chakra-ui/react";

import { cart, fav } from "../../assets";

import BTN from "../Utils/Button";

const Card = ({ product, handleToCart }) => {
  const { id, img, productName, price } = product;
  // console.log(img);
  return (
    <Box textAlign="center">
      <Flex
        mb={{ base: "8px", md: "12px" }}
        flexDir="column"
        alignItems="center"
        position="relative"
      >
        <Img src={img} />
        <Flex position="absolute" bottom={{ base: "12px", md: "18px" }}>
          <BTN
            mRight={"8px"}
            type={cart}
            handleToCart={() => handleToCart(product)}
          />
          {/** <Box
            width="40px"
            height="40px"
            mr={"8px"}
            borderRadius="50px"
            boxShadow="0px 4px 4px 0px rgba(0, 0, 0, 0.25)"
            backgroundColor="#fff"
            backgroundImage={cart}
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            transition="border .3s, transform .7s ease"
            onClick={() => handleToCart(product)}
            _hover={{
              cursor: "pointer",
              border: "4px solid red",
              transform: "rotate(360deg)",
            }}
          />  */}
          <BTN type={fav} />
        </Flex>
      </Flex>
      <Text
        color="#252525"
        fontSize={{ base: "24px", md: "26px", lg: "28px" }}
        lineHeight={{ base: "32px", md: "34px", lg: "36px" }}
        fontWeight="semibold"
      >
        {productName}
      </Text>
      <Text
        color="#252525"
        fontSize={{ base: "20px", md: "22px", lg: "24px" }}
        lineHeight={{ base: "24px", md: "26px", lg: "28px" }}
        fontWeight="bold"
      >
        {price}
      </Text>
    </Box>
  );
};

export default Card;

import React from "react";

import { Box, Flex, Text } from "@chakra-ui/react";

const CartItem = ({ product }) => {
  const { img, productName, price } = product;
  return (
    <Box mb="16px">
      <Flex
        maxW="256px"
        mb="12px"
        alignItems="center"
        justifyContent="space-between"
      >
        <Flex alignItems="center">
          <Box
            width="48px"
            height="48px"
            borderRadius="50px"
            backgroundImage={img}
            backgroundSize="cover"
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
          />
          <Text pl="12px" fontSize="20px" fontWeight="medium">
            {productName} -
          </Text>
        </Flex>
        <Text fontSize="18px" fontWeight="medium">
          {price}
        </Text>
      </Flex>
      <hr style={{ border: "1px solid #DDDDDD" }} />
    </Box>
  );
};

export default CartItem;

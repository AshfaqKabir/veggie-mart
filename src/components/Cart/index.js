import React from "react";

import { Box, Text } from "@chakra-ui/react";

import CartItem from "./CartItem";
import CartBtn from "../Utils/CartBtn";

const Cart = ({ cart, randomItem, handleRandomItem, handleRemoveAll }) => {
  return (
    <Box
      width={{ base: "100%", md: "300px" }}
      mt={{ base: "64px", md: "0" }}
      maxH="70vh"
      overflowY="scroll"
      p="40px 20px"
      border="1px solid black"
      borderRadius="8px"
    >
      <Text as="h5" mb="12px" fontSize="20px" fontWeight="medium">
        Cart:
      </Text>
      {cart.map((prod) => (
        <CartItem product={prod} />
      ))}
      {/**  <CartItem /> */}
      <Box mt="36px" mb="12px">
        <hr
          style={{
            border: "1px solid #252525",
          }}
        />
      </Box>
      {/** Choose Random */}
      <Text as="h5" mb="12px" fontSize="18px" fontWeight="medium">
        Get This One:
        {randomItem.length !== 0 && <CartItem product={randomItem} />}
      </Text>
      {/**  <CartItem /> */}
      <CartBtn
        type="Random"
        handleRandomItem={handleRandomItem}
        mRight="4px"
        name="Choose One"
      />
      <CartBtn handleRemoveAll={handleRemoveAll} name="Remove All" />
    </Box>
  );
};

export default Cart;

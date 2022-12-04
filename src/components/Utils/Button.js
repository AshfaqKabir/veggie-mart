import React from "react";

import { Box } from "@chakra-ui/react";

// import { cart } from "../../assets";.

const BTN = ({ type, mRight, handleToCart }) => {
  return (
    <Box
      width="40px"
      height="40px"
      mr={mRight || "0px"}
      borderRadius="50px"
      boxShadow="0px 4px 4px 0px rgba(0, 0, 0, 0.25)"
      backgroundColor="#fff"
      backgroundImage={type}
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      transition="border .3s, transform .7s ease"
      onClick={() => handleToCart()}
      _hover={{
        cursor: "pointer",
        border: "3px solid red",
        transform: "rotate(360deg)",
      }}
    />
  );
};

export default BTN;

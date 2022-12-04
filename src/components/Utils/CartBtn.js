import React from "react";

import { Button } from "@chakra-ui/react";

const CartBtn = ({ mRight, name, type, handleRandomItem, handleRemoveAll }) => {
  return (
    <>
      <Button
        variant="ghost"
        my="12px"
        mr={mRight || "0px"}
        border="1px solid red"
        color="red"
        transition="color .3s ease, background .4s ease-out"
        _hover={{
          background: "red",
          color: "#fff",
        }}
        onClick={() =>
          type === "Random" ? handleRandomItem() : handleRemoveAll()
        }
      >
        {name}
      </Button>
    </>
  );
};

export default CartBtn;

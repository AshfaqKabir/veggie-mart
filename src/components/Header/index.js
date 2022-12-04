import React from "react";

import { Text } from "@chakra-ui/react";

const Header = () => {
  return (
    <>
      <Text
        as={"h1"}
        mt="80px"
        mb="30px"
        textAlign={"center"}
        fontFamily="Poppins"
        fontSize="92px"
        fontWeight="bold"
      >
        Veggie <span style={{ color: "#5DEA73" }}>Mart</span>
      </Text>
    </>
  );
};

export default Header;

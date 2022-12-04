import React from "react";

import { Grid, GridItem } from "@chakra-ui/react";

import Card from "../Cards";

const List = ({ products, handleToCart }) => {
  return (
    <Grid
      mr="16px"
      templateColumns={{
        base: "repeat(2, 1fr)",
        md: "repeat(2, 1fr)",
        lg: "repeat(3, 1fr)",
      }}
      gap={6}
    >
      {products.map((product) => {
        return (
          <GridItem>
            <Card
              key={product.id}
              product={product}
              handleToCart={handleToCart}
            />
          </GridItem>
        );
      })}
    </Grid>
  );
};

export default List;

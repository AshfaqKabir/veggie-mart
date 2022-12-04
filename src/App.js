import React, { useState, useEffect } from "react";

import {
  Box,
  Container,
  Flex,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  UnorderedList,
  ListItem,
  Text,
} from "@chakra-ui/react";

import Header from "./components/Header";
import List from "./components/Product-Listing";
import Cart from "./components/Cart";

import "./App.css";

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [randomItem, setRandomItem] = useState([]);

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  // Handle Adding Items to the Cart
  const handleToCart = (product) => {
    let newCart = [...cart, product];
    setCart(newCart);
  };

  // Choose a random Item
  const handleRandomItem = () => {
    let randomId = Math.floor(Math.random() * cart.length);
    cart.length !== 0 && setRandomItem(cart[randomId]);
  };

  // Handle Remove All
  const handleRemoveAll = () => {
    setCart([]);
    setRandomItem([]);
  };

  return (
    <div className="App">
      <Header />
      <Container maxW="1232px">
        <hr style={{ border: "1px solid rgba(0, 0, 0, 0.3)" }} />
        <Flex flexDir={{ base: "column", md: "row" }} mt="88px">
          <List products={products} handleToCart={handleToCart} />
          <Cart
            cart={cart}
            randomItem={randomItem}
            handleRandomItem={handleRandomItem}
            handleRemoveAll={handleRemoveAll}
          />
        </Flex>

        {/** Q/A Section */}
        <Box my="64px">
          <Text as={"h2"} my="12px" fontSize="36px" textAlign="center">
            Q/A
          </Text>
          <Accordion
            width={{ base: "100%", md: "90%" }}
            mx="auto"
            defaultIndex={[0]}
            allowToggle
          >
            <AccordionItem>
              <h2>
                <AccordionButton background={"#eee"}>
                  <Box flex="1" textAlign="left">
                    Props vs State
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4} fontSize={{ base: "17px", md: "18px" }}>
                <Text as="h2">
                  Props and State are two inbuilt functionality of react, they
                  both handle data but very differently here are some
                  differences listed below:
                </Text>
                <UnorderedList textAlign="justify" >
                  <ListItem py="16px">
                    Props : Props is an immutable object that is read-only data.
                    This data is passed from the parent to child component in a
                    unidirectional flow, which means it can go through from top
                    to bottom but not the other way around and it cannot be
                    updated anywhere in the component tree.
                  </ListItem>
                  <ListItem>
                    State : However State acts as a local data storage and can
                    be updated inside the component, however, it cannot be
                    passed from one component to another, it has to be updated
                    within the same and the updated data can be passed through
                    props in a unidirectional manner i.e only to its children.
                  </ListItem>
                </UnorderedList>
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <h2>
                <AccordionButton background={"#eee"}>
                  <Box flex="1" textAlign="left">
                    How UseState() Works?
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel
                fontSize={{ base: "17px", md: "18px" }}
                pb={4}
                textAlign="justify"
              >
                UseState is a built-in function in react also known as react
                hooks. They were introduced in version 16.8. Before that, we
                used to write Class based Components and store the state in a
                really complex manner. However after react hooks (useState hook)
                was introduced it made handling the states really easy, fast,
                and compact. Its main function is to store values of a state in
                a functional component and also has the functionality to update
                the values within the component however the updated values can
                also be passed as props to share with other child components.
                Under the Hood, The useState() hook is a Javascript function and
                should be invoked as a function. For every functional component
                react declares a piece of state and handles the re-render of
                that component on every state change.
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </Box>
      </Container>
    </div>
  );
}

export default App;

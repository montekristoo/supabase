import React from 'react';
import { Box, ChakraProvider, Container, Flex, Text } from "@chakra-ui/react";
import { Header } from "./components/Header";
import { Main } from "./components/Main";
import { Footer } from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
}

export default App;

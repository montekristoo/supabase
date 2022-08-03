import { Button, Container, Flex, Text } from "@chakra-ui/react";
import React from "react";

export const Banner = () => {
  return (
    <>
      <Flex
        w="100%"
        h="386px"
        justifyContent="center"
        alignItems="center"
        direction="column"
        px={["50px", "50px", "50px", "none"]}
      >
        <Text fontSize="36px" color="white" textAlign="center">
          {" "}
          <Text as="span" color="#BBBBBB">
            Build in a weekend,
          </Text>{" "}
          scale to millions
        </Text>
        <Button
          width="156px"
          height="38px"
          borderRadius="4px"
          bg="#24B47E"
          mt="28px"
          color="white"
        >
          Start your project
        </Button>
      </Flex>
    </>
  );
};

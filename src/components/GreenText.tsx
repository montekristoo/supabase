import { Text } from "@chakra-ui/react";
import React from "react";

interface GreenTextProps {
  children: React.ReactNode;
}

export const GreenText = (props: GreenTextProps) => {
  return (
    <>
      <Text as="span" color="#3ECF8E" fontSize="12px">
        {props.children}
      </Text>
    </>
  );
};

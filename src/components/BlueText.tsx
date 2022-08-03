import { Text } from "@chakra-ui/react";
import React from "react";

interface BlueTextProps {
  children: React.ReactNode;
}

export const BlueText = (props: BlueTextProps) => {
  return (
    <>
      <Text as="span" color="#569CD6" fontSize="12px">
        {props.children}
      </Text>
    </>
  );
};

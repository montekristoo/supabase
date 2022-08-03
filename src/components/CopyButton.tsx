import { CopyIcon } from "@chakra-ui/icons";
import { Button } from "@chakra-ui/react";
import React from "react";

export const CopyButton = () => {
  return (
    <Button
      position="absolute"
      right="9px"
      top="8px"
      fontSize="12px"
      width="76px"
      height="30px"
      borderRadius="4px"
      border="1px"
      borderColor="#666666"
      bg="none"
      color="white"
    >
      <CopyIcon mr="13.5px" />
      Copy
    </Button>
  );
};

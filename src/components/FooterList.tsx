import { Flex, Text } from "@chakra-ui/react";
import React from "react";

interface FooterListProps {
  list: string[];
  listTitle: string;
}

export const FooterList = (props: FooterListProps) => {
  return (
    <>
      <Flex
        align="start"
        h="100%"
        fontSize="14px"
        direction="column"
        gap="12px"
        color="white"
        width="160px"
      >
        <Text pb="7px" color="#666666">
          {props.listTitle}
        </Text>
        {props.list.map((item) => (
          <Text>{item}</Text>
        ))}
      </Flex>
    </>
  );
};

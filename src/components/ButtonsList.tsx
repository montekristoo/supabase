import { Box, Button } from "@chakra-ui/react";
import React from "react";

interface ButtonsList {
  default: string;
  width?: string;
  buttons: string[];
}

export const ButtonsList = (props: ButtonsList) => {
  const [isSelected, setSelected] = React.useState(props.default);

  return (
    <>
      <Box alignItems={["center", "start"]} w="100%">
        {props.buttons.map((name) => (
          <Button
            width={`${props.width}`}
            bg={isSelected === name ? `#2A2A2A` : `transparent`}
            color={isSelected === name ? `#FFFFFF` : `#666666`}
            fontSize="11px"
            onClick={() => setSelected(name)}
            _hover={{
              bg: isSelected === name ? `#2A2A2A` : `transparent`,
            }}
            _active={{ bg: "none" }}
          >
            {name}
          </Button>
        ))}
      </Box>
    </>
  );
};

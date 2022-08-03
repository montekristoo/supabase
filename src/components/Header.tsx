import { ChevronDownIcon, HamburgerIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Container,
  Flex,
  Hide,
  HStack,
  Image,
  Menu,
  MenuButton,
  MenuList,
  Show,
  Text,
} from "@chakra-ui/react";
import React from "react";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <>
      <Flex
        width="100%"
        h={65}
        align="center"
        justifyContent={"space-around"}
        gap={5}
      >
        <HStack gap="36px">
          <Image
            src={process.env.PUBLIC_URL + "/images/Rectangle.svg"}
            w={123}
            h={24}
          />
          <Hide below="md">
            <Menu>
              <MenuButton
                as={Button}
                rightIcon={
                  <ChevronDownIcon
                    _hover={{ transform: "scale(1.1)", zIndex: 20 }}
                  />
                }
                bg="transparent"
                color="primary.100"
                _hover={{ bg: "none" }}
                _expanded={{ bg: "none" }}
                _focus={{ boxShadow: "outline" }}
              >
                Product
              </MenuButton>
              <MenuList bg="none" color="primary.100">
                <MenuList bg="none" border="none">
                  Something
                </MenuList>
                <MenuList bg="none" border="none">
                  Something
                </MenuList>
                <MenuList bg="none" border="none">
                  Something
                </MenuList>
              </MenuList>
            </Menu>
            <Menu>
              <MenuButton
                as={Button}
                rightIcon={<ChevronDownIcon />}
                bg="transparent"
                color="primary.100"
                _hover={{ bg: "none" }}
                _expanded={{ bg: "none" }}
                _focus={{ boxShadow: "outline" }}
              >
                Developers
              </MenuButton>
              <MenuList bg="none" color="primary.100">
                <MenuList border="none" bg="none">
                  Something
                </MenuList>
                <MenuList border="none" bg="none">
                  Something
                </MenuList>
                <MenuList border="none" bg="none">
                  Something
                </MenuList>
              </MenuList>
            </Menu>
            <Text color="primary.100">Beta</Text>
            <Text color="primary.100">Pricing</Text>
          </Hide>
        </HStack>
        <Show below="md">
          <HamburgerIcon
            fontSize={30}
            color="white"
            cursor="pointer"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          />
        </Show>
        <Hide below="md">
          <HStack w="max-content">
            <Button
              w={128}
              h={30}
              fontSize={12}
              bg="button.100"
              color="#FFFFFF"
              _hover={{ bg: "button.100" }}
              _active={{ bg: "none" }}
            >
              Start your project
            </Button>
            <Button
              bg="none"
              color="#FFFFFF"
              _hover={{ bg: "none" }}
              _active={{ bg: "none" }}
            >
              Sign in
            </Button>
          </HStack>
        </Hide>
        {/* {isMenuOpen && (
          <Flex
            width="100%"
            height="100%"
            backdropBlur="90px"
            position="absolute"
            justifyContent="center"
            alignItems="center"
            zIndex="50"
          >
            <Flex
              width="100%"
              height="100%"
              justifyContent="center"
              alignItems="center"
              direction="column"
              zIndex="51"
            >
              <Text>GG</Text>
              <Text>GG</Text>
              <Text>GG</Text>
              <Text>GG</Text>
            </Flex>
          </Flex>
        )} */}
      </Flex>
    </>
  );
};

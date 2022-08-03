import { HamburgerIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Container,
  Divider,
  Flex,
  HStack,
  Image,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { NONAME } from "dns";
import React, { useState } from "react";
import { ButtonsList } from "./ButtonsList";

export const SecondSection = () => {
  const [isSelected, setSelected] = useState("File previews");
  const buttons = [
    "File previews",
    "Column view",
    "List view",
    "Multi select",
    "Path navigator",
  ];

  return (
    <Flex
      flexDirection="column"
      w="100%"
      minH={["80vh", "80vh", "80vh", "100vh"]}
      justifyContent="center"
      alignItems="center"
      py={["100px", "100px", "100px", "0px"]}
    >
      <Flex
        width="auto"
        direction="column"
        gap={["20px", "20px", "20px", "64px"]}
        px={["50px", "50px", "50px", "none"]}
      >
        <VStack color="white" alignItems="start" width="100%">
          <Box>
            <Text fontSize="48px">Sleek dashboard for managing your media</Text>
            <Text mt="16px" fontSize="18px">
              A complete Object Explorer so that any of your team can use.
            </Text>
            <Text mt="16px" fontSize="18px">
              Drag and drop uploading, moving objects, and multiple object
              selection. As easy as working on your desktop.
            </Text>
          </Box>
        </VStack>
        <Stack
          gap={["5px", "5px", "90px", "188px"]}
          alignItems="start"
          direction={["column", "column", "row"]}
        >
          <VStack
            gap={["1px", "17px", "17px", "17px"]}
            alignItems="start"
            height={["auto"]}
          >
            <ButtonsList
              default="File previews"
              buttons={buttons}
              width="91px"
            />
            <Image src={process.env.PUBLIC_URL + "/images/files.svg"} />
          </VStack>
          <Box>
            <Text color="primary.100" fontSize="18px">
              File previews
            </Text>
            <Text
              mt={["10px", "10px", "10px", "20px"]}
              color="primary.200"
              fontSize="16px"
              maxWidth="330px"
            >
              Preview any media type, including video and audio.
            </Text>
            <Text
              mt={["10px", "10px", "10x", "44px"]}
              color="white"
              fontSize="18px"
            >
              Check out our example app
            </Text>
            <Box
              mt="16px"
              maxWidth="373px"
              bg="#1F1F1F"
              height="auto"
              pl="21px"
              pt="21px"
              pb="33px"
            >
              <Text fontSize="16px" color="white">
                Profile management example
              </Text>
              <Text
                maxWidth="299px"
                fontSize="13px"
                color="primary.200"
                mt="7px"
              >
                Update a user account with public profile information, including
                uploading a profile image.
              </Text>
              <HStack width="auto" mt="15px" alignItems="start" gap="8px">
                <Text color="primary.200" fontSize="14px">
                  Created by:
                </Text>
                <Image src={process.env.PUBLIC_URL + "/images/icon.svg"} />
                <Text fontSize="13px" color="primary.200">
                  supabase
                </Text>
              </HStack>
            </Box>
            <Box
              height="auto"
              maxWidth="373px"
              p="21px"
              borderBottom="1px"
              borderColor="#2A2A2A"
            >
              <HStack width="auto" gap="5.5px">
                <Text fontSize="14px" color="primary.200">
                  nextjs-ts-user-management
                </Text>
                <Image src={process.env.PUBLIC_URL + "/images/github.svg"} />
              </HStack>
              <Box mt="12px">
                <Button
                  width="92px"
                  height="32px"
                  color="white"
                  bg="#1374EF"
                  _hover={{ bg: "#1374EF" }}
                >
                  <HamburgerIcon />
                  <Divider orientation="vertical" ml="10px" />
                  <Text ml="10px" fontSize="12px">
                    Deploy
                  </Text>
                </Button>
              </Box>
            </Box>
          </Box>
        </Stack>
      </Flex>
    </Flex>
  );
};

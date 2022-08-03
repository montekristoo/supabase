import {
  BellIcon,
  CheckIcon,
  CloseIcon,
  HamburgerIcon,
} from "@chakra-ui/icons";
import {
  Box,
  Button,
  Container,
  Flex,
  HStack,
  Image,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";

export const FirstSection = () => {
  return (
    <>
      <Flex
        mt={73}
        flexDirection="column"
        w="100%"
        minH={["80vh", "80vh", "80vh", "100vh"]}
        justifyContent="center"
        alignItems="center"
        gap={["30px", "30px", "30px", "96px"]}
      >
        <Flex
          flexDirection={["column", "column", "column", "row"]}
          maxW={1280}
          height="auto"
          justifyContent={["center", "center", "center", "flex-start"]}
          px={["50px", "50px", "50px", "none"]}
          gap={39}
        >
          <VStack alignItems="start">
            <HStack maxWidth={400} alignItems="start" color="white">
              <HamburgerIcon height="32px" width="32px" />
              <Text>Storage</Text>
            </HStack>
            <Box color="white" pt="28px" fontSize="48px">
              <Text>Store and serve</Text>
              <Text>any type of digital content</Text>
            </Box>
            <Box color="white" pt="57px">
              <Text fontSize="14px" maxW="422px">
                An open source Object store service with unlimited scalability,
                for any file type.
              </Text>
              <Text mt="16px" fontSize="14px" maxW="441px">
                With custom policies and permissions that are familiar and easy
                to implement.
              </Text>
            </Box>
            <Flex
              w="100%"
              justifyContent={["center", "center", "center", "flex-start"]}
            >
              <Button
                maxW="133px"
                maxH="38px"
                bg="button.100"
                fontSize="14px"
                color="white"
                _active={{ bg: "button.100" }}
                _hover={{ bg: "button.100" }}
              >
                Start a project
              </Button>
            </Flex>
          </VStack>
          <Image
            src={process.env.PUBLIC_URL + "/images/banner.svg"}
            bg="brand.100"
            objectFit="contain"
            width={{ md: "600px" }}
          />
        </Flex>
        <Stack
          gap={["50px", "50px", "50px", "118px"]}
          alignItems="start"
          direction={["column", "column", "column", "row"]}
          px={["50px", "50px", "50px", "none"]}
        >
          <VStack alignItems="start">
            <Flex direction="row" gap="13px" color="white" alignItems="center">
              {[...Array(3)].map((_) => (
                <>
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0 6C0 2.68629 2.68629 0 6 0H26C29.3137 0 32 2.68629 32 6V26C32 29.3137 29.3137 32 26 32H6C2.68629 32 0 29.3137 0 26V6Z"
                      fill="white"
                    />
                  </svg>
                  <CloseIcon width="10px" height="10px" />
                </>
              ))}
            </Flex>
            <Box mt="16px" color="white" fontSize="18px">
              <Text>Interoperable</Text>
              <Text maxW="255px" mt="21px">
                Integrates well with the rest of Supabase ecosystem, including
                Auth and Postgres.
              </Text>
            </Box>
          </VStack>
          <VStack alignItems="start">
            <CheckIcon width="32px" height="32px" color="white" />
            <Box pt="19.5px" fontSize="18px" color="white">
              Lightning fast
              <Text mt="21px" maxW="261px">
                Thin API server layer that leverages Postgres' permissions and
                performance.
              </Text>
            </Box>
          </VStack>
          <VStack alignItems="start">
            <Box fontSize="18px" color="white">
              <BellIcon width="32px" height="32px" color="white" />
              <Text mt="18.63px">Dependable</Text>
              <Text mt="21px">
                Enterprise-level scalability and durability.
              </Text>
            </Box>
          </VStack>
        </Stack>
      </Flex>
    </>
  );
};

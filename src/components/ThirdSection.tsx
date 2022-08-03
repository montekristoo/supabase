import { ArrowUpIcon, CopyIcon } from "@chakra-ui/icons";
import {
  Flex,
  Stack,
  Text,
  VStack,
  Box,
  HStack,
  Button,
  Image,
} from "@chakra-ui/react";
import React from "react";
import { BlueText } from "./BlueText";
import { ButtonsList } from "./ButtonsList";
import { CopyButton } from "./CopyButton";
import { GreenText } from "./GreenText";

export const ThirdSection = () => {
  const buttons = [
    "Upload a file",
    "Download a file",
    "List files",
    "Move and renames files",
    "Delete files",
  ];

  return (
    <>
      <Flex
        flexDirection="column"
        w="100%"
        minH={["80vh", "80vh", "80vh", "100vh"]}
        justifyContent="center"
        alignItems="center"
        py={["100px", "100px", "100px", "0px"]}
      >
        <Flex
          px={["50px", "50px", "50px", "none"]}
          gap="112px"
          direction="column"
        >
          <Stack
            width="auto"
            direction={["column", "column", "column", "row"]}
            gap={["50px", "50px", "50px", "169px"]}
            alignItems="center"
          >
            <VStack alignItems="start" gap="81px">
              <Box>
                <Text maxW="368px" fontSize="36px" color="white">
                  Simple and convenient APIs
                </Text>

                <Text mt="12px" fontSize="14px" color="primary.200">
                  Built from the ground-up for interoperable authentication.
                </Text>
                <Text
                  maxW="388px"
                  mt="19px"
                  fontSize="14px"
                  color="primary.200"
                >
                  Fast and easy to implement using our powerful library clients.
                  Asset optimization and image transformation coming soon!
                </Text>
              </Box>
              <HStack gap="105px" alignItems="start">
                <Box>
                  <svg
                    width="21"
                    height="15"
                    viewBox="0 0 21 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4.375 7.98134C6.10449 6.5408 8.28415 5.75195 10.535 5.75195C12.7858 5.75195 14.9655 6.5408 16.695 7.98134"
                      stroke="#A1A1A1"
                      stroke-width="0.875"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M1.24249 4.87488C3.79961 2.62085 7.09125 1.3772 10.5 1.3772C13.9087 1.3772 17.2004 2.62085 19.7575 4.87488"
                      stroke="#A1A1A1"
                      stroke-width="0.875"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M7.46375 11.0961C8.35205 10.465 9.41471 10.126 10.5044 10.126C11.594 10.126 12.6567 10.465 13.545 11.0961"
                      stroke="#A1A1A1"
                      stroke-width="0.875"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M10.5 14.5H10.5088"
                      stroke="#A1A1A1"
                      stroke-width="0.875"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  <Text fontSize="18px" mt="19.5px" color="white">
                    CDN integration
                  </Text>
                  <Text
                    maxWidth="151px"
                    mt="19px"
                    fontSize="14px"
                    color="white"
                  >
                    Serve from the edge to reduce latency.
                  </Text>
                  <Button
                    width="97px"
                    height="20px"
                    fontSize="12px"
                    color="#4299E1"
                    bg="rgba(49, 130, 206, 0.1)"
                  >
                    Coming soon
                  </Button>
                </Box>
                <Box>
                  <svg
                    width="21"
                    height="21"
                    viewBox="0 0 21 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M14 2.625H18.375V7"
                      stroke="#A1A1A1"
                      stroke-width="0.875"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M3.5 17.5L18.375 2.625"
                      stroke="#A1A1A1"
                      stroke-width="0.875"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M18.375 14V18.375H14"
                      stroke="#A1A1A1"
                      stroke-width="0.875"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M13.125 13.125L18.375 18.375"
                      stroke="#A1A1A1"
                      stroke-width="0.875"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M3.5 3.5L7.875 7.875"
                      stroke="#A1A1A1"
                      stroke-width="0.875"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  <Text fontSize="12px" mt="19.5px" color="white">
                    Auto transformation & optimisation
                  </Text>
                  <Text
                    maxWidth="150px"
                    mt="18px"
                    fontSize="14px"
                    color="white"
                  >
                    Resize and compress your media before you serve it.
                  </Text>
                  <Button
                    width="97px"
                    height="20px"
                    fontSize="12px"
                    color="#4299E1"
                    bg="rgba(49, 130, 206, 0.1)"
                  >
                    Coming soon
                  </Button>
                </Box>
              </HStack>
            </VStack>
            <Flex direction="column" gap="24px">
              <ButtonsList
                default="Upload a file"
                buttons={buttons}
                width="auto"
              />
              <HStack
                maxWidth="526px"
                height="auto"
                border="1px"
                borderColor=" #2A2A2A"
                alignItems="start"
                position="relative"
              >
                <VStack
                  mt="11px"
                  mb="13px"
                  alignItems="end"
                  bg="#1E1E1E"
                  width="48px"
                  height="auto"
                  fontSize="12px"
                >
                  {[...Array(13)].map((_, index) => (
                    <Text pr="12px" color="#828282">
                      {index + 1}
                    </Text>
                  ))}
                </VStack>
                <Flex
                  direction="column"
                  mr="12px"
                  pt="37px"
                  gap="9px"
                  fontSize="12px"
                  color="#DDDDDD"
                >
                  <Text
                    color="#75715E"
                    fontSize="11px"
                    fontFamily="Source Code Pro, sans-serif"
                  >
                    // Upload an image to the "avatars" bucket
                  </Text>
                  <Text>
                    <Text as="span" color="#569CD6">
                      const
                    </Text>{" "}
                    spaceCat = event.target.files[0]
                  </Text>
                  <Text>
                    <Text as="span" color="#569CD6">
                      const
                    </Text>{" "}
                    {`{data, error}`} ={" "}
                    <Text as="span" color="#569CD6">
                      await
                    </Text>{" "}
                    supabase
                  </Text>
                  <Text>.storage</Text>
                  <Text>
                    .from {"("}
                    <Text as="span" color="#3ECF8E">
                      {"'avatars'"}
                    </Text>
                    {")"}
                  </Text>
                  <Text>
                    .from {"("}
                    <Text as="span" color="#3ECF8E">
                      {"'space-cat.png'"}
                    </Text>
                    , spaceCat{")"}
                  </Text>
                </Flex>
                <CopyButton />
              </HStack>
            </Flex>
          </Stack>
          <Stack
            width="auto"
            direction={["column", "column", "column", "row"]}
            gap={["50px", "50px", "50px", "190px"]}
            alignItems="center"
          >
            <VStack>
              <Box>
                <Text maxW="326px" fontSize="36px" color="white">
                  Integrates natively with Supabase Auth
                </Text>
                <Text mt="21px" fontSize="14px" color="primary.200">
                  Using Postgres Row Level Security to create Object access
                  rules.
                </Text>
                <Text
                  mt="42px"
                  maxWidth="424px"
                  fontSize="14px"
                  color="primary.200"
                >
                  Storage Authorization is built around Postgres so that you can
                  use any combination of SQL, Postgres functions, and even your
                  own metadata to write policies.
                </Text>
                <Button
                  mt="29px"
                  width="auto"
                  height="36px"
                  bg="#2A2A2A"
                  color="primary.200"
                  _hover={{ color: "primary.200" }}
                >
                  <ArrowUpIcon mr="13px" />
                  Explore the documentation
                </Button>
              </Box>
            </VStack>
            <VStack gap="17px" alignItems="start">
              <ButtonsList
                default="Public access to a bucket"
                buttons={[
                  "Public access to a bucket",
                  "Public access to a folder",
                  "Authentical access to a buck",
                ]}
                width="164px"
              />
              <VStack
                w="100%"
                alignItems="start"
                border="1px"
                borderColor=" #2A2A2A"
              >
                <HStack
                  width="100%"
                  height="auto"
                  alignItems="start"
                  position="relative"
                >
                  <VStack
                    mt="11px"
                    mb="13px"
                    alignItems="end"
                    bg="#1E1E1E"
                    width="48px"
                    height="auto"
                    fontSize="12px"
                  >
                    {[...Array(4)].map((_, index) => (
                      <Text pr="12px" color="#828282">
                        {index + 1}
                      </Text>
                    ))}
                  </VStack>
                  <Flex
                    direction="column"
                    mr="12px"
                    pt="12px"
                    gap="8px"
                    fontSize="12px"
                    color="#DDDDDD"
                  >
                    <Text
                      color="#75715E"
                      fontSize="11px"
                      fontFamily="Source Code Pro, sans-serif"
                    >
                      <BlueText>create policy</BlueText>{" "}
                      <GreenText>{'"Public access"'}</GreenText>
                    </Text>
                    <Text>
                      <BlueText>on</BlueText> storage.objects{" "}
                      <BlueText>for all</BlueText>
                    </Text>
                    <Text>
                      <BlueText>using</BlueText>
                      {"(bucket_id = "} <GreenText>{"'avatars'"}</GreenText>
                      {");"}
                    </Text>
                  </Flex>
                  <CopyButton />
                </HStack>
                <Box pt="45px" pl="33px" pb="101px">
                  <Text fontSize="18px" color="#FFFFFF">
                    Allow public CRUD access to a bucket
                  </Text>
                  <Text mt="16px" fontSize="14px" color="#666666">
                    This will allow any user access to the bucket named
                    'avatars'
                  </Text>
                </Box>
              </VStack>
            </VStack>
          </Stack>
        </Flex>
      </Flex>
    </>
  );
};

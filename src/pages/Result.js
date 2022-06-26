import { Box, Button, Link, Text, VStack } from "@chakra-ui/react";

function Result({ score }) {
  return (
    <>
      <VStack width={"100%"} height={"100vh"}>
        <Box
          w={"70%"}
          my={209}
          bg={"blue.200"}
          border={"1px"}
          borderRadius={10}
          color={"BlackAlpha.700"}
          textAlign={"center"}
        >
          <Text
            my={9}
            fontSize={"2rem"}
            alignSelf={"center"}
            fontSize={"1.5rem"}
          >
            The Result: {score} Points!
          </Text>
        </Box>

        <Button w={"70%"} h={"5%"} colorScheme={"blackAlpha"}>
          <Link href={"/"}>GO HOME!</Link>
        </Button>
      </VStack>
    </>
  );
}

export default Result;

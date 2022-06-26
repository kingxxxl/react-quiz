import { Text } from "@chakra-ui/react";

function Result({ score }) {
  return (
    <>
      <Text height={"100vh"} alignSelf={"center"} fontSize={"1.5rem"} as="kbd">
        {" "}
        The Result: {score} Points!
      </Text>
    </>
  );
}

export default Result;

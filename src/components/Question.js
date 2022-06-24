import { Box, Button, List, Text, VStack } from "@chakra-ui/react";

function Question() {
  return (
    <>
      <VStack spacing={5}>
        <Box width={"100%"}>
          <Text fontSize={"1.5rem"} fontFamily={"body"} fontWeight={"bold"}>
            Who starred as Bruce Wayne and Batman in Tim Burton&#039;s 1989
            movie &quot;Batman&quot;?
          </Text>
        </Box>
        <Box width={"100%"}>
          <VStack>
            <Button
              border={"2px"}
              borderColor={"gray.600"}
              w={"95%"}
              colorScheme="blackAlpha"
              p={8}
            >
              Keaton
            </Button>
            <Button
              border={"2px"}
              borderColor={"gray.600"}
              w={"95%"}
              colorScheme="blackAlpha"
              p={8}
            >
              Adam
            </Button>
            <Button
              border={"2px"}
              borderColor={"gray.600"}
              w={"95%"}
              colorScheme="blackAlpha"
              p={8}
            >
              George
            </Button>
            <Button
              border={"2px"}
              borderColor={"gray.600"}
              w={"95%"}
              colorScheme="blackAlpha"
              p={8}
            >
              Kilmer
            </Button>
          </VStack>
        </Box>
      </VStack>
      {/*<Box m={2}>Tomato</Box>*/}
    </>
  );
}

export default Question;

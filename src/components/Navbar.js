import { Box, LinkBox, VStack } from "@chakra-ui/react";

function Navbar() {
  return (
    <>
      <VStack width={"100%"}>
        <Box
          color="black"
          fontSize={"8vw"}
          fontFamily={"Montserrat"}
          textAlign={"center"}
        >
          React Quiz
        </Box>
        <Box border={"1px"} width={"90%"} color="blackAlpha.700"></Box>
      </VStack>
    </>
  );
}

export default Navbar;

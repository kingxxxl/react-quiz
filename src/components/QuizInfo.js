import { Box, VStack } from "@chakra-ui/react";

function QuizInfo() {
  return (
    <>
      <VStack width={"100%"} textTransform={"uppercase"}>
        <Box>ENTERTAINMENT: cartoon and Animation </Box>
        <Box>SCORE : 0</Box>
        <Box fontSize={"2rem"}>Question 1:</Box>
      </VStack>
    </>
  );
}

export default QuizInfo;

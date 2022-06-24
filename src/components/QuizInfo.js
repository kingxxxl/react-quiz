import React from "react";
import { Box, VStack } from "@chakra-ui/react";
import QuestionNav from "./QuestionNav";

function QuizInfo() {
  return (
    <>
      <VStack width={"100%"} textTransform={"uppercase"}>
        <box>ENTERTAINMENT: cartoon and Anmation </box>
        <Box>SCORE : 0</Box>
        <Box fontSize={"2rem"}>Question 1:</Box>
      </VStack>
    </>
  );
}

export default QuizInfo;

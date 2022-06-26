import { Box, VStack } from "@chakra-ui/react";
import Question from "../components/Question";

function QuizPage({ name, questions, score, setScore }) {
  return (
    <>
      <VStack width={"100%"} height={"100vh"}>
        <Box
          border={"1px"}
          fontSize={"2rem"}
          p={3}
          boxShadow={"4px 4px 2px #000"}
        >
          Welcome {name}
        </Box>

        <Question questions={questions} score={score} setScore={setScore} />
      </VStack>
    </>
  );
}

export default QuizPage;

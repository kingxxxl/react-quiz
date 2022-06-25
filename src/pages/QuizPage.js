import { Box, Input, VStack } from "@chakra-ui/react";
import QuizInfo from "../components/QuizInfo";
import Question from "../components/Question";
import QuestionNav from "../components/QuestionNav";

function QuizPage({ name, questions, score, setScore, setQuestions }) {
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

        <Question questions={questions} />
      </VStack>
    </>
  );
}

export default QuizPage;

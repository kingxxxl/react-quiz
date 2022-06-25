import { Box, VStack } from "@chakra-ui/react";
import QuizInfo from "../components/QuizInfo";
import Question from "../components/Question";
import QuestionNav from "../components/QuestionNav";

function QuizPage(name, questions, score, setScore, setQuestions) {
  return (
    <>
      <VStack width={"100%"} height={"100vh"}>
        <Box
          border={"1px"}
          fontSize={"2rem"}
          p={3}
          boxShadow={"4px 4px 2px #000"}
        >
          name
        </Box>
        <QuizInfo />
        <Box border={"2px"} borderColor={"gray"} p={2} m={2} width={"95%"}>
          <Question />
          <QuestionNav />
        </Box>
      </VStack>
    </>
  );
}

export default QuizPage;

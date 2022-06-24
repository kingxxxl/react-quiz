import { Box, VStack } from "@chakra-ui/react";
import QuizPic from "../components/bg-quiz.png";
import Navbar from "../components/Navbar";
import UserInfo from "../components/UserInfo";
import QuizInfo from "../components/QuizInfo";
import Question from "../components/Question";
import QuestionNav from "../components/QuestionNav";

function QuizPage() {
  return (
    <>
      <VStack width={"100%"} height={"100vh"}>
        <UserInfo />
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

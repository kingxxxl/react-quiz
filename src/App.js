import { Flex, HStack, Text, VStack } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Question from "./components/Question";
import UserInfo from "./components/UserInfo";
import QuizInfo from "./components/QuizInfo";
import QuizPic from "./components/bg-quiz.png";
import QuestionNav from "./components/QuestionNav";

function App() {
  return (
    <>
      <BrowserRouter>
        <Box backgroundImage={QuizPic} width={"100%"} height={"100vh"}>
          <VStack width={"100%"} height={"100vh"}>
            <Navbar />
            <UserInfo />
            <QuizInfo />
            <Box border={"2px"} borderColor={"gray"} p={2} m={2} width={"95%"}>
              <Question />
              <QuestionNav />
            </Box>
          </VStack>
        </Box>
      </BrowserRouter>
    </>
  );
}

export default App;

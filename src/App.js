import QuizPage from "./pages/QuizPage";
import Navbar from "./components/Navbar";
import QuizPic from "./components/bg-quiz.png";
import { Box } from "@chakra-ui/react";
import StarterPage from "./pages/StarterPage";

function App() {
  return (
    <>
      <Box backgroundImage={QuizPic} width={"100%"} height={"100vh"}>
        <Navbar />
        <StarterPage />
      </Box>
    </>
  );
}

export default App;

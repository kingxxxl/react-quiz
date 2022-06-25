import Navbar from "./components/Navbar";
import QuizPic from "./components/bg-quiz.png";
import { Box } from "@chakra-ui/react";
import StarterPage from "./pages/StarterPage";
import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import PageNotFound from "./pages/PageNotFound";
import QuizPage from "./pages/QuizPage";

function App() {
  const [questions, setQuestions] = useState();
  const [score, setScore] = useState(0);
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [error, setError] = useState(false);

  const catClick = (e) => {
    setCategory(e.value);
  };
  const diffClick = (e) => {
    setDifficulty(e.value);
  };
  const startQuiz = async () => {
    if (name === "" || category === "" || difficulty === "") {
      setError(true);
    } else {
      setError(false);
      await get10Question(category, difficulty);
    }
  };

  const get10Question = async (category, difficulty) => {
    const request = await fetch(
      "https://opentdb.com/api.php?amount=10&category=" +
        category +
        "&difficulty=" +
        difficulty +
        "&type=multiple"
    );
    const data = await request.json();
    setQuestions(data.results);
    return data.results;
  };

  return (
    <>
      <Box backgroundImage={QuizPic} width={"100%"} height={"100vh"}>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <StarterPage
                error={error}
                setName={setName}
                startQuiz={startQuiz}
                catClick={catClick}
                diffClick={diffClick}
              />
            }
          />
          <Route path="/quiz" element={<QuizPage />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Box>
    </>
  );
}

export default App;

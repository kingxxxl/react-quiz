import { Box, Button, HStack, Text, VStack } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../css.css";

function Question({ questions, setScore, score }) {
  const [options, setOptions] = useState([]);
  const [count, setCount] = useState(0);
  const [answer, setAnswer] = useState("");
  const [isAnswered, setIsAnswered] = useState(false);
  const [userAnswer, setUserAnswer] = useState("");
  const [isCorrect, setIsCorrect] = useState(false);
  const navigate = useNavigate();

  function shuffle(array) {
    let currentIndex = array.length,
      randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex !== 0) {
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      //
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }
    return array;
  }
  useEffect(() => {
    const getOption = async () => {
      setAnswer(questions[count].correct_answer);
      let tem = [
        questions[count].correct_answer,
        questions[count].incorrect_answers[0],
        questions[count].incorrect_answers[1],
        questions[count].incorrect_answers[2],
      ];
      shuffle(tem);
      setOptions([...tem]);
    };
    getOption();
    // shuffle(options);
    // console.log("option are: " + options);
    // console.log("Answer is : " + answer);
    //
  }, [count]);

  const nextQuestion = () => {
    setOptions([]);
    if (count >= 9) {
      navigate("/result");
    } else {
      setCount(count + 1);
      setIsAnswered(false);
      setIsCorrect(false);
      setUserAnswer("");
    }
  };

  const clickkAnswer = (userAnswer) => {
    setUserAnswer(userAnswer);
    console.log("user user is: " + userAnswer);
    console.log("answer is: " + answer);
    console.log("setIsCorrect is: " + isCorrect);
    if (userAnswer === answer) {
      console.log("correct");
      setScore(score + 1);
      setIsCorrect(true);
    }

    setIsAnswered(true);
  };

  const checkAnswer = (userAnswerr) => {
    console.log("answer is: " + answer);
    if (userAnswerr === answer && isAnswered) {
      return `good`;
    } else if (userAnswer === userAnswerr && isAnswered && !isCorrect) {
      return `bad`;
    } else {
      return ``;
    }
  };

  return (
    <>
      <VStack width={"100%"} textTransform={"uppercase"}>
        <Box>ENTERTAINMENT: cartoon and Animation </Box>
        <Box>SCORE : {score}</Box>
        <Box fontSize={"2rem"}>Question {count + 1}:</Box>
      </VStack>
      <Box border={"2px"} borderColor={"gray"} p={2} m={2} width={"100%"}>
        <VStack spacing={5}>
          <Box width={"100%"}>
            <Text fontSize={"1rem"} fontWeight={"bold"} textAlign={"center"}>
              {questions[count].question
                .replace(/&quot;/g, '"')
                .replace(/&#039;/g, "'")
                .replace(/&euml;/g, "e")
                .replace(/&amp;/g, "&")}
            </Text>
          </Box>
          <Box width={"100%"}>
            <VStack>
              {options.map((answers) => (
                <Button
                  className={` ${checkAnswer(answers)} `}
                  border={"2px"}
                  borderColor="gray.600"
                  w={"100%"}
                  colorScheme={"blackAlpha"}
                  key={answers}
                  p={8}
                  onClick={() => clickkAnswer(answers)}
                  isDisabled={isAnswered}
                >
                  {answers
                    .replace(/&quot;/g, '"')
                    .replace(/&#039;/g, "'")
                    .replace(/&euml;/g, "e")
                    .replace(/&amp;/g, "&")}
                </Button>
              ))}
            </VStack>
          </Box>
        </VStack>

        <HStack my={5}>
          <Button colorScheme={"white"} bg={"#f50057"} w={"50%"} p={9}>
            QUIT
          </Button>
          <Button
            onClick={nextQuestion}
            colorScheme={"blue"}
            bg={"#3f51b5"}
            w={"50%"}
            p={9}
          >
            {count > 8 ? "Submit" : "Next Question"}
          </Button>
        </HStack>
      </Box>
    </>
  );
}

export default Question;

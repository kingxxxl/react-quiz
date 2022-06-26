import { Box, Button, HStack, Text, VStack } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Question({ questions }) {
  console.log(questions);
  const [options, setOptions] = useState([]);
  const [count, setCount] = useState(0);
  const [answer, setAnswer] = useState("");

  const whatever = useNavigate();

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
    console.log(options);
    // shuffle(options);
    // console.log("option are: " + options);
    // console.log("Answer is : " + answer);
    //
  }, [count]);

  const nextQuestion = () => {
    setOptions([]);
    if (count >= 9) {
      whatever("/result");
    } else {
      setCount(count + 1);
    }
  };

  return (
    <>
      <VStack width={"100%"} textTransform={"uppercase"}>
        <Box>ENTERTAINMENT: cartoon and Animation </Box>
        <Box>SCORE : 0</Box>
        <Box fontSize={"2rem"}>Question {count}:</Box>
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
              {options.map((answer) => (
                <Button
                  border={"2px"}
                  borderColor={"gray.600"}
                  w={"100%"}
                  colorScheme="blackAlpha"
                  p={8}
                >
                  {answer
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
            colorScheme={"white"}
            bg={"#3f51b5"}
            w={"50%"}
            p={9}
          >
            NEXT QUESTION
          </Button>
        </HStack>
      </Box>
    </>
  );
}

export default Question;

import { Box, Button, HStack, Text, VStack } from "@chakra-ui/react";
import { useState } from "react";

function Question({ questions }) {
  const [count, setCount] = useState(0);
  const nextQuestion = () => {
    if (count >= 9) {
      setCount(0);
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
              <Button
                border={"2px"}
                borderColor={"gray.600"}
                w={"100%"}
                colorScheme="blackAlpha"
                p={8}
              >
                {questions[count].correct_answer
                  .replace(/&quot;/g, '"')
                  .replace(/&#039;/g, "'")
                  .replace(/&euml;/g, "e")
                  .replace(/&amp;/g, "&")}
              </Button>

              {questions[count].incorrect_answers.map((answer) => (
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

import QuizPic from "../components/quiz-home.svg";
import { Box, Button, Image, Input, VStack } from "@chakra-ui/react";
import CatAndDiff from "../components/CatAndDiff";
function StarterPage({ error, setName, startQuiz, catClick, diffClick }) {
  return (
    <>
      <VStack alignItems={"center"} width={"100%"} spacing={9}>
        <Image src={QuizPic} width={"85%"} />
        {error && (
          <Box
            bg={"red"}
            textColor={"white"}
            fontSize={"1.5rem"}
            boxShadow={
              "0px 3px 1px -2px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%)"
            }
            w={"80%"}
            textAlign={"center"}
          >
            Please Fill all the fields
          </Box>
        )}

        <Box fontSize={"2rem"}>Quiz Settings</Box>
        <Input
          placeholder="Enter Your Name"
          width={"85%"}
          onChange={(e) => setName(e.target.value)}
        />

        <CatAndDiff catClick={catClick} diffClick={diffClick} />
        <Button
          colorScheme={"white"}
          bg={"#3f51b5"}
          w={"80%"}
          boxShadow={
            "0px 3px 1px -2px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%)"
          }
          onClick={startQuiz}
        >
          START QUIZE
        </Button>
      </VStack>
    </>
  );
}

export default StarterPage;

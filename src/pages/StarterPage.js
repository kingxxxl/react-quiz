import QuizPic from "../components/quiz-home.svg";
import { Box, Button, Image, Input, Stack, VStack } from "@chakra-ui/react";
import {
  AsyncCreatableSelect,
  AsyncSelect,
  CreatableSelect,
  Select,
} from "chakra-react-select";
function StarterPage() {
  return (
    <>
      <VStack alignItems={"center"} width={"100%"} spacing={9}>
        <Image src={QuizPic} width={"85%"} />

        <Box fontSize={"2rem"}>Quiz Settings</Box>
        <Input placeholder="Enter Your Name" width={"85%"} />

        <Box width={"85%"}>
          <Select
            placeholder={"Select Category"}
            options={[
              {
                label: "Category1",
                value: "Category1",
              },
              {
                label: "Category3",
                value: "Category2",
              },
              {
                label: "Category3",
                value: "Category3",
              },
            ]}
          />
        </Box>

        <Box width={"85%"}>
          <Select
            placeholder={"Difficulty"}
            options={[
              {
                label: "Easy",
                value: "easy",
              },
              {
                label: "Medium",
                value: "medium",
              },
              {
                label: "Hard",
                value: "hard",
              },
            ]}
          />
        </Box>
        <Button
          colorScheme={"white"}
          bg={"#3f51b5"}
          w={"80%"}
          boxShadow={
            "0px 3px 1px -2px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%)"
          }
        >
          START QUIZE{" "}
        </Button>
      </VStack>
    </>
  );
}

export default StarterPage;

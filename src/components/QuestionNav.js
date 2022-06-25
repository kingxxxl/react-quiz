import { Button, HStack } from "@chakra-ui/react";

function QuestionNav() {
  return (
    <>
      <HStack my={5}>
        <Button colorScheme={"white"} bg={"#f50057"} w={"50%"} p={9}>
          QUIT
        </Button>
        <Button colorScheme={"white"} bg={"#3f51b5"} w={"50%"} p={9}>
          NEXT QUESTION
        </Button>
      </HStack>
    </>
  );
}
//t
export default QuestionNav;

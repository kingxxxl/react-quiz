import { Text } from "@chakra-ui/react";

function Result({ score }) {
  console.log(score);
  return <Text> The result {score.score}</Text>;
}

export default Result;

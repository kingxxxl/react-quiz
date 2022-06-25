import { Box } from "@chakra-ui/react";
import { Select } from "chakra-react-select";

const CatAndDiff = ({ catClick, diffClick }) => {
  return (
    <>
      <Box width={"85%"}>
        <Select
          onChange={catClick}
          placeholder={"Select Category"}
          options={[
            {
              label: "General Knowledge",
              value: 9,
            },
            { label: "Books", value: 10 },
            { label: "Films", value: 11 },
            { label: "Music", value: 12 },
            { label: "Musicals and Theaters", value: 13 },
            { label: "Television", value: 14 },
            { label: "Video Games", value: 15 },
            { label: "Board Games", value: 16 },
            { label: "Science and Nature", value: 17 },
            { label: "Computer", value: 18 },
            { label: "Mathematics", value: 19 },
            { label: "Mythology", value: 20 },
            { label: "Sports", value: 21 },
            { label: "Geography", value: 22 },
            { label: "History", value: 23 },
            { label: "Politics", value: 24 },
            { label: "Art", value: 25 },
            { label: "Celebrities", value: 26 },
            { label: "Animals", value: 27 },
            { label: "Vehicles", value: 28 },
            { label: "Comics", value: 29 },
            { label: "Gadgets", value: 30 },
            { label: "Japanese Anime", value: 31 },
            { label: "Cartoon and Animations", value: 32 },
          ]}
        ></Select>
      </Box>

      <Box width={"85%"}>
        <Select
          onChange={diffClick}
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
    </>
  );
};

export default CatAndDiff;

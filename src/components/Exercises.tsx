import React, { FC, useState } from "react";
import Pagination from "@mui/material/Pagination";
import { Box, Stack, Typography } from "@mui/material";
import { Options } from "../utils/fetchData";
import ExerciseCard from "./ExerciseCard";
export interface Props {
  setExercises: any;
  bodyPart: any;
  exercises: any;
}

const options: Options = {
  headers: {
    "X-RapidAPI-Key": "f63405bff3msh7d3e187add752c9p10ab33jsn63bd228c12c3",
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
  },
};
const exerciseOptions: Options = {
  headers: {
    "X-RapidAPI-Key": "f63405bff3msh7d3e187add752c9p10ab33jsn63bd228c12c3",
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
  },
};

const Exercises: FC<Props> = ({ setExercises, bodyPart, exercises }) => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const exPerPage = 9;

  const indexLastEx = currentPage * exPerPage;
  const indexFirstEx = indexLastEx - exPerPage;

  const currentEx = exercises.slice(indexFirstEx, indexLastEx) ;
  const paginate = (e: any, value: any) => {
    setCurrentPage(value);
    window.scrollTo({ top: 1800, behavior: "smooth" });
  };

  return (
    <Box id="exercises" sx={{ mt: { lg: "110px" } }} mt="50px" p="20px">
      <Typography variant="h3" mb="46px">
        Showing result
      </Typography>

      <Stack
        direction="row"
        sx={{ gap: { lg: "110px", xs: "50px" } }}
        flexWrap="wrap"
        justifyContent="center"
      >
        {currentEx.map((exercise: any, index: any) => (
          <ExerciseCard key={index} exercise={exercise} />
        ))}
      </Stack>

      <Stack mt="100px" alignItems="center">
        {exercises.length > 9 && (
          <Pagination
            color="standard"
            shape="rounded"
            defaultPage={1}
            count={Math.ceil(exercises.length / 9)}
            page={currentPage}
          />
        )}
      </Stack>
    </Box>
  );
};

export default Exercises;

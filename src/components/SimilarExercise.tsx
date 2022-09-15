import React, { FC } from "react";
import { BodyTypeDetail } from "../pages/ExerciseDetail";
import { Typography, Box, Stack } from '@mui/material';
import HorizontalScrollBar from "./HorizontalScrollBar";

interface Props {
  targetMuscleExercisesData: BodyTypeDetail[] | any[] | any;
  equimentExercisesData: BodyTypeDetail[] | any[] |any ;
}
const SimilarExercise:FC<Props> = ({targetMuscleExercisesData, equimentExercisesData}) => {
  console.log(targetMuscleExercisesData , ' and ',equimentExercisesData)
  return (
    <Box sx={{mt: { lg: '100px',xs: '0'}}}>
      <Typography variant="h3">Exercises that target the same muscles </Typography>
      {/* <Stack direction="row" sx={{ p: 2, position: 'relative' }}>
      {targetMuscleExercisesData.length !== 0 ? <HorizontalScrollBar data={targetMuscleExercisesData} /> : null} */}
    {/* </Stack> */}
    </Box>
  )
};

export default SimilarExercise;

import React, { FC, useEffect, useState } from "react";
import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import { Options } from "../utils/fetchData";
import { fetchData } from "../utils/fetchData";
import HorizontalScrollBar from "./HorizontalScrollBar";

export type MuscleGroup = string[] | [];

export interface Props {
  setExercises: any;
  setBodyPart: any;
  bodyPart: any;
}

const SearchExecise: FC<Props> = ({ setExercises, bodyPart, setBodyPart }) => {
  const [search, setSearch] = useState<string>("");
  const [bodyParts, setBodyParts] = useState<MuscleGroup>([]);

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

  useEffect(() => {
    getAllMuscleGroupData();
  }, []);
  const getAllMuscleGroupData = async () => {
    const MuscleGroupdata = await fetchData(
      "https://exercisedb.p.rapidapi.com/exercises/bodyPartList",
      options
    );
    await setBodyParts(MuscleGroupdata);

    console.log(MuscleGroupdata);
  };
  const handleSearch = async (word?: any) => {
    if (search) {
      const exercisesData = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises",
        exerciseOptions
      );

      const searchedExercises = exercisesData.filter(
        (item: any) =>
          item.name.toLowerCase().includes(search) ||
          item.target.toLowerCase().includes(search) ||
          item.equipment.toLowerCase().includes(search) ||
          item.bodyPart.toLowerCase().includes(search)
      );

      window.scrollTo({ top: 1800, left: 100, behavior: "smooth" });

      setSearch("");
      setExercises(searchedExercises);
    } else if (word && !search) {
      const exercisesData = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises",
        exerciseOptions
      );

      const searchedExercises = exercisesData.filter(
        (item: any) =>
          item.name.toLowerCase().includes(word) ||
          item.target.toLowerCase().includes(word) ||
          item.equipment.toLowerCase().includes(word) ||
          item.bodyPart.toLowerCase().includes(word)
      );

      window.scrollTo({ top: 1800, left: 100, behavior: "smooth" });

      setSearch("");
      setExercises(searchedExercises);
    }
  };

  return (
    <Stack alignItems="center" mt="37px" justifyContent="center" p="20px">
      <Typography
        fontWeight={700}
        sx={{
          fontSize: {
            lg: "44px",
            xs: "30px",
          },
        }}
        mb="50px"
        textAlign="center"
      >
        Awesome Exercises You <br /> Should Know
      </Typography>
      <Box position="relative" mb="72px">
        <TextField
          sx={{
            input: { fontWeight: "700", border: "none", borderRadius: "4px" },
            width: { lg: "1170px", xs: "350px" },
            backgroundColor: "#fff",
            borderRadius: "40px",
          }}
          value={search}
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
          placeholder="Search Exercises"
          type="text"
        />
        <Button
          className="search-btn"
          sx={{
            bgcolor: "#FF2625",
            color: "#fff",
            textTransform: "none",
            width: { lg: "173px", xs: "80px" },
            height: "56px",
            position: "absolute",
            right: "0px",
            fontSize: { lg: "20px", xs: "14px" },
          }}
          onClick={handleSearch}
        >
          Search
        </Button>
      </Box>
      <Box sx={{ position: "relative", width: "100%", p: "20px" }}>
        <HorizontalScrollBar
          data={bodyParts}
          bodyParts
          setBodyPart={setBodyPart}
          bodyPart={bodyPart}
          handleSearch= {handleSearch}
        />
      </Box>
    </Stack>
  );
};

export default SearchExecise;

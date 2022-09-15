import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Details from "../components/Details";
import SimilarExercise from "../components/SimilarExercise";
import ExerciseVideo from "../components/ExerciseVideo";
import { Box } from "@mui/material";
import { fetchData } from "../utils/fetchData";
import { exerciseOptions, Options, youTubeOptions } from "../utils/fetchData";

export interface BodyTypeDetail {
  bodyPart: string;
  equipment: string;
  gifUrl: string;
  id: string;
  name: string;
  target: string;
}

const options: Options = {
  headers: {
    "X-RapidAPI-Key": "f63405bff3msh7d3e187add752c9p10ab33jsn63bd228c12c3",
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
  },
};

const ExerciseDetail = () => {
  const [exDetail, setExDetail] = useState<any>({});
  const [exVideos, setExVideos] = useState<any>();
  const { id } = useParams();

  useEffect(() => {
    const fetchExData = async () => {
      const exURL = "https://exercisedb.p.rapidapi.com";
      const youTubeUrl =
        "https://youtube-search-and-download.p.rapidapi.com";

      const exDetailData = await fetchData(
        `${exURL}/exercises/exercise/${id}`,
        exerciseOptions
      );

      if (exDetailData) {
        setExDetail(exDetailData);
      }

      const videoData = await fetchData(
        `${youTubeUrl}/search?query=${exDetailData.name} exercise`,
        youTubeOptions as Options
      );
      setExVideos(videoData);
      
    };

    fetchExData();
  }, [id]);

  return (
    <Box>
      <Details exerciseDetails={exDetail} />
      <ExerciseVideo exerciseVideo={exVideos} name = {exDetail.name}/>
      <SimilarExercise />
    </Box>
  );
};

export default ExerciseDetail;

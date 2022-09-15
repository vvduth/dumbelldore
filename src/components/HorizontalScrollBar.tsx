import { Box } from "@mui/material";

import React, { FC, useContext  } from "react";
import BodyPart from "./BodyPart";
import ExerciseCard from "./ExerciseCard";
import RightArrowIcon from '../assets/icons/right-arrow.png';
import LeftArrowIcon from '../assets/icons/left-arrow.png';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import {  Typography } from '@mui/material';
export interface Props {
  bodyPart: any;
  bodyParts: any;
  setBodyPart: any;
  data: any;
  handleSearch: any ; 
}

const LeftArrow = () => {
  const { scrollPrev } = useContext(VisibilityContext);

  return (
    <Typography onClick={() => scrollPrev()} className="right-arrow">
      <img src={LeftArrowIcon} alt="right-arrow" />
    </Typography>
  );
};

const RightArrow = () => {
  const { scrollNext } = useContext(VisibilityContext);

  return (
    <Typography onClick={() => scrollNext()} className="left-arrow">
      <img src={RightArrowIcon} alt="right-arrow" />
    </Typography>
  );
};

const HorizontalScrollBar: FC<Props> = ({
  data,
  bodyParts,
  setBodyPart,
  bodyPart,
  handleSearch
}) => {
  return (
    <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
    {data.map((item:any) => (
      <Box
        key={item.id ? item.id : item}
        
        title={item.id || item}
        m="0 40px"
      >
        {bodyParts ? <BodyPart item={item} setBodyPart={setBodyPart} bodyPart={bodyPart} handleSearch={handleSearch} /> : <ExerciseCard exercise={item} /> }
      </Box>
    ))}
  </ScrollMenu>
  );
};

export default HorizontalScrollBar;

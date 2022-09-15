import {  Stack, Typography } from "@mui/material";
import React, { FC } from "react";
import Icon from '../assets/icons/gym.png';
interface Props {
  item: any;
  setBodyPart: any;
  bodyPart: any;
  handleSearch: any ; 
}
const BodyPart: FC<Props> = ({ item, setBodyPart, bodyPart, handleSearch }) => {
  return (
    <Stack
    
      alignItems="center"
      justifyContent="center"
      className="bodyPart-card"
      sx={
        bodyPart === item
          ? {
              borderTop: "4px solid #FF2625",
              background: "#fff",
              borderBottomLeftRadius: "20px",
              width: "270px",
              height: "282px",
              cursor: "pointer",
              gap: "47px",
            }
          : {
              background: "#fff",
              borderBottomLeftRadius: "20px",
              width: "270px",
              height: "282px",
              cursor: "pointer",
              gap: "47px",
            }
      }
      onClick={() => {
        setBodyPart(item);
        handleSearch(item)
        window.scrollTo({ top: 1800, left: 100, behavior: "smooth" });
      }}
    >
       <img src={Icon} alt="dumbbell" style={{ width: '40px', height: '40px' }} />
    <Typography fontSize="24px" fontWeight="bold" fontFamily="Alegreya" color="#3A1212" textTransform="capitalize"> {item} </Typography>

    </Stack>
  );
};

export default BodyPart;

import React from "react";
import { Box, Stack, Typography, Button } from "@mui/material";
import HeroBannerImage from "../assets/images/banner.png";
import Ducthai from "../assets/images/ducthai.jpg";
const HeroBanner = () => {
  return (
    <Box
      sx={{
        mt: {
          lg: "212px",
          xs: "70px",
        },
        ml: {
          sm: "50px",
        },
      }}
      position="relative"
      p="20px"
    >
      <Typography fontSize="22px" fontFamily="Alegreya" lineHeight="35px">
        Duke Fitness
      </Typography>

      <Typography
        fontWeight={700}
        sx={{ fontSize: { lg: "44px", xs: "40px" } }}
        mb="23px"
        mt="30px"
      >
        Healthy Life, Banged Baller <br />
        Strong Code
      </Typography>

      <Typography fontSize="22px" lineHeight="35px" mb={4}>
        Check out to become more explosive baller in any realms <br/> of human
        endeavour
      </Typography>

      <Stack>
        <a
          href="#exercises"
          style={{
            marginTop: "45px",
            textDecoration: "none",
            width: "200px",
            textAlign: "center",
            background: "#FF2625",
            padding: "14px",
            fontSize: "22px",
            textTransform: "none",
            color: "white",
            borderRadius: "4px",
          }}
        >
          Explore Exercises
        </a>
      </Stack>
      <Typography
        fontWeight={600}
        color="#FF2625"
        sx={{
          opacity: "0.1",
          display: { lg: "block", xs: "none" },
          fontSize: "200px",
        }}
      >
        Kick off
      </Typography>

      <img
        src={Ducthai}
        alt="hero-banner"
        className="hero-banner-img"
        style= {{
          borderRadius: '15px'
        }}
      />
    </Box>
  );
};

export default HeroBanner;

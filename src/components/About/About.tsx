import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import {
  StyledTextArea,
  getImageBoxStyle,
  getTitlePageStyle,
  getContainerStyle,
} from "./About.styles.tsx";
import { AboutOptions } from "../../assets/utils/AboutTextAreaContent.tsx";

const About = () => {
  const [scrollValue, setScrollValue] = useState(0);

  document.addEventListener("scroll", function () {
    const value = window.scrollY;
    setScrollValue(value);
  });

  const setImageValue = () => {
    if (scrollValue >= 2300 && scrollValue < 3300) {
      return AboutOptions[1].imageSrc;
    }
    if (scrollValue >= 3300 && scrollValue < 4300) {
      return AboutOptions[2].imageSrc;
    }
    if (scrollValue >= 4300) {
      return AboutOptions[3].imageSrc;
    }
    if (scrollValue < 2300) {
      return AboutOptions[0].imageSrc;
    }
  };

  return (
    <Box sx={getContainerStyle}>
      <Box>
        <Box sx={getTitlePageStyle}>
          <Typography>{"Desenvolva seus produtos rapidamente"}</Typography>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </Typography>
        </Box>
        <Box sx={getImageBoxStyle}>
          <Box component="img" src={""} alt={"Alt teste"} />
          <Box component="img" src={setImageValue()} alt={"Alt teste"} />
        </Box>
        {AboutOptions.map((item) => (
          <StyledTextArea title={item.title} text={item.text} />
        ))}
      </Box>
    </Box>
  );
};

export default About;

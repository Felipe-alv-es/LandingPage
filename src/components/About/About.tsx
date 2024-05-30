import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import {
  StyledTextArea,
  getTitlePageStyle,
  getContainerStyle,
  StyledImage,
} from "./About.styles.tsx";
import { AboutOptions } from "../../assets/utils/AboutTextAreaContent.tsx";

const About = () => {
  const [scrollValue, setScrollValue] = useState(0);

  document.addEventListener("scroll", function () {
    const value = window.scrollY;
    setScrollValue(value);
  });

  console.log(scrollValue);

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
        <StyledImage scrollValue={scrollValue} />
        {AboutOptions.map((item) => (
          <StyledTextArea title={item.title} text={item.text} />
        ))}
      </Box>
    </Box>
  );
};

export default About;

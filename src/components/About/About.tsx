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

  return (
    <Box sx={getContainerStyle}>
      <Box sx={{ "div:nth-of-type(6)": { marginBottom: "0%" } }}>
        <Box sx={getTitlePageStyle}>
          <Typography>{"Comece a aprender conosco"}</Typography>
          <Typography>
            Descubra os benefícios exclusivos de nossos cursos online em design
            e programação. Com uma abordagem prática e conteúdos atualizados,
            garantimos uma experiência de aprendizado completa que vai além do
            básico. Confira como você pode transformar sua carreira com nossas
            soluções educacionais inovadoras:
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

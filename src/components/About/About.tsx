import React, { useState } from "react";
import { Box, Typography } from "@mui/material";

const About = () => {
  const [scrollValue, setScrollValue] = useState(0);

  document.addEventListener("scroll", function () {
    const value = window.scrollY;
    setScrollValue(value);
  });

  const setImageValue = () => {
    if (scrollValue >= 2300 && scrollValue < 3300) {
      return "https://media.istockphoto.com/id/492519686/pt/foto/alpino-panorama-da-aldeia.jpg?s=2048x2048&w=is&k=20&c=DU_qzKGgiSzodDYWG28ayz6zqF8vRFwDcraPn09giEE=";
    }
    if (scrollValue >= 3300 && scrollValue < 4300) {
      return "https://media.istockphoto.com/id/1666007545/pt/foto/rocky-dolomiti-mountain-peaks-covered-on-mist-aple-di-siusi-valley-italian-alps.jpg?s=2048x2048&w=is&k=20&c=46pWUXWECkQ6WLwqNA1iELcW4dOfXB2McFaTNq0AcC8=";
    }
    if (scrollValue >= 4300) {
      return "https://media.istockphoto.com/id/1029932372/pt/foto/houses-with-mountains-in-the-fog-in-the-background-in-tineo-asturias-spain.jpg?s=2048x2048&w=is&k=20&c=u2MILnqvqKWy3nTtyLrRBZ72K_iv6DrjI75mv4CYUR4=";
    }
    if (scrollValue < 2300) {
      return "https://media.istockphoto.com/id/871669014/pt/foto/langmu-temple-at-sunrise.jpg?s=2048x2048&w=is&k=20&c=SLAVOe6ex-KbK2ExtT-iClKXwTdzMNJNI515kUSFxyM=";
    }
  };

  return (
    <Box sx={{ justifyContent: "center", display: "flex" }}>
      <Box
        sx={{
          padding: "10%",
          width: "85%",
        }}
      >
        <Box
          sx={{
            width: "70%",
            marginBottom: "32px",
          }}
        >
          <Typography
            variant="h2"
            fontFamily={"kanit"}
            fontWeight={"500"}
            color={"#383838"}
            sx={{ whiteSpace: "pre-wrap", marginBottom: "16px" }}
          >
            {"Desenvolva seus produtos rapidamente"}
          </Typography>
          <Typography
            variant="h6"
            fontFamily={"kanit"}
            fontWeight={"300"}
            color={"#383838"}
            sx={{ whiteSpace: "pre-wrap", marginBottom: "16px" }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </Typography>
        </Box>
        <Box
          sx={{
            position: "sticky",
            top: 300,
            width: "100%",
            paddingTop: "0%",
            display: "flex",
          }}
        >
          <Box
            component="img"
            src={""}
            alt={"Alt teste"}
            sx={{
              width: "50%",
              borderRadius: "16px",
              opacity: 0,
            }}
          />
          <Box
            component="img"
            src={setImageValue()}
            alt={"Alt teste"}
            sx={{
              width: "50%",
              borderRadius: "16px",
              objectFit: "cover",
            }}
          />
        </Box>
        <Box
          sx={{
            width: "50%",
            marginBottom: "50%",
          }}
        >
          <Typography
            variant="h3"
            fontFamily={"kanit"}
            fontWeight={"500"}
            color={"#383838"}
            sx={{ whiteSpace: "pre-wrap", marginBottom: "16px" }}
          >
            {"Desenvolva seus produtos rapidamente"}
          </Typography>
          <Typography
            variant="h6"
            fontFamily={"kanit"}
            fontWeight={"300"}
            color={"#383838"}
            sx={{ whiteSpace: "pre-wrap", marginBottom: "16px" }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </Typography>
        </Box>
        <Box
          sx={{
            width: "50%",
            marginBottom: "50%",
          }}
        >
          <Typography
            variant="h3"
            fontFamily={"kanit"}
            fontWeight={"500"}
            color={"#383838"}
            sx={{ whiteSpace: "pre-wrap", marginBottom: "16px" }}
          >
            {"Desenvolva seus produtos rapidamente"}
          </Typography>
          <Typography
            variant="h6"
            fontFamily={"kanit"}
            fontWeight={"300"}
            color={"#383838"}
            sx={{ whiteSpace: "pre-wrap", marginBottom: "16px" }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </Typography>
        </Box>
        <Box
          sx={{
            width: "50%",
            marginBottom: "50%",
          }}
        >
          <Typography
            variant="h3"
            fontFamily={"kanit"}
            fontWeight={"500"}
            color={"#383838"}
            sx={{ whiteSpace: "pre-wrap", marginBottom: "16px" }}
          >
            {"Desenvolva seus produtos rapidamente"}
          </Typography>
          <Typography
            variant="h6"
            fontFamily={"kanit"}
            fontWeight={"300"}
            color={"#383838"}
            sx={{ whiteSpace: "pre-wrap", marginBottom: "16px" }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </Typography>
        </Box>
        <Box
          sx={{
            width: "50%",
          }}
        >
          <Typography
            variant="h3"
            fontFamily={"kanit"}
            fontWeight={"500"}
            color={"#383838"}
            sx={{ whiteSpace: "pre-wrap", marginBottom: "16px" }}
          >
            {"Desenvolva seus produtos rapidamente"}
          </Typography>
          <Typography
            variant="h6"
            fontFamily={"kanit"}
            fontWeight={"300"}
            color={"#383838"}
            sx={{ whiteSpace: "pre-wrap", marginBottom: "16px" }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default About;

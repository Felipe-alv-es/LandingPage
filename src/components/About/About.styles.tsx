import React from "react";
import { Box, Typography } from "@mui/material";
import { AboutProps } from "./About.types";
import { AboutOptions } from "../../assets/utils/AboutTextAreaContent.tsx";

export const getContainerStyle = () => ({
  justifyContent: "center",
  display: "flex",
  "> div": {
    padding: "10%",
    width: "85%",
  },
});

export const getTitlePageStyle = () => ({
  width: "70%",
  marginBottom: "32px",
  "> p:nth-of-type(1)": {
    typography: "h2",
    whiteSpace: "pre-wrap",
    marginBottom: "16px",
    color: "#383838",
    fontWeight: "500",
    fontFamily: "kanit",
  },
  "> p:nth-of-type(2)": {
    typography: "h6",
    whiteSpace: "pre-wrap",
    marginBottom: "16px",
    color: "#383838",
    fontWeight: "300",
    fontFamily: "kanit",
  },
});

export const StyledTextArea = React.forwardRef<HTMLDivElement, AboutProps>(
  ({ title, text, ...props }, ref) => {
    return (
      <Box
        sx={{
          width: "50%",
          marginBottom: "50%",
          paddingRight: "48px",
        }}
        {...props}
      >
        <Typography
          variant="h3"
          fontFamily={"kanit"}
          fontWeight={"500"}
          color={"#383838"}
          sx={{ whiteSpace: "pre-wrap", marginBottom: "16px" }}
        >
          {title}
        </Typography>
        <Typography
          variant="h6"
          fontFamily={"kanit"}
          fontWeight={"300"}
          color={"#383838"}
          sx={{ whiteSpace: "pre-wrap", marginBottom: "16px" }}
        >
          {text}
        </Typography>
      </Box>
    );
  }
);

export const StyledImage = React.forwardRef<HTMLDivElement, AboutProps>(
  ({ scrollValue, ...props }, ref) => {
    const setImageValue = (scrollValue) => {
      if (scrollValue < 2200) {
        return AboutOptions[0].imageSrc;
      }
      if (scrollValue >= 2200 && scrollValue < 3250) {
        return AboutOptions[1].imageSrc;
      }
      if (scrollValue >= 3250 && scrollValue < 4300) {
        return AboutOptions[2].imageSrc;
      }
      if (scrollValue >= 4300) {
        return AboutOptions[3].imageSrc;
      }
    };

    return (
      <Box
        sx={{
          position: "sticky",
          top: 300,
          width: "100%",
          paddingTop: "0%",
          display: "flex",
        }}
        {...props}
      >
        <Box
          component="img"
          src={setImageValue(scrollValue)}
          alt={"Images have opacity 0"}
          sx={{
            width: "50%",
            borderRadius: "16px",
            opacity: 0,
          }}
        />
        <Box
          sx={{
            backgroundImage: `url(${setImageValue(scrollValue)})`,
            transition: "1s",
            backgroundSize: "cover",
            borderRadius: "16px",
            opacity:
              scrollValue && (scrollValue < 980 || scrollValue > 5400)
                ? 0
                : 100,
          }}
        >
          <Box
            component="img"
            src={setImageValue(scrollValue)}
            alt={"Images have opacity 0"}
            sx={{
              width: "100%",
              borderRadius: "16px",
              transition: "1s",
              opacity: 0,
            }}
          />
        </Box>
      </Box>
    );
  }
);

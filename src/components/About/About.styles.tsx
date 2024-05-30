import React from "react";
import { Box, Typography } from "@mui/material";
import { AboutProps } from "./About.types";

export const getContainerStyle = () => ({
  justifyContent: "center",
  display: "flex",
  "> div": {
    padding: "10%",
    width: "85%",
  },
});

export const getImageBoxStyle = () => ({
  position: "sticky",
  top: 300,
  width: "100%",
  paddingTop: "0%",
  display: "flex",
  "> img": {
    width: "50%",
    borderRadius: "16px",
    // transition: "10s",
  },
  "> img:nth-of-type(1)": {
    opacity: 0,
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

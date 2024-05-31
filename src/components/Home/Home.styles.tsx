import { Box } from "@mui/material";
import React from "react";

export const getContainerStyle = () => ({
  background: "black",
  width: "100%",
  justifyContent: "center",
  display: "flex",
  "> div": {
    paddingTop: "200px",
    background: "black",
    width: "70%",
    textAlign: "center",
    padding: "10% 10% 2% 10%",
    position: "relative",
  },
});

export const getTitleStyle = () => ({
  whiteSpace: "pre-wrap",
  marginBottom: "16px",
  typography: "h2",
  fontFamily: "kanit",
  fontWeight: "500",
  color: "white",
});

export const getSubtitleStyle = (mt?: boolean) => ({
  whiteSpace: "pre-wrap",
  marginBottom: "16px",
  typography: "h6",
  fontFamily: "kanit",
  fontWeight: "300",
  color: "white",
  marginTop: mt ? "72px" : "",
});

export const getButtonStyle = () => ({
  textTransform: "none",
  height: "48px",
  marginBottom: "32px",
});

export const BackgroundStyled = React.forwardRef<HTMLDivElement>((ref) => {
  return (
    <>
      <Box
        sx={{
          background: "#C3C3C3",
          position: "absolute",
          width: "20%",
          height: "100%",
          top: 0,
          right: "0%",
          opacity: "5%",
        }}
      />
      <Box
        sx={{
          background: "#C3C3C3",
          position: "absolute",
          width: "20%",
          height: "100%",
          top: 0,
          right: "40%",
          opacity: "5%",
        }}
      />
      <Box
        sx={{
          background: "#C3C3C3",
          position: "absolute",
          width: "20%",
          height: "100%",
          top: 0,
          left: "0%",
          opacity: "5%",
        }}
      />
    </>
  );
});

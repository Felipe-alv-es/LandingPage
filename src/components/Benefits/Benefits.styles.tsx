import React from "react";
import { BenefitsProps } from "./Benefits.types";
import { Box, Typography } from "@mui/material";

export const getContainerStyle = () => ({
  justifyContent: "center",
  display: "flex",
  marginBottom: "32px",
  "> div": {
    width: "70%",
  },
  "@media(max-width: 1440px)": {
    "> div": {
      width: "80%",
    },
  },
  "@media(max-width: 390px)": {
    "> div": {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
    },
  },
});

export const getPageTitleStyle = () => ({
  whiteSpace: "pre-wrap",
  marginBottom: "16px",
  typography: "h3",
  fontFamily: "kanit",
  fontWeight: "500",
  color: "#383838",
  "@media(max-width: 390px)": {
    typography: "h4",
    fontFamily: "kanit",
    fontWeight: "500",
    textAlign: "center",
  },
});

export const getButtonStyle = () => ({
  margin: "8px 4px 8px 4px",
  textTransform: "none",
  marginBottom: "64px",
});

export const StyledTextArea = React.forwardRef<HTMLDivElement, BenefitsProps>(
  ({ title, text, icon: Icon, ...props }, ref) => {
    return (
      <Box
        sx={{
          padding: "16px",
          width: "33%",
          "> svg": { height: "72px", width: "72px" },
          "@media(max-width: 390px)": {
            width: "100%",
            textAlign: "center",
          },
        }}
        {...props}
      >
        {Icon}
        <Typography
          variant="h5"
          fontFamily={"kanit"}
          fontWeight={"500"}
          color={"#383838"}
          sx={{
            whiteSpace: "pre-wrap",
            marginBottom: "16px",
            marginTop: "16px",
          }}
        >
          {title}
        </Typography>

        <Typography
          variant="h6"
          fontFamily={"kanit"}
          fontWeight={"300"}
          color={"#383838"}
          sx={{
            whiteSpace: "pre-wrap",
            marginBottom: "16px",
            "@media(max-width: 950px)": {
              fontSize: "18px",
            },
          }}
        >
          {text}
        </Typography>
      </Box>
    );
  }
);

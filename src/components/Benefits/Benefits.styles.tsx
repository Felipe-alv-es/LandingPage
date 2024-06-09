import React from "react";
import { BenefitsProps } from "./Benefits.types";
import { Box, Typography } from "@mui/material";

export const getContainerStyle = () => ({
  justifyContent: "center",
  display: "flex",
  marginBottom: "32px",
  "> div": {
    // background: "coral",
    width: "70%",
  },
});

export const getPageTitleStyle = () => ({
  whiteSpace: "pre-wrap",
  marginBottom: "16px",
  typography: "h3",
  fontFamily: "kanit",
  fontWeight: "500",
  color: "#383838",
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
          sx={{ whiteSpace: "pre-wrap", marginBottom: "16px" }}
        >
          {text}
        </Typography>
      </Box>
    );
  }
);

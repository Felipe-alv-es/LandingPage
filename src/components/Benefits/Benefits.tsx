import { Typography, Box, Button } from "@mui/material";
import React from "react";

const Benefits = () => {
  return (
    <Box sx={{ justifyContent: "center", display: "flex" }}>
      <Box sx={{ width: "70%" }}>
        <Typography
          variant="h3"
          fontFamily={"kanit"}
          fontWeight={"500"}
          color={"#383838"}
          sx={{ whiteSpace: "pre-wrap", marginBottom: "16px" }}
        >
          {"Crie, divulgue e Gerencie \n seus serviços aqui "}
        </Typography>
        <Button
          variant="contained"
          sx={{
            margin: "8px 4px 8px 4px",
            textTransform: "none",
            marginBottom: "64px",
          }}
        >
          Comece agora - É grátis
        </Button>
        <Box sx={{ display: "flex" }}>
          <Box sx={{ padding: "16px 16px 16px 0px" }}>
            <Typography
              variant="h5"
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
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Typography>
          </Box>
          <Box sx={{ padding: "16px" }}>
            <Typography
              variant="h5"
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
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Typography>
          </Box>
          <Box sx={{ padding: "16px" }}>
            <Typography
              variant="h5"
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
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Benefits;

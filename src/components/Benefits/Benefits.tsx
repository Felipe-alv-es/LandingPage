import React from "react";
import { Typography, Box, Button } from "@mui/material";
import { FcMindMap, FcLineChart, FcPositiveDynamic } from "react-icons/fc";
import {
  StyledTextArea,
  getContainerStyle,
  getPageTitleStyle,
  getButtonStyle,
} from "./Benefits.styles.tsx";

const Benefits = () => {
  return (
    <Box sx={getContainerStyle}>
      <Box>
        <Typography sx={getPageTitleStyle}>
          {"Crie, divulgue e Gerencie \n seus serviços aqui "}
        </Typography>
        <Button variant="contained" sx={getButtonStyle}>
          Comece agora - É grátis
        </Button>
        <Box sx={{ display: "flex" }}>
          <StyledTextArea
            title="Desenvolva seus produtos rapidamente"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua."
            icon={<FcMindMap />}
          />
          <StyledTextArea
            title="Desenvolva seus produtos rapidamente"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua."
            icon={<FcLineChart />}
          />
          <StyledTextArea
            title="Desenvolva seus produtos rapidamente"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua."
            icon={<FcPositiveDynamic />}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Benefits;

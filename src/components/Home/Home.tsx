import React from "react";
import { Box, Typography } from "@mui/material";

const Home = () => {
  return (
    <Box sx={{ paddingTop: "70px", background: "black" }}>
      <Typography
        variant="h2"
        fontFamily={"kanit"}
        fontWeight={"500"}
        color={"white"}
      >
        Home
      </Typography>
    </Box>
  );
};

export default Home;

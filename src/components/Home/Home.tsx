import React from "react";
import { Box, Button, Typography } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { homeOptions } from "../../assets/utils/homeOptions.tsx";
import { homeAgencies } from "../../assets/utils/homeAgencies.tsx";
import { EffectCoverflow, Pagination } from "swiper/modules";
import {
  getContainerStyle,
  getTitleStyle,
  getSubtitleStyle,
  getButtonStyle,
  BackgroundStyled,
} from "./Home.styles.tsx";

const Home = () => {
  const params = {
    effect: "coverflow",
    slidesPerView: 3,
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
    pagination: true,
    modules: [EffectCoverflow, Pagination],
    className: "mySwiper",
  };

  const params2 = {
    autoplay: {
      delay: 3000,
    },
    slidesPerView: 5,
    className: "mySwiper",
    loop: true,
  };

  return (
    <Box sx={getContainerStyle}>
      <Box>
        <BackgroundStyled />
        <Typography sx={getTitleStyle}>
          {"Crie, divulgue e Gerencie \n seus serviços aqui "}
        </Typography>
        <Typography sx={getSubtitleStyle()}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
        </Typography>
        <Button variant="contained" sx={getButtonStyle}>
          Comece a divulgar
        </Button>
        <Swiper {...params}>
          {homeOptions.map((item) => (
            <SwiperSlide key={item.title}>
              <Box
                component="img"
                src={item.imageSrc}
                alt={item.imageAlt}
                sx={{
                  width: "100%",
                  borderRadius: "16px",
                }}
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <Typography sx={getSubtitleStyle(true)}>
          {"Confiado por importantes agencias do mundo"}
        </Typography>
        <Swiper {...params2}>
          {homeAgencies.map((item) => (
            <SwiperSlide key={item.title}>
              <Box
                component="img"
                src={item.imageSrc}
                alt={item.imageAlt}
                sx={{
                  width: "100%",
                  borderRadius: "16px",
                  padding: "16px",
                }}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    </Box>
  );
};

export default Home;

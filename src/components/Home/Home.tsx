import React from "react";
import { Box, Button, Typography } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { homeOptions } from "../../assets/utils/homeOptions.tsx";
import { homeAgencies } from "../../assets/utils/homeAgencies.tsx";
import { EffectCoverflow } from "swiper/modules";
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
    modules: [EffectCoverflow],
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
          {"Domine novas habilidades, transforme seu futuro"}
        </Typography>
        <Typography sx={getSubtitleStyle()}>
          {
            "Nossos cursos online em design, programação e fotografia são criados para ajudar você a se destacar no mercado. Aprenda com profissionais experientes, adquira conhecimentos práticos e acelere sua carreira com confiança e criatividade"
          }
        </Typography>
        <Button variant="contained" sx={getButtonStyle}>
          Comece agora
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
          {"Aprenda todas as tecnologias do mercado e destaque-se!"}
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

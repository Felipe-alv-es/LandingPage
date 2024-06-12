import React, { useState } from "react";
import { Box, Button, Icon, Typography } from "@mui/material";
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
  const [width, setWidth] = useState(window.innerWidth);

  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }

  React.useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  const isCellphone = width <= 428;

  const params = {
    effect: isCellphone ? "" : "coverflow",
    centeredSlides: true,
    loop: true,
    slidesPerView: isCellphone ? 1 : 3,
    navigation: true,
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
              <Typography
                sx={{
                  marginTop: "16px",
                  typography: "h5",
                  fontFamily: "kanit",
                  fontWeight: "600",
                  color: "white",
                  "@media(max-width: 390px)": {
                    typography: "h6",
                    fontFamily: "kanit",
                    fontWeight: "600",
                  },
                }}
              >
                {item.title}
              </Typography>
            </SwiperSlide>
          ))}
        </Swiper>
        <Typography sx={getSubtitleStyle(true)}>
          {"Aprenda todas as tecnologias do mercado e destaque-se!"}
        </Typography>
        <Swiper {...params2}>
          {homeAgencies.map((item) => (
            <SwiperSlide key={item.title}>
              <Icon
                sx={{
                  width: "50px",
                  height: "50px",
                  "> svg": { width: "50px", height: "50px" },
                  "@media(max-width: 950px)": {
                    "> svg": { width: "40px", height: "40px" },
                  },
                }}
              >
                {item.imageSrc}
              </Icon>
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    </Box>
  );
};

export default Home;

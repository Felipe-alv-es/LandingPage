import React from "react";
import { Box, Button, Typography } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { homeOptions } from "../../assets/utils/homeOptions.tsx";
import { homeAgencies } from "../../assets/utils/homeAgencies.tsx";
import { EffectCoverflow, Pagination } from "swiper/modules";

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
    <Box
      sx={{
        background: "black",
        width: "100%",
        justifyContent: "center",
        display: "flex",
      }}
    >
      <Box
        sx={{
          paddingTop: "200px",
          background: "black",
          width: "70%",
          textAlign: "center",
          padding: "10% 10% 2% 10%",
          position: "relative",
        }}
      >
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
            right: "42.5%",
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
        <Typography
          variant="h2"
          fontFamily={"kanit"}
          fontWeight={"500"}
          color={"white"}
          sx={{ whiteSpace: "pre-wrap", marginBottom: "16px" }}
        >
          {"Crie, divulgue e Gerencie \n seus serviços aqui "}
        </Typography>
        <Typography
          variant="h6"
          fontFamily={"kanit"}
          fontWeight={"300"}
          color={"white"}
          sx={{ whiteSpace: "pre-wrap", marginBottom: "16px" }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
        </Typography>
        <Button
          variant="contained"
          sx={{ textTransform: "none", height: "48px", marginBottom: "32px" }}
        >
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
        <Typography
          variant="h6"
          fontFamily={"kanit"}
          fontWeight={"500"}
          color={"white"}
          sx={{
            whiteSpace: "pre-wrap",
            marginTop: "72px",
          }}
        >
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

import React from "react";
import { Box, Button } from "@mui/material";
import logo from "../../assets/images/FelitLogo.png";
import { HiMiniChevronDown } from "react-icons/hi2";

const Navbar = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        background: "black",
        height: "64px",
        width: "100%",
        position: "fixed",
        boxShadow: "1px 1px 1px  #555555",
        zIndex: 2,
      }}
    >
      <Box
        sx={{
          height: "64px",
          display: "flex",
          position: "fixed",
          width: "70%",
          justifyContent: "space-between",
        }}
      >
        <Box
          sx={{
            display: "flex",
          }}
        >
          <Box
            component="img"
            src={logo}
            alt="Enterprise Logo Image"
            sx={{ marginRight: "16px" }}
          />
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              "> ul": {
                listStyle: "none",
                display: "flex",
                "> div": {
                  display: "flex",
                  alignItems: "center",
                  marginRight: "20px",
                  "> li": {
                    fontSize: "16px",
                    fontFamily: "kanit",
                    marginRight: "4px",
                    fontWeight: "300",
                    color: "#FFFFF7",
                  },
                  "> svg": {
                    color: "#FFFFF7",
                  },
                },
              },
            }}
          >
            <ul>
              <Box>
                <li>Produto</li>
                <HiMiniChevronDown />
              </Box>
              <Box>
                <li>Solução</li>
                <HiMiniChevronDown />
              </Box>
              <Box>
                <li>Recursos</li>
                <HiMiniChevronDown />
              </Box>
              <Box>
                <li>Empresa</li>
                <HiMiniChevronDown />
              </Box>
              <Box>
                <li>Preço</li>
                <HiMiniChevronDown />
              </Box>
            </ul>
          </Box>
        </Box>
        <Box sx={{ display: "flex" }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              height: "100%",
              "> ul": {
                listStyle: "none",
                display: "flex",
                "> li": {
                  fontSize: "16px",
                  fontFamily: "kanit",
                  marginRight: "20px",
                  fontWeight: "300",
                  color: "#FFFFF7",
                },
              },
            }}
          >
            <ul>
              <li>Login</li>
              <li>Compre Conosco</li>
            </ul>
          </Box>
          <Button
            variant="contained"
            sx={{ margin: "8px 4px 8px 4px", textTransform: "none" }}
          >
            Comece agora - É grátis
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Navbar;

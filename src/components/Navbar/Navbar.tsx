import React from "react";
import { Box, Button } from "@mui/material";
import logo from "../../assets/images/FelitLogo.png";

const Navbar = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        background: "black",
        height: "7%",
        width: "100%",
        position: "fixed",
        boxShadow: "1px 1px 1px  #555555",
      }}
    >
      <Box
        sx={{
          height: "7%",
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
                "> li": {
                  fontSize: "18px",
                  fontFamily: "kanit",
                  marginRight: "16px",
                  fontWeight: "300",
                  color: "#FFFFF7",
                },
              },
            }}
          >
            <ul>
              <li>Produto</li>
              <li>Solução</li>
              <li>Recursos</li>
              <li>Empresa</li>
              <li>Preço</li>
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
                  fontSize: "18px",
                  fontFamily: "kanit",
                  marginRight: "16px",
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
          <Button variant="contained" sx={{ margin: "8px 4px 8px 4px" }}>
            Comece agora - É grátis
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Navbar;

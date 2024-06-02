import React from "react";
import { Box, Button } from "@mui/material";
//@ts-ignore
import logo from "../../assets/images/FelitLogo.png";
import { HiMiniChevronDown } from "react-icons/hi2";
import {
  getContainerStyle,
  getMenuStyle,
  getSecondMenuStyle,
  getButtonStyle,
} from "./Navbar.styles.ts";

const Navbar = () => {
  const menuItems = ["Produto", "Solução", "Recursos", "Empresa", "Preço"];

  return (
    <Box sx={getContainerStyle}>
      <Box>
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
          <Box sx={getMenuStyle}>
            <ul>
              {menuItems.map((item) => (
                <Box>
                  <li>{item}</li>
                  <HiMiniChevronDown />
                </Box>
              ))}
            </ul>
          </Box>
        </Box>
        <Box sx={{ display: "flex" }}>
          <Box sx={getSecondMenuStyle}>
            <ul>
              <li>Login</li>
              <li>Compre Conosco</li>
            </ul>
          </Box>
          <Button variant="contained" sx={getButtonStyle}>
            Comece agora - É grátis
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Navbar;

import React, { useState } from "react";
import { Box, Button, Divider, Drawer, IconButton } from "@mui/material";
//@ts-ignore
import logo from "../../assets/images/FelitLogo.png";
import { HiMiniChevronDown } from "react-icons/hi2";
import {
  getContainerStyle,
  getMenuStyle,
  getSecondMenuStyle,
  getButtonStyle,
  getDrawerMenuStyle,
} from "./Navbar.styles.ts";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";

const Navbar = () => {
  const menuItems = [
    "Programação",
    "Design",
    "Sobre Nós",
    "Eventos",
    "Depoimentos",
  ];

  const [isOpen, setIsOpen] = useState(false);
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

  const isMobile = width <= 950;

  React.useEffect(() => {
    if (isMobile) {
      const style = document.createElement("style");
      style.innerHTML = `
        body::-webkit-scrollbar {
          display: none;
        }
      `;
      document.head.appendChild(style);

      return () => {
        document.head.removeChild(style);
      };
    }
  }, [isMobile]);

  return (
    <Box sx={getContainerStyle}>
      <Box>
        {isMobile ? (
          <>
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
            </Box>
            <Box sx={{ display: "flex" }}>
              <Box sx={getSecondMenuStyle}>
                <ul>
                  <li>Veja nossos planos</li>
                </ul>
              </Box>
              <IconButton
                size="large"
                onClick={() => setIsOpen(isOpen ? false : true)}
              >
                {isOpen ? (
                  <IoClose color="white" />
                ) : (
                  <GiHamburgerMenu color="white" />
                )}
              </IconButton>
            </Box>
            <Drawer
              open={isOpen}
              anchor="top"
              onClose={() => setIsOpen(false)}
              sx={getDrawerMenuStyle}
            >
              <Box>
                <ul>
                  {menuItems.map((item) => (
                    <>
                      <Box>
                        <li>{item}</li>
                        <HiMiniChevronDown />
                      </Box>
                      <Divider />
                    </>
                  ))}
                </ul>
              </Box>
              <Divider />
              <Box sx={{ display: "flex" }}>
                <Button variant="outlined" fullWidth sx={getButtonStyle}>
                  Login
                </Button>
                <Button variant="outlined" fullWidth sx={getButtonStyle}>
                  Conheça nossos planos
                </Button>
              </Box>
              <Button variant="contained" sx={getButtonStyle}>
                Comece agora
              </Button>
            </Drawer>
          </>
        ) : (
          <>
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
                  <li>Veja nossos planos</li>
                </ul>
              </Box>
              <Button variant="contained" sx={getButtonStyle}>
                Comece agora
              </Button>
            </Box>
          </>
        )}
      </Box>
    </Box>
  );
};

export default Navbar;

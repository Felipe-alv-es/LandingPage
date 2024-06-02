import React from "react";
import { Box, Button, Divider, Paper, Typography } from "@mui/material";
import {
  getButtonStyle,
  getContainerStyle,
  getPageCategoryStyle,
  getPageTitleStyle,
  getPaperStyle,
  getPlanNameStyle,
  getPlanPriceStyle,
  getPlanDescripStyle,
} from "./Plans.styles.ts";

const Plans = () => {
  return (
    <Box sx={getContainerStyle}>
      <Box>
        <Box sx={{ width: "32%" }}>
          <Typography sx={getPageCategoryStyle}>Preços</Typography>
          <Typography sx={getPageTitleStyle}>
            {"Crie, divulgue e Gerencie \nseus serviços \naqui "}
          </Typography>
        </Box>
        <Paper sx={getPaperStyle}>
          <Typography sx={getPlanNameStyle}>Plano Basico</Typography>
          <Typography sx={getPlanPriceStyle}>{"R$32/mes"}</Typography>
          <Typography sx={{ fontSize: "12px" }}>
            Descontos para planos anuais
          </Typography>
          <Typography sx={getPlanDescripStyle}>
            Destinado para desenvolvedores Solo ou times pequenos
          </Typography>
          <Divider />
          <Typography>Até 3 pessoas em sua equipe</Typography>
          <Divider />
          <Typography>Registro de domínio</Typography>
          <Divider />
          <Typography>Acesso completo ao RPD</Typography>
          <Divider />
          <Typography>Acesso gratis ao "Client Workspace"</Typography>
          <Divider />
          <Typography>Permissões basicas aos usuários</Typography>
          <Button variant="contained" sx={getButtonStyle}>
            Comece agora - É grátis
          </Button>
        </Paper>
        <Paper sx={getPaperStyle}>
          <Typography sx={getPlanNameStyle}>Plano Premium</Typography>
          <Typography sx={getPlanPriceStyle}>{"R$64/mes"}</Typography>
          <Typography sx={{ fontSize: "12px" }}>
            Descontos para planos anuais
          </Typography>
          <Typography sx={getPlanDescripStyle}>
            Destinado para equipes de desenvolvedores e empresas
          </Typography>
          <Divider />
          <Typography>Até 15 pessoas em sua equipe</Typography>
          <Divider />
          <Typography>Registro de domínio</Typography>
          <Divider />
          <Typography>Acesso completo ao RPD</Typography>
          <Divider />
          <Typography>Acesso gratis ao "Enterprise Workspace"</Typography>
          <Divider />
          <Typography>Permissões total aos usuários</Typography>
          <Button variant="contained" sx={getButtonStyle}>
            Comece agora - É grátis
          </Button>
        </Paper>
      </Box>
    </Box>
  );
};

export default Plans;

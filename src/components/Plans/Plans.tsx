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
            {"Escolha a Melhor Opção para Você"}
          </Typography>
        </Box>
        <Paper sx={getPaperStyle}>
          <Typography sx={getPlanNameStyle}>Plano Basico</Typography>
          <Typography sx={getPlanPriceStyle}>{"R$49,90/mes"}</Typography>
          <Typography sx={{ fontSize: "12px", marginBottom: "16px" }}>
            Descontos para planos anuais
          </Typography>
          <Typography sx={getPlanDescripStyle}>
            O plano ideal para quem está começando sua jornada de aprendizado.
            Obtenha acesso a conteúdos essenciais e desenvolva suas habilidades
            fundamentais em design, programação e fotografia
          </Typography>
          <Divider />
          <Typography>Acesso a todos os cursos básicos</Typography>
          <Divider />
          <Typography>Certificados de conclusão</Typography>
          <Divider />
          <Typography>Suporte via e-mail</Typography>
          <Divider />
          <Typography>
            Acesso vitalício aos materiais dos cursos concluídos
          </Typography>
          <Divider />
          <Typography>Comunidade de alunos</Typography>
          <Button variant="contained" sx={getButtonStyle}>
            Comece agora
          </Button>
        </Paper>
        <Paper sx={getPaperStyle}>
          <Typography sx={getPlanNameStyle}>Plano Premium</Typography>
          <Typography sx={getPlanPriceStyle}>{"R$99,90/mes"}</Typography>
          <Typography sx={{ fontSize: "12px", marginBottom: "16px" }}>
            Descontos para planos anuais
          </Typography>
          <Typography sx={getPlanDescripStyle}>
            Para aqueles que desejam uma experiência de aprendizado mais
            completa e imersiva. Aprofunde seus conhecimentos com conteúdos
            avançados e benefícios exclusivos.
          </Typography>
          <Divider />
          <Typography>
            Acesso a todos os cursos (básicos e avançados)
          </Typography>
          <Divider />
          <Typography>Mentoria personalizada com instrutores</Typography>
          <Divider />
          <Typography>Suporte prioritário via e-mail e chat ao vivo</Typography>
          <Divider />
          <Typography>
            Participação em webinars, workshops e sessões ao vivo
          </Typography>
          <Divider />
          <Typography>Acesso a projetos práticos e estudos de caso</Typography>
          <Button variant="contained" sx={getButtonStyle}>
            Comece agora
          </Button>
        </Paper>
      </Box>
    </Box>
  );
};

export default Plans;

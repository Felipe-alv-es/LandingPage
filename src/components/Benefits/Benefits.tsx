import React from "react";
import { Typography, Box, Button } from "@mui/material";
import { FcMindMap, FcDiploma1, FcGraduationCap } from "react-icons/fc";
import {
  StyledTextArea,
  getContainerStyle,
  getPageTitleStyle,
  getButtonStyle,
} from "./Benefits.styles.tsx";

const Benefits = () => {
  return (
    <Box sx={getContainerStyle}>
      <Box>
        <Typography sx={getPageTitleStyle}>
          {"Descubra os Benefícios dos \nNossos Cursos Online"}
        </Typography>
        <Button variant="contained" sx={getButtonStyle}>
          Comece agora - É grátis
        </Button>
        <Box sx={{ display: "flex" }}>
          <StyledTextArea
            title="Aprenda com Projetos Reais"
            text="Adquira experiência prática desenvolvendo projetos reais durante os cursos. Nossos currículos são projetados para simular situações do mundo real, permitindo que você aplique os conceitos aprendidos diretamente em desafios práticos. Dessa forma, você estará melhor preparado para enfrentar os desafios do mercado de trabalho."
            icon={<FcMindMap />}
          />
          <StyledTextArea
            title="Certificação Profissional"
            text="Receba certificados reconhecidos pelo mercado ao concluir nossos cursos. Cada certificação valida suas habilidades e conhecimentos, aumentando sua credibilidade profissional e destacando seu currículo para potenciais empregadores e clientes."
            icon={<FcDiploma1 />}
          />
          <StyledTextArea
            title="Acesso Vitalício aos Conteúdos"
            text="Tenha acesso vitalício aos materiais dos cursos que você concluir. Com essa vantagem, você pode revisitar os conteúdos sempre que precisar, garantindo que seu conhecimento permaneça atualizado e permitindo que você revise informações importantes sempre que desejar."
            icon={<FcGraduationCap />}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Benefits;

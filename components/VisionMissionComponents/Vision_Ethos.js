import React from "react";
import { Container } from "@mui/system";
import styles from "@/styles/Home.module.css";
import Typography from "@mui/material/Typography";
import { VisionEthos } from "../../utils/text_utils/textUtils";
import { styled } from "@mui/material/styles";

const ContainerWrapper = styled("Container")(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    width: "100%",
    margin:"0",
    padding:"50px"
  },
  [theme.breakpoints.up("md")]: {
    width: "100%",
    fontSize: "40px",
  },
  [theme.breakpoints.up("lg")]: {
    width: "50%",
    fontSize: "60px",
  },
}));
const TypographyWrapper = styled("Typography")(({ theme }) => ({
    [theme.breakpoints.down("md")]: {
      fontSize: "40px",
    },
    [theme.breakpoints.up("md")]: {
      fontSize: "40px",
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: "60px",
    },
  }));
const Vision_Ethos = () => {
  return (
    <Container
      maxWidth="false"
      className={styles.vission}
      sx={{
        minHeight: "34vh",
        background: "rgba(89, 89, 95, 0.8)",
        color: "white",
        
      }}
    >
      <ContainerWrapper sx={{ padding:"30px", margin:"auto",display: "flex",
        flexDirection:"column",
        justifyContent: "flex-end", minHeight: "34vh",}}>
        <TypographyWrapper
          variant="h1"
          gutterBottom
          sx={{
            fontSize: "60px",
            fontWeight: "400",
            lineHeight: "1em",
            letterSpacing: "-0.5px",
          }}
        >
          {VisionEthos.Vision_and_Ethos}
        </TypographyWrapper>
        <Typography
          variant="h3"
          gutterBottom
          sx={{
              fontSize:"20px",
            fontWeight: "300",
            lineHeight: "1em",
            letterSpacing: "-0.5px",
          }}
        >
          {VisionEthos.values_and_objectives}
        </Typography>
      </ContainerWrapper>
    </Container>
  );
};

export default Vision_Ethos;

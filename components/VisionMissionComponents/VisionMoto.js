import React from "react";
import { Container, Box } from "@mui/system";
import styles from "@/styles/Home.module.css";
import Typography from "@mui/material/Typography";
import { VisionMotoUtils } from "../../utils/text_utils/textUtils";
import { styled } from "@mui/material/styles";
import CardMedia from "@mui/material/CardMedia";

const ContainerWrapper = styled("Container")(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
    width: "100%",
    padding:"1rem"
  },
  [theme.breakpoints.up("md")]: {
    flexDirection: "row",
    width: "100%",
  },
  [theme.breakpoints.up("lg")]: {
    flexDirection: "row",
    width: "50%",
  },
}));
const TypographyWrapper = styled("Container")(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    width: "100%",
  },
  [theme.breakpoints.up("md")]: {
    width: "100%",
  },
  [theme.breakpoints.up("lg")]: {
    width: "50%",
  },
}));
const VisionMoto = () => {
  return (
    <Container
      maxWidth="false"
      sx={{ width: "100%", height: "100%", display:"flex", justifyContent:"center", alignItems:"center"}}
    >
      <ContainerWrapper sx={{ width: "50%", margin: "auto", display:"flex", justifyContent:"center", alignItems:"center", padding:"5rem 0" }}>
      <ContainerWrapper
          sx={{
            width: "50%",
            margin: "auto",
            color:"rgb(68, 68, 68)",
          }}
        >
          <CardMedia
            component="img"
            height="194"
            image="https://www.shalominternationalschool.com/wp-content/uploads/2022/10/Vision-170x300.png"
            sx={{
              maxWidth: "70%",
              height: "auto",
              margin:"2rem",
              boxShadow: "-5px 0px 6px 0px rgba(0,0,0,0.2)",
            }}
          />
          <Typography
            variant="h1"
            gutterBottom
            sx={{
              fontSize: "20px",
              fontWeight: "700",
              lineHeight: "1.4em",
              letterSpacing: "-0.5px",
            }}
          >
            {VisionMotoUtils.Our_Moto_qout}
          </Typography>
          <Typography
            variant="h1"
            gutterBottom
            sx={{
              fontSize: "20px",
              fontWeight: "700",
              lineHeight: "1.16em",
              letterSpacing: "-0.5px",
            }}
          >
            {VisionMotoUtils.Ayush_Thorat}
          </Typography>
          <Typography
            variant="h1"
            gutterBottom
            sx={{
                fontSize: "13px",
                fontWeight: "400",
                lineHeight: "1.16em",
                letterSpacing: "-0.5px",
                color: "rgba(0,0,0,0.54)",
            }}
          >
            {VisionMotoUtils.Grade_XI}
          </Typography>
        </ContainerWrapper>
        <TypographyWrapper
          sx={{
            width: "50%",
            margin: "0",
            padding: "0",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            color: "black",
          }}
        >
          <Typography
            variant="h1"
            gutterBottom
            sx={{
              fontSize: "34px",
              fontWeight: "600",
              lineHeight: "1em",
              letterSpacing: "-0.5px",
              color: "#203b6a",
            }}
          >
            {VisionMotoUtils.Our_Moto}
          </Typography>
          <Typography
            variant="h3"
            gutterBottom
            sx={{
              fontSize: "20px",
              fontWeight: "300",
              lineHeight: "1.4em",
              letterSpacing: "-0.5px",

            }}
          >
            {VisionMotoUtils.Our_motto_is}
            <Typography
            variant="h3"
            gutterBottom
            sx={{
              fontSize: "20px",
              fontWeight: "300",
              lineHeight: "1.4em",
              paddingBottom: "1rem",
            //   letterSpacing: "-0.5px",
              
            }}
          >
            {VisionMotoUtils.We_guide_our_students}
          </Typography>
          </Typography>
          <Typography
            variant="h3"
            gutterBottom
            sx={{
              fontSize: "20px",
              fontWeight: "300",
              lineHeight: "1.4em",
              paddingBottom: "1rem",
              letterSpacing: "-0.5px",

            }}
          >
            {VisionMotoUtils.We_envision_empowering}
          </Typography>
        </TypographyWrapper>
        
      </ContainerWrapper>
    </Container>
  );
};

export default VisionMoto;

import React from "react";
import { Container } from "@mui/system";
import styles from "@/styles/Home.module.css";
import Typography from "@mui/material/Typography";
import { ValuesUtils } from "../../utils/text_utils/textUtils";
import { styled } from "@mui/material/styles";
import CardMedia from "@mui/material/CardMedia";

const ContainerWrapper = styled("Container")(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
    width: "100%",
    padding:"1rem",
    margin:"auto"
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
    width:"100%"
  },
  [theme.breakpoints.up("md")]: {
    width:"100%"
  }, 
  [theme.breakpoints.up("lg")]: {
    width:"50%"
  },
}));

const Values = () => {
  return (
    <ContainerWrapper
      maxWidth="false"
      className={styles.Cardvission}
      sx={{
        display: "flex",
        alignItem: "center",
        justifyContent: "center",
        margin: "auto",
        minHeight: "50vh",
        width: "50%",
        padding: "2rem",
      }}
    >
      <ContainerWrapper
        sx={{
          width: "50%",
          display: "flex",
          alignItem: "center",
          justifyContent: "center",
          margin: "auto",
        }}
      >
        <CardMedia
          component="img"
          height="194"
          image="https://www.shalominternationalschool.com/wp-content/uploads/2022/04/Boarding-School-Panchgani.jpg"
          sx={{
            maxWidth: "100%",
            height: "auto",
            boxShadow: "-5px 0px 6px 0px rgba(0,0,0,0.2)",
          }}
        />
      </ContainerWrapper>
      <TypographyWrapper
        sx={{
          margin: "0",
          padding: "2rem",
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
            lineHeight: "1.4em",
            letterSpacing: "-0.5px",
            color: "#203b6a",
          }}
        >
          {ValuesUtils.Values_at_Shalom_School}
        </Typography>
        <Typography
          variant="h3"
          gutterBottom
          sx={{
            fontSize: "20px",
            fontWeight: "300",
            lineHeight: "1.2em",
            letterSpacing: "-0.5px",
            paddingBottom: "1rem",
          }}
        >
          {ValuesUtils.Empowering_our_students}
        </Typography>
        <Typography
          variant="h3"
          gutterBottom
          sx={{
            fontSize: "20px",
            fontWeight: "300",
            lineHeight: "1.2em",
            letterSpacing: "-0.5px",
          }}
        >
          {ValuesUtils.We_enable_our_students_to_understand}
        </Typography>
      </TypographyWrapper>
    </ContainerWrapper>
  );
};

export default Values;

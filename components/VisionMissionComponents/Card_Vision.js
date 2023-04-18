import React from "react";
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
const Card_Vision = () => {
  return (
    <ContainerWrapper
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "50%",
        margin: "auto",
      }}
    >
      <CardMedia
        component="img"
        height="194"
        image="http://www.shalominternationalschool.com/wp-content/uploads/2022/04/5.png"
        alt="Paella dish"
        sx={{
          margin: "1rem",
          width: "100%",
        }}
      />

      <CardMedia
        component="img"
        height="194"
        image="https://www.shalominternationalschool.com/wp-content/uploads/2022/04/Classrooms-scaled.jpg"
        alt="Paella dish"
        sx={{ margin: "1rem", width: "100%" }}
      />
      <CardMedia
        component="img"
        height="194"
        image="https://www.shalominternationalschool.com/wp-content/uploads/2022/10/jonny-clow-509798-unsplash.jpg"
        alt="Paella dish"
        sx={{ margin: "1rem", width: "100%" }}
      />
    </ContainerWrapper>
  ); 
};

export default Card_Vision;

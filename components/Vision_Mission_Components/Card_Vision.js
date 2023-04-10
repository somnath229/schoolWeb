import React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import { Container } from "@mui/system";

const Card_Vision = () => {
  return (
    <Container minWidth="md" sx= {{display:"flex", alignItems:"center", justifyContent:"center"}}>
      <CardMedia
        component="img"
        height="194"
        image="http://www.shalominternationalschool.com/wp-content/uploads/2022/04/5.png"
        alt="Paella dish"
        sx={{margin:"1rem", width:"50%"}}
      />
      
      <CardMedia
        component="img"
        height="194"
        image="https://www.shalominternationalschool.com/wp-content/uploads/2022/04/Classrooms-scaled.jpg"
        alt="Paella dish"
        sx={{margin:"1rem", width:"50%"}}
      />
      <CardMedia
        component="img"
        height="194"
        image="https://www.shalominternationalschool.com/wp-content/uploads/2022/10/jonny-clow-509798-unsplash.jpg"
        alt="Paella dish"
        sx={{margin:"1rem"}}
      />
    </Container>
  );
};

export default Card_Vision;

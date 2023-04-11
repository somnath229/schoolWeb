import React from "react";
import { Container, Box } from "@mui/system";
import styles from "@/styles/Home.module.css";
import Typography from "@mui/material/Typography";
import { VisionUtils } from "../../utils/text_utils/textUtils";
import { styled } from "@mui/material/styles";
import CardMedia from "@mui/material/CardMedia";

const Vision = () => {
  return (
    <Container
      maxWidth="false"
      sx={{ width: "100%", background: "#edeaea", height: "100%", display:"flex", justifyContent:"center", alignItems:"center"}}
    >
      <Box sx={{ width: "50%", margin: "auto", display:"flex", justifyContent:"center", alignItems:"center", padding:"5rem 0" }}>
        <Container
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
            {VisionUtils.Our_Vision}
          </Typography>
          <Typography
            variant="h3"
            gutterBottom
            sx={{
              fontSize: "20px",
              fontWeight: "300",
              lineHeight: "1.4em",
              letterSpacing: "-0.5px",
              paddingBottom: "1rem",
            }}
          >
            {VisionUtils.We_strive_to_develop_a_balanced_emotional_character}
          </Typography>
        </Container>
        <Container
          sx={{
            width: "50%",
            margin: "auto",
          }}
        >
          <CardMedia
            component="img"
            height="194"
            image="https://www.shalominternationalschool.com/wp-content/uploads/2022/10/jon-tyson-762619-unsplash.jpg"
            sx={{
              maxWidth: "100%",
              height: "auto",
              boxShadow: "-5px 0px 6px 0px rgba(0,0,0,0.2)",
            }}
          />
        </Container>
      </Box>
    </Container>
  );
};

export default Vision;

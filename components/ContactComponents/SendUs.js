import React from "react";
import { Container, Box } from "@mui/system";
import styles from "@/styles/Home.module.css";
import Typography from "@mui/material/Typography";
import { contactUsUtils } from "../../utils/text_utils/textUtils";
import { styled } from "@mui/material/styles";
import CardMedia from "@mui/material/CardMedia";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";


const BoxColor = styled("Box")(({ theme }) => ({
  height: "40px",
  width: "40px",
  backgroundColor: "#bbb",
  borderRadius: "50%",
  display: "inline-block",
}));

const SendUs = () => {
  return (
    <Container
      maxWidth="false"
      className={styles.send}
      sx={{
        minHeight: "36vh",
        background: "rgba(14, 20, 56, 0.7)",
        color: "white",
      }}
    >
      <Container sx={{ padding: "5rem" }}>
        <Typography
          variant="h1"
          gutterBottom
          sx={{
            fontSize: "48px",
            fontWeight: "400",
            lineHeight: "1em",
            letterSpacing: "-0.5px",
            color: "white",
            textAlign: "center",
          }}
        >
          {contactUsUtils.Send_Us_A_Message}
        </Typography>
        <Typography
          variant="h1"
          gutterBottom
          sx={{
            fontSize: "20px",
            fontWeight: "300",
            lineHeight: "1.4em",
            letterSpacing: "-0.5px",
            color: "white",
            textAlign: "center",
          }}
        >
          {contactUsUtils.Fill_up_the_form}
        </Typography>
        <Box sx={{ width: "50%", margin: "auto", textAlign: "center" }}>
          <BoxColor
            sx={{ backgroundColor: "#336", margin: ".5rem" }}
          ></BoxColor>
          <BoxColor
            sx={{ backgroundColor: "#1da1f2", margin: ".5rem" }}
          ></BoxColor>
          <BoxColor
            sx={{ backgroundColor: "#0077b5", margin: ".5rem" }}
          ></BoxColor>
          <BoxColor
            sx={{ backgroundColor: "#cd201f", margin: ".5rem" }}
          ></BoxColor>
          <BoxColor
            sx={{ backgroundColor: "#dd4b39", margin: ".5rem" }}
          ></BoxColor>
          <BoxColor
            sx={{ backgroundColor: "#262626", margin: ".5rem" }}
          ></BoxColor>
        </Box>
      </Container>
    </Container>
  );
};

export default SendUs;

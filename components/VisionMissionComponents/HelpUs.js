import React from "react";
import { Container, Box } from "@mui/system";
import styles from "@/styles/Home.module.css";
import Typography from "@mui/material/Typography";
import { HelpUtils } from "../../utils/text_utils/textUtils";
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

const HelpUs = () => {
  return (
    <Container
      maxWidth="false"
      className={styles.help}
      sx={{
        minHeight: "36vh",
        background: "rgba(89, 89, 95, 0.8)",
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
          {HelpUtils.Help_Us_Improve}
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
          {HelpUtils.Your_valuable}
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
          {HelpUtils.If_you_have_a_suggestion}
        </Typography>
        <Box sx={{width:"50%", margin:"auto", textAlign:"center"}}>
          <BoxColor sx={{backgroundColor:"#336", margin:".5rem"}}></BoxColor>
          <BoxColor sx={{backgroundColor:"#1da1f2", margin:".5rem"}}></BoxColor>
          <BoxColor sx={{backgroundColor:"#0077b5", margin:".5rem"}}></BoxColor>
          <BoxColor sx={{backgroundColor:"#cd201f", margin:".5rem"}}></BoxColor>
          <BoxColor sx={{backgroundColor:"#dd4b39", margin:".5rem"}}></BoxColor>
          <BoxColor sx={{backgroundColor:"#262626", margin:".5rem"}}></BoxColor>
        </Box>
      </Container>
    </Container>
  );
};

export default HelpUs;

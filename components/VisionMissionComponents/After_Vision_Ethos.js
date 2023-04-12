import React from "react";
import { Container } from "@mui/system";
import styles from "@/styles/Home.module.css";
import Typography from "@mui/material/Typography";
import { VisionEthos } from "../../utils/text_utils/textUtils";
import { styled } from "@mui/material/styles";

// const TypographyWrapper = styled("Typography")(({ theme }) => ({
//     [theme.breakpoints.down("md")]: {
//         width:"100%",
//     },
//     [theme.breakpoints.up("md")]: {
//         width:"75%", 
//     },
//     [theme.breakpoints.up("lg")]: {
//         width:"75%",
//     },
//   }));  
const After_Vision_Ethos = () => {
  return (
    <Container maxWidth="lg" sx = {{padding:"2rem"}}>
        <Typography
          variant="h1"
          gutterBottom
          sx={{
              width:"75%",
            fontSize: "24px",
            fontWeight: "300",
            lineHeight: "1.4em",
            letterSpacing: "-0.5px",
            textAlign:"center",
            margin:"auto"
          }}
        >
          {VisionEthos.Education_at_Shalom_International_School_is_about_self_confidence}
        </Typography>
    </Container>
  )
}

export default After_Vision_Ethos
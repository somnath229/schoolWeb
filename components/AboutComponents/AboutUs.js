import * as React from "react";
import styles from "@/styles/Home.module.css";
import Box from "@mui/material/Box";
import { AboutUsUtils } from "../../utils/text_utils/textUtils";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";

const AboutUs = () => {
  return (
    <Box className={styles.main}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "flex-start",
          flexDirection: "column",
          width: "100%",
          height: "62vh",
          textAlign: "center",
          color: "white",
          paddingBottom: "3rem",
          backgroundPosition: "center",
          backgroundSize: "cover",
          background: "rgba(14, 20, 56, 0.7)",
          textAlign:"left"
        }}
      >
        <Typography
          variant="h4"
          gutterBottom
          sx={{
            fontWeight: "400",
            fontSize: "60px",
            lineHeight: ".8em",
            letterSpacing: "-0.15px",
            padding:"0 2rem",
          }} 
        >
          {AboutUsUtils.About_Us} 
        </Typography>
        <Typography
          variant="h4"
          gutterBottom
          sx={{
            fontWeight: "300",
            fontSize: "20px",
            lineHeight: "1.4em", 
            letterSpacing: "-0.15px",
            padding:"0 2rem",
          }}
        > 
          {AboutUsUtils.Learn_more_about_our_school}
        </Typography>
      </Box>
    </Box>
  );
};

export default AboutUs;

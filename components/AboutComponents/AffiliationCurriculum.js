import React from "react";
import { Container } from "@mui/system";
import { AffiliationCurriculumUtils } from "../../utils/text_utils/textUtils";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";

const AffiliationCurriculum = () => {
  return (
    <Container sx={{width:"50%",margin:"auto", padding:"3rem"}}>
      <Typography
        variant="h4"
        gutterBottom
        sx={{
          fontWeight: "600",
          fontSize: "2rem",
          lineHeight: "1em",
          letterSpacing: "-0.15px",
          color:"#8b0f0f"
        }}
      >
        {AffiliationCurriculumUtils.Affiliation}
      </Typography>
      <Typography
        variant="h4"
        gutterBottom
        sx={{
          fontWeight: "normal",
          fontSize: "20px",
          lineHeight: "1.2em",
          letterSpacing: "-0.15px",
          color:"#222222",
          paddingBottom:"2rem"
        }}
      >
        {AffiliationCurriculumUtils.The_School_follows}
      </Typography>
      <Typography
        variant="h4"
        gutterBottom
        sx={{
          fontWeight: "normal",
          fontSize: "20px",
          lineHeight: "1.2em",
          letterSpacing: "-0.15px",
          color:"#222222"
        }}
      >
        {AffiliationCurriculumUtils.Our_Jr_College}
      </Typography>
    </Container>
  );
};

export default AffiliationCurriculum;

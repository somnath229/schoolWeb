import React from "react";
import { Container } from "@mui/system";
import { AffiliationCurriculumUtils } from "../../utils/text_utils/textUtils";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";

const ContainerWrapper = styled("Container")(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    width: "100%",
  },
  [theme.breakpoints.up("md")]: {
    width: "75%",
  },
  [theme.breakpoints.up("lg")]: {
    width: "50%",
  },
}));
const AffiliationCurriculum = () => {
  return (
    <Container maxWidth="lg" sx={{ padding: "2rem 1rem" }}>
      <ContainerWrapper>
        <Typography
          variant="h4"
          gutterBottom
          sx={{
            fontWeight: "600",
            fontSize: "2rem",
            lineHeight: "1em",
            letterSpacing: "-0.15px",
            color: "#8b0f0f",
            padding: "1rem",
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
            color: "#222222",
            paddingBottom: "2rem",
            paddingLeft: "1rem",
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
            color: "#222222",
            paddingLeft: "1rem",
          }}
        >
          {AffiliationCurriculumUtils.Our_Jr_College}
        </Typography>
      </ContainerWrapper>
    </Container>
  );
};

export default AffiliationCurriculum;

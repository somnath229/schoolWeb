import * as React from "react";
import styles from "@/styles/Home.module.css";
import Box from "@mui/material/Box";
import { AdmissionBgUtils } from "../../utils/text_utils/textUtils";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";

const TypographyWrapper = styled("Typography")(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    width: "100%",
    minHeight: "100vh",
    flexWrap: "wrap",
    textAlign: "center",
    paddingTop: "5rem",
  },
  [theme.breakpoints.up("md")]: {
    width: "100%",
    flexWrap: "wrap",
    textAlign: "center",
  },
  [theme.breakpoints.up("lg")]: {
    width: "55%",
    flexWrap: "nowrap",
  },
}));
const BoxWrapper = styled("Box")(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    width: "100%",
    flexDirection: "column",
  },
  [theme.breakpoints.up("md")]: {
    width: "100%",
    flexDirection: "row",
  },
  [theme.breakpoints.up("lg")]: {
    width: "100%",
    flexDirection: "row",
  },
}));

const Wrapper = styled("Box")(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    height: "fit-content",
  },
}));

const BtnWrapper = styled("Box")(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    width: "100%",
  },
  [theme.breakpoints.up("md")]: {
    width: "100%",
  },
  [theme.breakpoints.up("lg")]: {
    width: "45%",
  },
}));
const AdmissionBg = () => {
  return (
    <Box maxWidth="false" className={styles.main}>
      <Wrapper
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
          flexDirection: "column",
          width: "100%",
          margin: "auto",
          height: "100vh",
          textAlign: "center",
          color: "white",
          paddingBottom: "3rem",
          backgroundPosition: "center",
          backgroundSize: "cover",
          background: "rgba(0, 0, 0, 0.6)",
        }}
      >
        <TypographyWrapper className={styles.animated}>
          <Typography
            variant="h4"
            gutterBottom
            sx={{
              fontWeight: "700",
              fontSize: "48px",
              lineHeight: "1.1666em",
              letterSpacing: "-0.15px",
            }}
          >
            {AdmissionBgUtils.Admission_Open_for_2023}
          </Typography>
          <Typography
            className={styles.det}
            variant="h2"
            gutterBottom
            sx={{
              color: "#ffffff",
              fontSize: "1.25rem",
              fontWeight: "400",
              lineHeight: "1.4em",
              letterSpacing: "0.15px",
            }}
          >
            {AdmissionBgUtils.Shalom_International_School_offers}
          </Typography>

          <BoxWrapper sx={{ display: "flex", width: "100%" }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "flex-end",
                width: "100%",
              }}
            >
              <BtnWrapper
                variant="contained"
                sx={{
                  borderRadius: "3rem",
                  padding: "1rem",
                  margin: ".5rem",
                  textDecoration: "underline",
                  border: "2px solid white",
                  background: "#720404F2",
                  fontFamily: "Roboto,Helvetica,Arial,sans-serif",
                  "&:hover": { backgroundColor: "#720404F2" },
                }}
              >
                {AdmissionBgUtils.New_Admission}
              </BtnWrapper>
            </Box>
            <Box
              sx={{
                display: "flex",
                width: "100%",
                justifyContent: "flex-start",
              }}
            >
              <BtnWrapper
                variant="outlined"
                sx={{
                  borderRadius: "3rem",
                  padding: "1rem",
                  margin: ".5rem",
                  color: "white",
                  border: "2px solid white",
                  textDecoration: "underline",
                  fontFamily: "Roboto,Helvetica,Arial,sans-serif",
                }}
              >
                {AdmissionBgUtils.Learn_More}
              </BtnWrapper>
            </Box>
          </BoxWrapper>
        </TypographyWrapper>
      </Wrapper>
    </Box>
  );
};

export default AdmissionBg;

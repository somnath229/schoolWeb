import * as React from "react";
import styles from "@/styles/Home.module.css";
import Box from "@mui/material/Box";
import { BelowAdmissionBgUtils } from "../../utils/text_utils/textUtils";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";

const BoxWrapper = styled("Box")(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
  },
  [theme.breakpoints.up("md")]: {
    flexDirection: "row",
  },
  [theme.breakpoints.up("lg")]: {
    flexDirection: "row",
  },
}));
const ImageWrapper = styled("ImageListItem")(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    width: "100%",
    margin: "auto",
    padding: "2rem",
  },
  [theme.breakpoints.up("md")]: {
    width: "63%",
    margin: "auto",
    padding: "4rem 0",
  },
}));
const BelowAdmissionBg = () => {
  return (
    <div>
      <Box maxWidth="false" className={styles.main2}>
        <BoxWrapper
          sx={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            width: "100%",
            color: "black",
            heigth: "100%",
          }}
        >
          <ImageWrapper
            sx={{
              display: "flex",
              alignItem: "center",
              border: "none",
              borderRadius: "0",
              boxShadow: "none",
            }}
          >
            <img
              src={BelowAdmissionBgUtils.imgSrc}
              loading="lazy"
              sx={{
                verticalAlign: "middle",
                display: "inline-block",
                height: "100%",
                maxWidth: "100%",
              }}
            />
          </ImageWrapper>
          <Box
            sx={{ width: "100%", padding: "4.5rem" }}
            className={styles.animated}
          >
            <Typography
              variant="h1"
              gutterBottom
              sx={{
                fontWeight: "700",
                color: "#720404F2",
                fontSize: "34px",
                lineHeight: "1.3em",
                letterSpacing: "-0.15px",
              }}
            >
              {BelowAdmissionBgUtils.A_place_to_learn_grow_together}
            </Typography>
            <Typography
              variant="h3"
              gutterBottom
              sx={{ fontSize: "20px", fontWeight: "400", lineHeight: "1.4em" }}
            >
              {BelowAdmissionBgUtils.Our_Boarding_school_offers}
            </Typography>
          </Box>
        </BoxWrapper>
      </Box>
    </div>
  );
};

export default BelowAdmissionBg;

import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { FacilitytextUtils } from "../../utils/text_utils/textUtils";
import styles from "@/styles/Home.module.css";
import { styled } from "@mui/material/styles";

const ContainerWrapper = styled("Box")(({ theme }) => ({
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
const FB = () => {
  return (
    <Box maxWidth="false"
     className={styles.facilitiesBgDesigne}
     sx={{height:"100%"}}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          width: "100%",
          height: "100%",
          textAlign: "center",
          color: "white",
          padding: "5rem 1rem",
          backgroundPosition: "center",
          backgroundSize: "cover",
          background: "rgba(14, 20, 56, 0.7)",
          textAlign: "left",
        }}
      >
        <ContainerWrapper sx= {{width:"50%"}}>
          <Typography
            variant="h4"
            gutterBottom
            sx={{
              fontWeight: "600",
              fontSize: "3rem",
              lineHeight: "1.2em",
              letterSpacing: "-0.15px",
              padding: "1rem 0",
            }}
          >
            {FacilitytextUtils.FACILITIES_OFFERED}
          </Typography>
          <Typography
            variant="h4"
            gutterBottom
            sx={{
              fontWeight: "300",
              fontSize: "2rem",
              lineHeight: "1.2em",
              letterSpacing: "-0.15px",
            }}
          >
            {FacilitytextUtils.Co_Curricular_activities}
          </Typography>
        </ContainerWrapper>
      </Box>
    </Box>
  );
};

export default FB;

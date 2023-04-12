import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { FacilitytextUtils } from "../../utils/text_utils/textUtils";
import styles from "@/styles/Home.module.css";

const FB = () => {
  return (
    <Box maxWidth="false"
     className={styles.facilitiesBgDesigne}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          width: "100%",
          height: "40vh",
          textAlign: "center",
          color: "white",
          paddingBottom: "3rem",
          backgroundPosition: "center",
          backgroundSize: "cover",
          background: "rgba(14, 20, 56, 0.7)",
          textAlign: "left",
        }}
      >
        <Box sx= {{width:"50%"}}>
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
        </Box>
      </Box>
    </Box>
  );
};

export default FB;

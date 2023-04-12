import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { contactUsUtils } from "../../utils/text_utils/textUtils";
import styles from "@/styles/Home.module.css";
import { Container } from "@mui/system";

const ContactBg = () => {
  return (
    <Box maxWidth="false" className={styles.contactBgDesigne}>
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
          textAlign: "left",
        }}
      >
        <Container sx={{ width: "50%" }}>
          <Typography
            variant="h4"
            gutterBottom
            sx={{
              fontWeight: "400",
              fontSize: "60px",
              lineHeight: ".6em",
              letterSpacing: "-0.5px",
            }}
          >
            {contactUsUtils.Contact_Us}
          </Typography>
          <Typography
            variant="h4"
            gutterBottom
            sx={{
              fontWeight: "300",
              fontSize: "20px",
              lineHeight: "1.4em",
              letterSpacing: "-0.15px",
            }}
          >
            {contactUsUtils.We_love_to_hear_from_you}
          </Typography>
        </Container>
      </Box>
    </Box>
  );
};

export default ContactBg;

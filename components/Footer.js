import React from "react";
import styles from "@/styles/Home.module.css";
import { foot } from "../utils/text_utils/textUtils";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import HeadphonesIcon from "@mui/icons-material/Headphones";
import MedicalServicesIcon from "@mui/icons-material/MedicalServices";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";
import { styled } from "@mui/material/styles";

const ContainerWrapper = styled("Container")(({ theme }) => ({
  padding: theme.spacing(1),
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

const FooterWrapper = styled("Box")(({ theme }) => ({
  padding: theme.spacing(1),
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
    width: "100%",
    textAlign: "center",
  },
  [theme.breakpoints.down("md")]: {
    width: "100%",
  },
  [theme.breakpoints.up("md")]: {
    flexDirection: "row",
  },
  [theme.breakpoints.up("lg")]: {
    flexDirection: "row",
  },
}));

const BoxWrapper = styled("Box")(({ theme }) => ({
  padding: theme.spacing(1),
  [theme.breakpoints.down("md")]: {
    flexWrap: "wrap",
    width: "100%",
    overflow: "hidden",
  },
  [theme.breakpoints.up("md")]: {
    width: "100%",
  },
  [theme.breakpoints.up("lg")]: {
    width: "50%",
  },
}));
const Footer = () => {
  return (
    <Box>
      <Box>
        <Typography
          variant="h5"
          gutterBottom
          sx={{
            color: "white",
            background: "#3A3A3A",
            fontWeight: "300",
            padding: "1.5rem",
            textAlign: "center",
            fontStyle: "italic",
          }}
        >
          {foot.Albert_Einstein}
        </Typography>
      </Box>
      <ContainerWrapper
        // maxWidth="lg"
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "100%",
          padding: "2rem",
          maxWidth: "1200px",
          margin: "auto",
        }}
      >
        <Box
          className={styles.iconPulse}
          sx={{
            textAlign: "center",
          }}
        >
          <HeadphonesIcon sx={{ color: "#720404F2", fontSize: "4rem" }} />{" "}
          <Typography
            variant="h5"
            gutterBottom
            sx={{ fontWeight: "700", fontSize: "1.2rem", color: "#54595F" }}
          >
            {foot.Reception}
          </Typography>
          <Typography
            variant="h5"
            gutterBottom
            sx={{ fontWeight: "700", fontSize: "1.2rem", color: "#8B0F0F" }}
          >
            {foot.Reception_Number}
          </Typography>
        </Box>
        <Box
          className={styles.iconPulse}
          sx={{
            textAlign: "center",
          }}
        >
          <MedicalServicesIcon sx={{ color: "#720404F2", fontSize: "4rem" }} />
          <Typography
            variant="h5"
            gutterBottom
            sx={{ fontWeight: "700", fontSize: "1.2rem", color: "#54595F" }}
          >
            {foot.Student_Emergency}
          </Typography>
          <Typography
            variant="h5"
            gutterBottom
            sx={{ fontWeight: "700", fontSize: "1.2rem", color: "#8B0F0F" }}
          >
            {foot.Student_Emergency_Number}
          </Typography>
        </Box>
        <Box
          className={styles.iconPulse}
          sx={{
            textAlign: "center",
          }}
        >
          <CardGiftcardIcon sx={{ color: "#720404F2", fontSize: "4rem" }} />
          <Typography
            variant="h5"
            gutterBottom
            sx={{ fontWeight: "700", fontSize: "1.2rem", color: "#54595F" }}
          >
            {foot.Admissions}
          </Typography>
          <Typography
            variant="h5"
            gutterBottom
            sx={{ fontWeight: "700", fontSize: "1.2rem", color: "#8B0F0F" }}
          >
            {foot.Admissions_Number}
          </Typography>
        </Box>
      </ContainerWrapper>
      <ContainerWrapper
        sx={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "100%",
          width: "100%",
          flexWrap: "wrap",
          padding: "2rem 0",
        }}
      >
        <BoxWrapper
          className={styles.foot}
          sx={{
            width: "50%",
            height: "100%",
            flexWrap: "wrap",
            padding: "4rem 0",
          }}
        >
          <Typography
            variant="h5"
            gutterBottom
            sx={{
              color: "#720404F2",
              fontWeight: "700",
              fontSize: "2rem",
              marginBottom: "3rem",
              marginLeft: "2rem",
            }}
          >
            {foot.Walk_into_our_campus_at}
          </Typography>

          <Box sx={{ width: "90%", margin: "auto", flexWrap: "wrap" }}>
            <Typography
              variant="h5"
              gutterBottom
              sx={{ fontWeight: "700", fontSize: "1.2rem" }}
            >
              {foot.Walk_into_our_campus_at_Name}
            </Typography>
            <Typography
              variant="h5"
              gutterBottom
              sx={{ fontWeight: "400", fontSize: "1.2rem" }}
            >
              {foot.Walk_into_our_campus_at_Line1}
            </Typography>
            <Typography
              variant="h5"
              gutterBottom
              sx={{ fontWeight: "400", fontSize: "1.2rem" }}
            >
              {foot.Walk_into_our_campus_at_Line2}
            </Typography>
            <Typography
              variant="h5"
              gutterBottom
              sx={{
                fontWeight: "400",
                fontSize: "1.2rem",
                marginBottom: "2rem",
              }}
            >
              {foot.Walk_into_our_campus_at_Line3}
            </Typography>

            <Typography variant="h5" gutterBottom sx={{ fontSize: "1.2rem" }}>
              <span style={{ fontWeight: "700", fontSize: "1.2rem" }}>
                {foot.Phone_Name}{" "}
              </span>
              {foot.Phone_Num}
              <span style={{ fontWeight: "700", fontSize: "1.2rem" }}>
                {foot.Mobile}{" "}
              </span>
              {foot.Mobile_Num}
            </Typography>
            <Typography
              variant="h5"
              gutterBottom
              sx={{ fontWeight: "400", fontSize: "1.2rem" }}
            >
              <span style={{ fontWeight: "700", fontSize: "1.2rem" }}>
                {foot.email}{" "}
              </span>
              {foot.email_Address}
            </Typography>
          </Box>
        </BoxWrapper>
        <BoxWrapper
          sx={{
            width: "50%",
            flexWrap: "wrap",
            height: "100%",
          }}
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1898.0629697193206!2d73.80054!3d17.926279!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2687f5437c4e9%3A0x4f91ee5649747f00!2sShalom%20International%20School%20%26%20Jr.College!5e0!3m2!1sen!2sus!4v1680841610554!5m2!1sen!2sus"
            width="600"
            height="450"
            sx={{ border: "0" }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          />
        </BoxWrapper>
      </ContainerWrapper>
      <Box
        sx={{
          display: "flex",
          height: "100%",
          alignItem: "center",
          justifyContent: "space-between",
          background: "#720404F2",
          color: "white",
          flexDirection: "row",
          width: "100%",
        }}
      >
        <FooterWrapper
          sx={{
            display: "flex",
            height: "100%",
            alignItem: "center",
            justifyContent: "space-between",
            width: "100%",
            margin: "auto",
            padding: "25px 40px",
          }}
        >
          <Typography sx={{fontWeight:"400", fontSize:"12px" }}>{foot.Copyrights}</Typography>
          <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
            <Typography style={{ maxWidth: "60px", fontWeight:"400", fontSize:"12px" }}>{foot.About}</Typography>
            <Typography style={{ maxWidth: "120px", fontWeight:"400", fontSize:"12px"  }}>
              {foot.Contact}
            </Typography>
          </Box>  
        </FooterWrapper>
      </Box>
    </Box>
  );
};

export default Footer;

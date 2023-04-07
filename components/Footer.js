import React from "react";
import styles from "@/styles/Home.module.css";
import { foot } from "../utils/text_utils/textUtils";
import Box from "@mui/material/Box";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import HeadphonesIcon from "@mui/icons-material/Headphones";
import MedicalServicesIcon from "@mui/icons-material/MedicalServices";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";
import { styled } from "@mui/material/styles";

const ColBox = styled("Box")(({ theme }) => ({
  padding: theme.spacing(1),
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
    flexWrap: "wrap",
    height: "100%",
    width: "100%",
  },
  [theme.breakpoints.up("md")]: {
    flexDirection: "column",
    flexWrap: "wrap",
    height: "100%",
  },
  [theme.breakpoints.up("lg")]: {
    flexDirection: "row",
    flexWrap: "wrap",
    width: "100%",
  },
}));
const ColBox3 = styled("Box")(({ theme }) => ({
  padding: theme.spacing(1),
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
    flexWrap: "wrap",
    height: "100%",
    width: "100%",
  },
  [theme.breakpoints.up("md")]: {
    flexWrap: "wrap",
    height: "100%",
    flexDirection: "row",
  },
  [theme.breakpoints.up("lg")]: {
    flexWrap: "wrap",
    width: "100%",
    flexDirection: "row",
  },
}));
const ColBox1 = styled("Box")(({ theme }) => ({
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
    width: "auto",
  },
}));
const ColBox2 = styled("Box")(({ theme }) => ({
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
    <>
      <Box>
        <Typography
          variant="h5"
          gutterBottom
          sx={{
            color: "white",
            background: "#3A3A3A",
            fontWeight: "300",
            padding: "1rem",
            textAlign: "center",
          }}
        >
          {foot.ae}
        </Typography>
      </Box>
      <ColBox
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "100%",
        }}
      >
        <ColBox1
          sx={{
            marginLeft: "2rem",
            marginRight: "2rem",
            textAlign: "center",
          }}
        >
          <HeadphonesIcon sx={{ color: "#720404F2", fontSize: "4rem" }} />{" "}
          <Typography
            variant="h5"
            gutterBottom
            sx={{ fontWeight: "700", fontSize: "1.2rem", color: "#54595F" }}
          >
            {foot.r}
          </Typography>
          <Typography
            variant="h5"
            gutterBottom
            sx={{ fontWeight: "700", fontSize: "1.2rem", color: "#8B0F0F" }}
          >
            {foot.rn}
          </Typography>
        </ColBox1>
        <ColBox1
          sx={{
            textAlign: "center",
            marginLeft: "3rem",
            marginRight: "3rem",
          }}
        >
          <MedicalServicesIcon sx={{ color: "#720404F2", fontSize: "4rem" }} />
          <Typography
            variant="h5"
            gutterBottom
            sx={{ fontWeight: "700", fontSize: "1.2rem", color: "#54595F" }}
          >
            {foot.se}
          </Typography>
          <Typography
            variant="h5"
            gutterBottom
            sx={{ fontWeight: "700", fontSize: "1.2rem", color: "#8B0F0F" }}
          >
            {foot.sen}
          </Typography>
        </ColBox1>
        <ColBox1
          sx={{
            textAlign: "center",
            marginLeft: "2rem",
            marginRight: "2rem",
          }}
        >
          <CardGiftcardIcon sx={{ color: "#720404F2", fontSize: "4rem" }} />
          <Typography
            variant="h5"
            gutterBottom
            sx={{ fontWeight: "700", fontSize: "1.2rem", color: "#54595F" }}
          >
            {foot.ad}
          </Typography>
          <Typography
            variant="h5"
            gutterBottom
            sx={{ fontWeight: "700", fontSize: "1.2rem", color: "#8B0F0F" }}
          >
            {foot.adn}
          </Typography>
        </ColBox1>
      </ColBox>
      <ColBox
        sx={{
          width: "100%",
          display: "flex",
          height: "40vh",
        }}
      >
        <ColBox2
          className={styles.foot}
          sx={{
            width: "50%",
            height: "100%",
          }}
        >
          <Typography
            variant="h5"
            gutterBottom
            sx={{
              color: "#720404F2",
              fontWeight: "700",
              fontSize: "2rem",
              marginBottom: "10rem",
            }}
          >
            {foot.walk}
          </Typography>

          <Box sx={{ width: "70%", margin: "auto", flexWrap: "wrap" }}>
            <Typography
              variant="h5"
              gutterBottom
              sx={{ fontWeight: "700", fontSize: "1.2rem" }}
            >
              {foot.sname}
            </Typography>
            <Typography
              variant="h5"
              gutterBottom
              sx={{ fontWeight: "400", fontSize: "1.2rem" }}
            >
              {foot.sadd1}
            </Typography>
            <Typography
              variant="h5"
              gutterBottom
              sx={{ fontWeight: "400", fontSize: "1.2rem" }}
            >
              {foot.sadd2}
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
              {foot.sadd3}
            </Typography>

            <Typography variant="h5" gutterBottom sx={{ fontSize: "1.2rem" }}>
              <span style={{ fontWeight: "700", fontSize: "1.2rem" }}>
                {foot.sphN}{" "}
              </span>
              {foot.sph}
              <span style={{ fontWeight: "700", fontSize: "1.2rem" }}>
                {foot.smN}{" "}
              </span>
              {foot.sm}
            </Typography>
            <Typography
              variant="h5"
              gutterBottom
              sx={{ fontWeight: "400", fontSize: "1.2rem" }}
            >
              <span style={{ fontWeight: "700", fontSize: "1.2rem" }}>
                {foot.smailN}{" "}
              </span>
              {foot.smail}
            </Typography>
          </Box>
        </ColBox2>
        <ColBox2
          sx={{
            width: "50%",
          }}
        >
          <Typography variant="h5" gutterBottom sx={{ overflow: "hidden" }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1898.0629697193206!2d73.80054!3d17.926279!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2687f5437c4e9%3A0x4f91ee5649747f00!2sShalom%20International%20School%20%26%20Jr.College!5e0!3m2!1sen!2sus!4v1680841610554!5m2!1sen!2sus"
              width="600"
              height="450"
              sx={{ border: "0" }}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            />
          </Typography>
        </ColBox2>
      </ColBox>
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
        <Box
          sx={{
            display: "flex",
            height: "100%",
            alignItem: "center",
            justifyContent: "space-between",
            width: "80%",
            margin: "auto",
            padding: "20px",
          }}
        >
          <Typography>{foot.copyR}</Typography>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Typography style={{ maxWidth: "120px" }}>{foot.About}</Typography>
            <Typography style={{ maxWidth: "120px" }}>
              {foot.Contact}
            </Typography>
            <Typography style={{ maxWidth: "120px" }}>{foot.Insta}</Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Footer;

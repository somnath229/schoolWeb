import React from "react";
import Container from "@mui/material/Container";
import EmailIcon from "@mui/icons-material/Email";
import { Box, ThemeProvider } from "@mui/system";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import styles from "@/styles/Home.module.css";
import { header } from "../utils/text_utils/textUtils";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";

const ContainerWrapperHead = styled("Container")(({ theme }) => ({
  padding: theme.spacing(1),
  [theme.breakpoints.down("md")]: {
    width: "100%",
    flexWrap: "wrap",
  },
  [theme.breakpoints.up("md")]: {
    width: "75%",
    flexWrap: "wrap",
  },
  [theme.breakpoints.up("lg")]: {
    width: "58%",
    flexWrap: "nowrap",
  },
}));

const Image = styled("img")`
  width: 10rem;
  height: auto;
`;

const HeadeImage = styled("Box")(({ theme }) => ({
  padding: theme.spacing(1),
  [theme.breakpoints.down("md")]: {
    width: "auto",
  },
}));
const HeadeDetailsWrapper = styled("Box")(({ theme }) => ({
  padding: theme.spacing(1),
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
    flexWrap: "wrap",
  },
  [theme.breakpoints.up("md")]: {
    flexDirection: "column",
    flexWrap: "no-wrap",
  },
  [theme.breakpoints.up("lg")]: {
    flexDirection: "row",
    flexWrap: "no-wrap",
  },
}));

const Header = () => {
  return (
    <ContainerWrapperHead
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "55%",
        margin: "auto",
        textAlign: "justify",
      }}
    >
      <HeadeImage
        className="logoM"
        sx={{ width: "15%", padding: ".5rem", margin: "0 1rem" }}
      >
        <Image src="/logo1.png" alt="loading..." />
      </HeadeImage>
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: ".5rem 0",
          flexWrap: "wrap",
        }}
      >
        <Typography
          variant="h1"
          gutterBottom
          className={styles.text}
          sx={{
            textAlign: "center",
            fontSize: "55px",
            fontWeight: 100,
            margin: "0",
          }}
        >
          {header.Shalom_International_School_Jr_College}
        </Typography>
        <Typography
          variant="caption"
          display="block"
          gutterBottom
          sx={{ textAlign: "center", fontSize: "15px", marginBottom: "1rem" }}
        >
          {header.English_Medium_Co_ed_School}
        </Typography>
        <HeadeDetailsWrapper
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            margin: "auto",
            flexWrap: "wrap",
          }}
        >
          <Box
            sx={{
              display: "flex",
              marginRight: "2rem",
              width: "auto",
            }}
          >
            <EmailIcon />
            <Box
              sx={{
                paddingLeft: "4px",
                fontSize: "18px ",
              }}
            >
              {header.email}
            </Box>
          </Box>

          <Box
            sx={{
              display: "flex",
              marginRight: "2rem",
              width: "auto",
            }}
          >
            <LocalPhoneIcon />
            <Box
              sx={{
                paddingLeft: "4px",
                fontSize: "18px ",
              }}
            >
              {header.number}
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              marginRight: "2rem",
              width: "auto",
            }}
          >
            <LocationOnIcon />
            <Box
              sx={{
                paddingLeft: "4px",
                fontSize: "18px ",
              }}
            >
              {header.address}
            </Box>
          </Box>
        </HeadeDetailsWrapper>
      </Container>
    </ContainerWrapperHead>
  );
};

export default Header;

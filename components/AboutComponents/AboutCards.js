import * as React from "react";
import { Container } from "@mui/system";
import { useTheme } from "@mui/material/styles";
import { AboutCardsUtils } from "../../utils/text_utils/textUtils";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
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
const CardWrapper = styled("Card")(({ theme }) => ({
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
const CardMediaWrapper = styled("CardMedia")(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    width: "100%",
  },
  [theme.breakpoints.up("md")]: {
    width: "50%",
  },
  [theme.breakpoints.up("lg")]: {
    width: "50%",
  },
}));
const AboutCards = () => {
  const theme = useTheme();
  return (
    <Container maxWidth="lg">
      <ContainerWrapper sx={{ width: "50%", margin: "auto", padding: "2rem" }}>
        <CardWrapper sx={{ display: "flex", border: "none" }}>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <CardContent sx={{ flex: "1 0 auto", width: "100%" }}>
              <Typography
                component="div"
                variant="h5"
                sx={{
                  fontWeight: "600",
                  fontSize: "2rem",
                  lineHeight: "1em",
                  letterSpacing: "-0.15px",
                  color: "#8b0f0f",
                }}
              >
                {AboutCardsUtils.School_Sessions}
              </Typography>
              <Typography
                variant="subtitle1"
                color="text.secondary"
                component="div"
              >
                {AboutCardsUtils.One_academic_year_consists_of_thr_terms}
                <ul style={{ margin: " 0 4rem" }}>
                  <li>{AboutCardsUtils.First_term}</li>
                  <li>{AboutCardsUtils.Second_term}</li>
                  <li>{AboutCardsUtils.Third_term}</li>
                </ul>
              </Typography>

              <Typography
                variant="subtitle1"
                color="text.secondary"
                component="div"
                sx={{ paddingBottom: "1rem" }}
              >
                {AboutCardsUtils.All_students}
              </Typography>
              <Typography
                variant="subtitle1"
                color="text.secondary"
                component="div"
              >
                {AboutCardsUtils.Cocurricular}
              </Typography>
            </CardContent>
          </Box>
          <CardMediaWrapper sx={{ width: "25%" }}>
            <CardMedia
              component="img"
              sx={{ width: "100%" }}
              image="https://www.shalominternationalschool.com/wp-content/uploads/2022/10/PSX_20221018_212911-768x768.jpg"
            />
          </CardMediaWrapper>
        </CardWrapper>
        <CardWrapper
          sx={{ display: "flex", border: "none", marginTop: "2rem" }}
        >
          <CardMediaWrapper sx={{ width: "25%" }}>
            <CardMedia
              component="img"
              sx={{ width: "100%" }}
              image="https://www.shalominternationalschool.com/wp-content/uploads/2022/10/PSX_20221018_213148.jpg"
            />
          </CardMediaWrapper>

          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <CardContent sx={{ flex: "1 0 auto" }}>
              <Typography
                component="div"
                variant="h5"
                sx={{
                  fontWeight: "600",
                  fontSize: "2rem",
                  lineHeight: "1em",
                  letterSpacing: "-0.15px",
                  color: "#8b0f0f",
                }}
              >
                {AboutCardsUtils.Academic_Activities}
              </Typography>
              <Typography
                variant="subtitle1"
                color="text.secondary"
                component="div"
              >
                {AboutCardsUtils.Cocurricular}
              </Typography>
            </CardContent>
          </Box>
        </CardWrapper>
        <CardWrapper sx={{ display: "flex", border: "none" }}>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <CardContent sx={{ flex: "1 0 auto" }}>
              <Typography
                component="div"
                variant="h5"
                sx={{
                  fontWeight: "600",
                  fontSize: "2rem",
                  lineHeight: "1em",
                  letterSpacing: "-0.15px",
                  color: "#8b0f0f",
                }}
              >
                {AboutCardsUtils.Co_Curricular_Activities}
              </Typography>
              <Typography
                variant="subtitle1"
                color="text.secondary"
                component="div"
              >
                {AboutCardsUtils.The_School_provides}
              </Typography>
              <Typography
                variant="subtitle1"
                color="text.secondary"
                component="div"
              >
                {AboutCardsUtils.Cocurricular}
              </Typography>
            </CardContent>
          </Box>
          <CardMediaWrapper sx={{ width: "25%" }}>
            <CardMedia
              component="img"
              sx={{ width: "100%" }}
              image="https://www.shalominternationalschool.com/wp-content/uploads/2022/10/Athletics.jpg"
            />
          </CardMediaWrapper>
        </CardWrapper>
        <CardWrapper sx={{ display: "flex", border: "none" }}>
          <CardMediaWrapper sx={{ width: "25%", marginTop:"2rem" }}>
            <CardMedia
              component="img"
              sx={{ width: "100%" }}
              image="https://www.shalominternationalschool.com/wp-content/uploads/2022/10/PSX_20221018_214030-396x360.jpg"
            />
          </CardMediaWrapper>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <CardContent sx={{ flex: "1 0 auto" }}>
              <Typography
                component="div"
                variant="h5"
                sx={{
                  fontWeight: "600",
                  fontSize: "2rem",
                  lineHeight: "1em",
                  letterSpacing: "-0.15px",
                  color: "#8b0f0f",
                }}
              >
                {AboutCardsUtils.Indoor_outdoor_games}
              </Typography>
              <Typography
                variant="subtitle1"
                color="text.secondary"
                component="div"
              >
                {AboutCardsUtils.The_School_provides}
              </Typography>
              <Typography
                variant="subtitle1"
                color="text.secondary"
                component="div"
              >
                {AboutCardsUtils.The_School_has_facilities}
              </Typography>
            </CardContent>
          </Box>
        </CardWrapper>
        <CardWrapper sx={{ display: "flex", border: "none" }}>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <CardContent sx={{ flex: "1 0 auto" }}>
              <Typography
                component="div"
                variant="h5"
                sx={{
                  fontWeight: "600",
                  fontSize: "2rem",
                  lineHeight: "1em",
                  letterSpacing: "-0.15px",
                  color: "#8b0f0f",
                }}
              >
                {AboutCardsUtils.Field_and_Track_Events}
              </Typography>
              <Typography
                variant="subtitle1"
                color="text.secondary"
                component="div"
              >
                {AboutCardsUtils.The_School_has_facilities}
              </Typography>
              <Typography
                variant="subtitle1"
                color="text.secondary"
                component="div"
              >
                {AboutCardsUtils.Games_are_an_integral}
              </Typography>
              <Typography
                variant="subtitle1"
                color="text.secondary"
                component="div"
              >
                {AboutCardsUtils.Table_Tennis}
              </Typography>
              <Typography
                variant="subtitle1"
                color="text.secondary"
                component="div"
              >
                {AboutCardsUtils.Cricket}
              </Typography>
            </CardContent>
          </Box>
          <CardMediaWrapper sx={{ width: "25%" }}>
            <CardMedia
              component="img"
              sx={{ width: "100%" }}
              image="https://www.shalominternationalschool.com/wp-content/uploads/2022/10/Athletics.jpg"
            />
          </CardMediaWrapper>
        </CardWrapper>
        <Card
          sx={{ display: "flex", border: "none", flexDirection: "column" }}
        >
          <ContainerWrapper sx={{ width: "50%", padding: "1rem" }}>
            <Typography
              component="div"
              variant="h5"
              sx={{
                fontWeight: "600",
                fontSize: "2rem",
                lineHeight: "1em",
                letterSpacing: "-0.15px",
                color: "#8b0f0f",
              }}
            >
              {AboutCardsUtils.Science}
            </Typography>
            <Typography
              variant="subtitle1"
              color="text.secondary"
              component="div"
            >
              {AboutCardsUtils.To_enable_child}
            </Typography>
          </ContainerWrapper>
          <CardWrapper sx={{ display: "flex", flexDirection: "row" }}>
            <CardMediaWrapper sx={{ width: "25%" }}>
              <CardMedia
                component="img"
                sx={{ width: "100%" }}
                image="https://www.shalominternationalschool.com/wp-content/uploads/2022/10/technolgy-in-school.jpg"
              />
            </CardMediaWrapper>
            <CardWrapper sx={{ display: "flex", flexDirection: "column" }}>
              <CardContent sx={{ flex: "1 0 auto" }}>
                <Typography
                  variant="subtitle1"
                  color="text.secondary"
                  component="div"
                >
                  {AboutCardsUtils.We_offer_cutting_edge}
                </Typography>
              </CardContent>
            </CardWrapper>
          </CardWrapper>
        </Card>
      </ContainerWrapper>
    </Container>
  );
};

export default AboutCards;

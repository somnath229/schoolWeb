import * as React from "react";
import { Container } from "@mui/system";
import { useTheme } from "@mui/material/styles";
import { AboutCardsUtils } from "../../utils/text_utils/textUtils";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

const AboutCards = () => {
  const theme = useTheme();
  return (
    <Container sx={{ width: "50%", margin: "auto", padding: "2rem" }}>
      <Card sx={{ display: "flex", border: "none" }}>
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
        <CardMedia
          component="img"
          sx={{ width: 500 }}
          image="https://www.shalominternationalschool.com/wp-content/uploads/2022/10/PSX_20221018_212911-768x768.jpg"
        />
      </Card>
      <Card sx={{ display: "flex", border: "none" }}>
        <CardMedia
          component="img"
          sx={{ width: 400 }}
          image="https://www.shalominternationalschool.com/wp-content/uploads/2022/10/PSX_20221018_213148.jpg"
        />
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
      </Card>
      <Card sx={{ display: "flex", border: "none" }}>
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
        <CardMedia
          component="img"
          sx={{ width: 551 }}
          image="https://www.shalominternationalschool.com/wp-content/uploads/2022/10/Athletics.jpg"
        />
      </Card>
      <Card sx={{ display: "flex", border: "none" }}>
        <CardMedia
          component="img"
          sx={{ width: 551 }}
          image="https://www.shalominternationalschool.com/wp-content/uploads/2022/10/PSX_20221018_214030-396x360.jpg"
        />
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
      </Card>
      <Card sx={{ display: "flex", border: "none" }}>
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
        <CardMedia
          component="img"
          sx={{ width: 551 }}
          image="https://www.shalominternationalschool.com/wp-content/uploads/2022/10/Athletics.jpg"
        />
      </Card>
      <Card sx={{ display: "flex", border: "none", flexDirection: "column" }}>
        <Box sx={{ width: "50%", padding: "1rem" }}>
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
        </Box>
        <Box sx={{ display: "flex", flexDirection: "row" }}>
          <CardMedia
            component="img"
            sx={{ width: 501 }}
            image="https://www.shalominternationalschool.com/wp-content/uploads/2022/10/technolgy-in-school.jpg"
          />
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <CardContent sx={{ flex: "1 0 auto" }}>
            <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
          >
            {AboutCardsUtils.We_offer_cutting_edge}
          </Typography>
            </CardContent>
          </Box>
        </Box>
      </Card>
    </Container>
  );
};

export default AboutCards;

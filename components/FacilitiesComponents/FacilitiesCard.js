import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { Button, CardActionArea, CardActions } from "@mui/material";
import styles from "@/styles/Home.module.css";
import Container from "@mui/material/Container";
import { FacilityCardtextUtils } from "../../utils/text_utils/textUtils";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";

const FacilitiesCard = () => {
  return (
    <Container sx={{ padding: "5rem 0", display:"flex", alignItem:"center", justifyContent:"center", flexWrap:"wrap" }}>
      <Card sx={{ maxWidth: 300, margin:"2rem" }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="300"
            image="https://www.shalominternationalschool.com/wp-content/uploads/2022/10/PSX_20221018_213148.jpg"
          />
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              sx={{
                fontWeight: "bold",
                fontSize: "1.2rem",
                lineHeight: "30px",
                letterSpacing: "-0.15px",
              }}
            >
              {FacilityCardtextUtils.Biology}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {FacilityCardtextUtils.Laced_with_modern}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      <Card sx={{ maxWidth: 300, margin:"2rem" }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="300"
            image="https://www.shalominternationalschool.com/wp-content/uploads/2022/10/PSX_20221018_214030.jpg"
          />
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              sx={{
                fontWeight: "bold",
                fontSize: "1.2rem",
                lineHeight: "30px",
                letterSpacing: "-0.15px",
              }}
            >
              {FacilityCardtextUtils.Games_Sports}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {FacilityCardtextUtils.To_help_children}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      <Card sx={{ maxWidth: 300, margin:"2rem" }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="300"
            image="https://www.shalominternationalschool.com/wp-content/uploads/2022/12/event-1.jpg"
          />
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              sx={{
                fontWeight: "bold",
                fontSize: "1.2rem",
                lineHeight: "30px",
                letterSpacing: "-0.15px",
              }}
            >
              {FacilityCardtextUtils.Library_Laboratories}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {FacilityCardtextUtils.To_promote_the_reading}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      <Card sx={{ maxWidth: 300, margin:"2rem" }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="300"
            image="https://www.shalominternationalschool.com/wp-content/uploads/2022/12/infirmary.png"
          />
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              sx={{
                fontWeight: "bold",
                fontSize: "1.2rem",
                lineHeight: "30px",
                letterSpacing: "-0.15px",
              }}
            >
              {FacilityCardtextUtils.Infirmary}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {FacilityCardtextUtils.A_well_trained_staff}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      <Card sx={{ maxWidth: 300, margin:"2rem" }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="300"
            image="https://www.shalominternationalschool.com/wp-content/uploads/2022/12/DSC_1859.jpg"
          />
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              sx={{
                fontWeight: "bold",
                fontSize: "1.2rem",
                lineHeight: "30px",
                letterSpacing: "-0.15px",
              }}
            >
              {FacilityCardtextUtils.Food_Dining}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {FacilityCardtextUtils.A_sound_mind_dwells}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      <Card sx={{ maxWidth: 300, margin:"2rem" }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="300"
            image="https://www.shalominternationalschool.com/wp-content/uploads/2022/10/technolgy-in-school.jpg"
          />
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              sx={{
                fontWeight: "bold",
                fontSize: "1.2rem",
                lineHeight: "30px",
                letterSpacing: "-0.15px",
              }}
            >
              {FacilityCardtextUtils.Information_Technology}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {FacilityCardtextUtils.To_enable_child_to_pace_with}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Container>
  );
};

export default FacilitiesCard;

import React from "react";
import { Container, Box } from "@mui/material";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea } from "@mui/material";
import { carouselUtils, slideUtils } from "../../utils/text_utils/textUtils";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";

const options = {
  //   arrows: false,
  type: "loop",
  perPage: 3,
  interval: 5000,
  autoplay: "play",
  pagination: false,
  pauseOnHover: true,
  breakpoints: {
    1100: {
      perPage: 2,
    },
    600: {
      perPage: 1,
    },
  },
};
const Carousel = () => {
  return (
    <Container maxWidth="lg">
      <Typography
        gutterBottom
        variant="h5"
        component="div"
        sx={{
          textAlign: "center",
          fontWeight: "bold",
          fontSize: "2rem",
          lineHeight: "30px",
          letterSpacing: "-0.15px",
        }}
      >
        {carouselUtils.Club_Activities}
      </Typography>
      <Splide
        options={options}
        aria-label="My Favorite Images"
        data-splide-interval="1000"
        // data-splide='{"type":"loop","perPage":3}'
      >
        {slideUtils.map((slide) => (
          <SplideSlide>
            <Card sx={{ maxWidth: 300 }}>
              <CardActionArea sx={{ height: "100%" }}>
                <CardMedia
                  component="img"
                  height="300"
                  image={slide["imgSrc"]}
                  sx={{ padding: ".5rem", borderRadius: "1rem 1rem 0 0" }}
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
                    {slide["name"]}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {slide["description"]}
                  </Typography>
                  <Box sx={{ textAlign: "right", paddingRight: "1rem" }}>
                    <Link href="#">{carouselUtils.View_More}</Link>
                  </Box>
                </CardContent>
              </CardActionArea>
            </Card>
          </SplideSlide>
        ))}
      </Splide>
    </Container>
  );
};

export default Carousel;

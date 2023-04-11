import * as React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { WhyComponentsUtils } from "../../utils/text_utils/textUtils";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { CardActionArea, CardActions } from "@mui/material";
import LanguageIcon from "@mui/icons-material/Language";
import FontDownloadIcon from "@mui/icons-material/FontDownload";
import LaptopIcon from "@mui/icons-material/Laptop";
import BookIcon from "@mui/icons-material/Book";
import SportsSoccerIcon from "@mui/icons-material/SportsSoccer";
import ChangeHistoryIcon from "@mui/icons-material/ChangeHistory";

const WhyComponents = () => {
  return (
      <Box>
        <Container
          maxWidth="lg"
          sx={{
            display: "flex",
            flexWrap: "wrap",
            alignItem: "center",
            justifyContent: "center",
            marginBottom: "3rem",
          }}
        >
          <Typography
            variant="h4"
            gutterBottom
            sx={{
              textAlign: "center",
              fontWeight: "700",
              color: "#720404F2",
            }}
          >
            {WhyComponentsUtils.Why_Shalom_International_School}
          </Typography>
          <Card sx={{ maxWidth: 345, margin: "1rem", boxShadow: "none" }}>
            <CardActionArea sx={{ display: "flex", alignItems: "flex-start" }}>
              <LanguageIcon sx={{ fontSize: "3rem", color: "#720404F2" }} />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {WhyComponentsUtils.International_School}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {WhyComponentsUtils.International_School_Body}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
          <Card sx={{ maxWidth: 345, margin: "1rem", boxShadow: "none" }}>
            <CardActionArea sx={{ display: "flex", alignItems: "flex-start" }}>
              <FontDownloadIcon sx={{ fontSize: "3rem", color: "#720404F2" }} />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {WhyComponentsUtils.National_State_Curriculum}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {WhyComponentsUtils.National_State_Curriculum_Body}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
          <Card sx={{ maxWidth: 345, margin: "1rem", boxShadow: "none" }}>
            <CardActionArea sx={{ display: "flex", alignItems: "flex-start" }}>
              <LaptopIcon sx={{ fontSize: "3rem", color: "#720404F2" }} />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {WhyComponentsUtils.Smart_Classes}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {WhyComponentsUtils.Smart_Classes_Body}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
          <Card sx={{ maxWidth: 345, margin: "1rem", boxShadow: "none" }}>
            <CardActionArea sx={{ display: "flex", alignItems: "flex-start" }}>
              <BookIcon sx={{ fontSize: "3rem", color: "#720404F2" }} />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {WhyComponentsUtils.CET_Coaching}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {WhyComponentsUtils.CET_Coaching_Body}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
          <Card sx={{ maxWidth: 345, margin: "1rem", boxShadow: "none" }}>
            <CardActionArea sx={{ display: "flex", alignItems: "flex-start" }}>
              <SportsSoccerIcon sx={{ fontSize: "3rem", color: "#720404F2" }} />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {WhyComponentsUtils.Student_Clubs}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {WhyComponentsUtils.Student_Clubs_Body}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
          <Card sx={{ maxWidth: 345, margin: "1rem", boxShadow: "none" }}>
            <CardActionArea sx={{ display: "flex", alignItems: "flex-start" }}>
              <ChangeHistoryIcon
                sx={{ fontSize: "3rem", color: "#720404F2" }}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {WhyComponentsUtils.Natural_Surroundings}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {WhyComponentsUtils.Natural_Surroundings_Body}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Container>
      </Box>
  );
};

export default WhyComponents;

import React from "react";
import { Container, Box } from "@mui/system";
import { useTheme } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { ManagementCardUtils } from "../../utils/text_utils/textUtils";

const ManagementCard = () => {
  const theme = useTheme();
  return (
    <Container maxWidth="lg" sx={{ padding: "1rem" }}>
      <Typography
        variant="subtitle1"
        color="text.secondary"
        component="div"
        sx={{
          fontWeight: "normal",
          fontSize: "18px",
          color: "#222222",
        }}
      >
        {ManagementCardUtils.MANAGEMENT}
      </Typography>
      <Card
        sx={{
          display: "flex",
          width: "100%",
          background: "#f6f6f6",
          margin: "1rem",
        }}
      >
        <Box
          sx={{
            width: "50%",
            border: "1px solid hsla(0,0%,50.2%,.5019607843137255);",
          }}
        >
          <CardMedia
            component="img"
            sx={{ width: 300, padding: "1rem" }}
            image="https://www.shalominternationalschool.com/wp-content/uploads/2020/02/Sahebrao_Biramane-266x300.jpg"
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            width: " 50%",
            border: "1px solid hsla(0,0%,50.2%,.5019607843137255);",
          }}
        >
          <CardContent sx={{ flex: "1 0 auto" }}>
            <Typography
              component="div"
              variant="h4"
              sx={{
                fontWeight: "500",
                lineHeight: "1.2",
                fontSize: "35px",
                marginBottom: "1rem",
              }}
            >
              {ManagementCardUtils.Sahebrao_Shivram_Biramane}
            </Typography>
            <Typography
              variant="subtitle1"
              color="text.secondary"
              component="div"
              sx={{
                fontWeight: "normal",
                lineHeight: "1.8",
                fontSize: "18px",
                color: "#222222",
              }}
            >
              {ManagementCardUtils.Sahebrao_Shivram_Biramane_ExPresident}
            </Typography>
            <Typography
              variant="subtitle1"
              color="text.secondary"
              component="div"
              sx={{
                fontWeight: "normal",
                lineHeight: "1.4",
                fontSize: "18px",
                color: "#222222",
              }}
            >
              {ManagementCardUtils.Sahebrao_Shivram_Biramane_Founder}
            </Typography>
          </CardContent>
        </Box>
      </Card>
      <Card
        sx={{
          display: "flex",
          width: "100%",
          background: "#f6f6f6",
          margin: "1rem",
        }}
      >
        <Box
          sx={{
            width: "50%",
            border: "1px solid hsla(0,0%,50.2%,.5019607843137255);",
          }}
        >
          <CardMedia
            component="img"
            sx={{ width: 300, padding: "1rem" }}
            image="https://www.shalominternationalschool.com/wp-content/uploads/2020/02/Ajit_Biramane-266x300.jpg"
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            width: " 50%",
            border: "1px solid hsla(0,0%,50.2%,.5019607843137255);",
          }}
        >
          <CardContent sx={{ flex: "1 0 auto" }}>
            <Typography
              component="div"
              variant="h4"
              sx={{
                fontWeight: "500",
                lineHeight: "1.2",
                fontSize: "35px",
                marginBottom: "1rem",
              }}
            >
              {ManagementCardUtils.Ajit_Biramane}
            </Typography>
            <Typography
              variant="subtitle1"
              color="text.secondary"
              component="div"
              sx={{
                fontWeight: "normal",
                lineHeight: "1.8",
                fontSize: "18px",
                color: "#222222",
              }}
            >
              {ManagementCardUtils.His_management_style}
            </Typography>
          </CardContent>
        </Box>
      </Card>
      <Card
        sx={{
          display: "flex",
          width: "100%",
          background: "#f6f6f6",
          margin: "1rem",
        }}
      >
        <Box
          sx={{
            width: "50%",
            border: "1px solid hsla(0,0%,50.2%,.5019607843137255);",
          }}
        >
          <CardMedia
            component="img"
            sx={{ width: 300, padding: "1rem" }}
            image="https://www.shalominternationalschool.com/wp-content/uploads/2020/02/Shweta_Biramane-266x300.jpg"
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            width: " 50%",
            border: "1px solid hsla(0,0%,50.2%,.5019607843137255);",
          }}
        >
          <CardContent sx={{ flex: "1 0 auto" }}>
            <Typography
              component="div"
              variant="h4"
              sx={{
                fontWeight: "500",
                lineHeight: "1.2",
                fontSize: "35px",
                marginBottom: "1rem",
              }}
            >
              {ManagementCardUtils.Shweta_Ajit_Biramane}
            </Typography>
            <Typography
              variant="subtitle1"
              color="text.secondary"
              component="div"
              sx={{
                fontWeight: "normal",
                lineHeight: "1.4",
                fontSize: "18px",
                color: "#222222",
                paddingBottom: "1rem",
              }}
            >
              {ManagementCardUtils.The_caring_and_loving}
            </Typography>
            <Typography
              variant="subtitle1"
              color="text.secondary"
              component="div"
              sx={{
                fontWeight: "normal",
                lineHeight: "1.4",
                fontSize: "18px",
                color: "#222222",
              }}
            >
              {ManagementCardUtils.Children_experience_compassion}
            </Typography>
          </CardContent>
        </Box>
      </Card>
    </Container>
  );
};

export default ManagementCard;

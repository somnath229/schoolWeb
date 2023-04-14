import React from "react";
import { Container, Box } from "@mui/system";
import Typography from "@mui/material/Typography";
import { contactUsUtils } from "../../utils/text_utils/textUtils";
import CardMedia from "@mui/material/CardMedia";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";
import { styled } from "@mui/material/styles";

const BoxWrapper = styled("Box")(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    width: "100%",
    flexDirection: "column",
  },
  [theme.breakpoints.up("md")]: {
    width: "100%",
    flexDirection: "row",
  },
  [theme.breakpoints.up("lg")]: {
    width: "65%",
    flexDirection: "row",
  },
}));
const ContactAddress = () => {
  return (
    <Container maxWidth="false">
      <Container maxWidth="false" sx={{ padding: "4rem" }}>
        <Typography
          variant="h2"
          gutterBottom
          sx={{
            fontWeight: "300",
            fontSize: "24px",
            lineHeight: "1em",
            letterSpacing: "-0.5px",
            color: "#666666",
            textAlign: "center",
          }}
        >
          {contactUsUtils.Shalom_International_School}
        </Typography>
        <Typography
          variant="h2"
          gutterBottom
          sx={{
            fontWeight: "300",
            fontSize: "24px",
            lineHeight: "1em",
            letterSpacing: "-0.5px",
            color: "#666666",
            textAlign: "center",
          }}
        >
          {contactUsUtils.Feel_free_to_contact}
        </Typography>
      </Container>
      <Container
        maxWidth="false"
        sx={{
          background: "#f7f9fa",
        }}
      >
        <BoxWrapper
          sx={{
            padding: "4rem 0",
            margin: "auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box>
            <CardMedia
              component="img"
              sx={{ width: "90%" }}
              image="https://www.shalominternationalschool.com/wp-content/uploads/2022/08/shalom-school-building.jpg"
            />
          </Box>
          <Box sx={{ paddingTop: "1rem" }}>
            <Typography
              variant="h2"
              gutterBottom
              sx={{
                fontWeight: "600",
                fontSize: "24px",
                lineHeight: "1.33em",
                letterSpacing: "-0.15px",
                color: "#203b6a",
              }}
            >
              {contactUsUtils.Headquarters}
            </Typography>

            <Typography
              variant="h2"
              gutterBottom
              sx={{
                fontWeight: "300",
                fontSize: "20px",
                lineHeight: "1.4em",
                letterSpacing: "-0.5px",
                color: "#666666",
              }}
            >
              {contactUsUtils.Walk_into_our_office_at}
            </Typography>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                paddingBottom: "1rem",
              }}
            >
              <Box sx={{ width: "10%", color: "#666666" }}>
                <LocationOnIcon />
              </Box>
              <Box sx={{ width: "90%" }}>
                <Typography
                  variant="h2"
                  gutterBottom
                  sx={{
                    fontWeight: "bolder",
                    fontSize: "20px",
                    lineHeight: "1.4em",
                    letterSpacing: "-0.5px",
                    color: "#666666",
                  }}
                >
                  {contactUsUtils.Walk_into_our_office_at_Name}
                </Typography>
                <Typography
                  variant="h2"
                  gutterBottom
                  sx={{
                    fontWeight: "300",
                    fontSize: "20px",
                    lineHeight: "1.4em",
                    letterSpacing: "-0.5px",
                    color: "#666666",
                  }}
                >
                  {contactUsUtils.Walk_into_our_office_at_Line1}
                </Typography>
                <Typography
                  variant="h2"
                  gutterBottom
                  sx={{
                    fontWeight: "300",
                    fontSize: "20px",
                    lineHeight: "1.4em",
                    letterSpacing: "-0.5px",
                    color: "#666666",
                  }}
                >
                  {contactUsUtils.Walk_into_our_office_at_Line2}
                </Typography>
                <Typography
                  variant="h2"
                  gutterBottom
                  sx={{
                    fontWeight: "300",
                    fontSize: "20px",
                    lineHeight: "1.4em",
                    letterSpacing: "-0.5px",
                    color: "#666666",
                  }}
                >
                  {contactUsUtils.Walk_into_our_office_at_Line3}
                </Typography>
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                paddingBottom: "1rem",
              }}
            >
              <Box sx={{ width: "10%", color: "#666666" }}>
                <LocalPhoneIcon />
              </Box>
              <Box sx={{ width: "90%" }}>
                <Typography
                  variant="h2"
                  gutterBottom
                  sx={{
                    fontWeight: "300",
                    fontSize: "20px",
                    lineHeight: "1.4em",
                    letterSpacing: "-0.5px",
                    color: "#666666",
                  }}
                >
                  {contactUsUtils.Phone_Number1}
                </Typography>
                <Typography
                  variant="h2"
                  gutterBottom
                  sx={{
                    fontWeight: "300",
                    fontSize: "20px",
                    lineHeight: "1.4em",
                    letterSpacing: "-0.5px",
                    color: "#666666",
                  }}
                >
                  {contactUsUtils.Phone_Number2}
                </Typography>
                <Typography
                  variant="h2"
                  gutterBottom
                  sx={{
                    fontWeight: "300",
                    fontSize: "20px",
                    lineHeight: "1.4em",
                    letterSpacing: "-0.5px",
                    color: "#666666",
                  }}
                >
                  {contactUsUtils.Mobile_Number}
                </Typography>
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Box sx={{ width: "10%", color: "#666666" }}>
                <EmailIcon />
              </Box>
              <Box sx={{ width: "90%" }}>
                <Typography
                  variant="h2"
                  gutterBottom
                  sx={{
                    fontWeight: "300",
                    fontSize: "20px",
                    lineHeight: "1.4em",
                    letterSpacing: "-0.5px",
                    color: "#666666",
                  }}
                >
                  {contactUsUtils.email_Address}
                </Typography>
              </Box>
            </Box>
          </Box>
        </BoxWrapper>
      </Container>
    </Container>
  );
};

export default ContactAddress;

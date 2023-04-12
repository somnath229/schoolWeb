import * as React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { Container, Box } from "@mui/system";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { contactUsUtils } from "../../utils/text_utils/textUtils";

const ContactForm = () => {
  return (
    <Container
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "2rem",
      }}
    >
      <Box sx={{ width: "40%" }}>
        <Box
          sx={{
            width: 400,
            maxWidth: "100%",
            margin: "1rem",
          }}
        >
          <Typography
            variant="h1"
            gutterBottom
            sx={{
              fontSize: "20px",
              fontWeight: "300",
              lineHeight: "1.4em",
              letterSpacing: "-0.5px",
              color: "black",
            }}
          >
            {contactUsUtils.Your_name}
          </Typography>
          <TextField fullWidth id="fullWidth" />
        </Box>
        <Box
          sx={{
            width: 400,
            maxWidth: "100%",
            margin: "1rem",
          }}
        >
          <Typography
            variant="h1"
            gutterBottom
            sx={{
              fontSize: "20px",
              fontWeight: "300",
              lineHeight: "1.4em",
              letterSpacing: "-0.5px",
              color: "black",
            }}
          >
            {contactUsUtils.Your_email}
          </Typography>
          <TextField fullWidth id="fullWidth" />
        </Box>
        <Box
          sx={{
            width: 400,
            maxWidth: "100%",
            margin: "1rem",
          }}
        >
          <Typography
            variant="h1"
            gutterBottom
            sx={{
              fontSize: "20px",
              fontWeight: "300",
              lineHeight: "1.4em",
              letterSpacing: "-0.5px",
              color: "black",
            }}
          >
            {contactUsUtils.Subject}
          </Typography>
          <TextField fullWidth id="fullWidth" />
        </Box>
        <Box
          sx={{
            width: 400,
            maxWidth: "100%",
            margin: "1rem",
          }}
        >
          <Typography
            variant="h1"
            gutterBottom
            sx={{
              fontSize: "20px",
              fontWeight: "300",
              lineHeight: "1.4em",
              letterSpacing: "-0.5px",
              color: "black",
            }}
          >
            {contactUsUtils.Your_message}
          </Typography>
          <textarea
            id="w3review"
            name="w3review"
            rows="14"
            cols="50"
          ></textarea>
        </Box>
        <Stack spacing={2} direction="row">
          <Button variant="outlined" sx={{width:"25%", margin:"0 1rem"}}> {contactUsUtils.Submit}</Button>
        </Stack>
      </Box>
      <Box
        sx={{
          width: "60%",
        }}
      >
        <CardMedia
          component="img"
          sx={{ maxWidth: "100%" }}
          image="https://www.shalominternationalschool.com/wp-content/uploads/2022/10/startup-photos-768x512.jpg"
        />
      </Box>
    </Container>
  );
};

export default ContactForm;

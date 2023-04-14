import * as React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { Container, Box } from "@mui/system";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { contactUsUtils } from "../../utils/text_utils/textUtils";
import { submitFormApi } from "@/utils/api/Api";
import { styled } from "@mui/material/styles";

const ContainerWrapper = styled("Container")(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    width: "100%",
    flexDirection: "column",
  },
  [theme.breakpoints.up("md")]: {
    width: "75%",
    flexDirection: "row",
  },
  [theme.breakpoints.up("lg")]: {
    width: "60%",
    flexDirection: "row",
  },
}));
const ContactForm = () => {
  const [userFormData, setUserFormData] = React.useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let response = await submitFormApi({
        ...userFormData,
        source: "contact_page",
      });
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
  const handleChange = (e) => {
    setUserFormData({ ...userFormData, [e.target.name]: e.target.value });
  };
  return (
    <ContainerWrapper
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "2rem",
        margin: "auto",
      }}
    >
      <ContainerWrapper
        sx={{ marginRight: ".5rem" }}
        component={"form"}
        onSubmit={handleSubmit}
      >
        <Box
          sx={{
            width: 400,
            maxWidth: "100%",
            margin: "1rem 0",
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
          <TextField
            fullWidth
            id="fullWidth"
            name="name"
            value={userFormData.name}
            required
            onChange={handleChange}
          />
        </Box>
        <Box
          sx={{
            width: 400,
            maxWidth: "100%",
            margin: "1rem 0",
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
          <TextField
            fullWidth
            id="fullWidth"
            name="email"
            value={userFormData.email}
            required
            onChange={handleChange}
          />
        </Box>
        <Box
          sx={{
            width: 400,
            maxWidth: "100%",
            margin: "1rem 0",
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
          <TextField
            fullWidth
            id="fullWidth"
            name="subject"
            value={userFormData.subject}
            required
            onChange={handleChange}
          />
        </Box>
        <Box
          sx={{
            width: 400,
            maxWidth: "100%",
            margin: "1rem 0",
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
          <TextField
            id="outlined-multiline-static"
            name="message"
            rows="14"
            cols="50"
            value={userFormData.message}
            onChange={handleChange}
            multiline
            rows={5}
          />
        </Box>
        <Stack spacing={2} direction="row">
          <Button
            variant="outlined"
            sx={{ width: "25%", margin: "0 0rem" }}
            type="submit"
          >
            {" "}
            {contactUsUtils.Submit}
          </Button>
        </Stack>
      </ContainerWrapper>
      <Box
        sx={{
          width: "100%",
          padding: "1rem 0",
        }}
      >
        <CardMedia
          component="img"
          sx={{ maxWidth: "100%" }}
          image="https://www.shalominternationalschool.com/wp-content/uploads/2022/10/startup-photos-768x512.jpg"
        />
      </Box>
    </ContainerWrapper>
  );
};

export default ContactForm;

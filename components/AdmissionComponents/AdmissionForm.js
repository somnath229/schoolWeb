import * as React from "react";
import { Box, Container } from "@mui/material";
import TextField from "@mui/material/TextField";
import { FromAdmissionUtils } from "../../utils/text_utils/textUtils";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { submitFormApi } from "@/utils/api/Api";

const AdmissionForm = () => {
  const [userFormData, setUserFormData] = React.useState({
    email: "",
    name: "",
    student_name: "",
    phone: "",
    class: "",
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let response = await submitFormApi({
        ...userFormData,
        source: "admission_page",
      });
    } catch (error) {}
  };
  const handleChange = (e) => {
    setUserFormData({ ...userFormData, [e.target.name]: e.target.value });
  };
  return (
    <Box
      sx={{
        padding: "4rem",
        "& .MuiTextField-root": { m: 1, width: "100%" },
      }}
      noValidate
      autoComplete="off"
    >
      <Container
        maxWidth="lg"
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
        }}
        component={"form"}
        onSubmit={handleSubmit}
      >
        <Box sx={{ width: "100%", maxWidth: 500 }}>
          <Typography
            variant="h1"
            gutterBottom
            sx={{
              fontSize: "48px",
              fontWeight: "700",
              lineHeight: "1em",
              letterSpacing: "-0.15px",
              textAlign: "center",
            }}
          >
            {FromAdmissionUtils.Admission_Form}
          </Typography>
          <Typography
            variant="h1"
            gutterBottom
            sx={{
              fontSize: "1.25rem",
              fontWeight: "400",
              lineHeight: "1em",
              letterSpacing: "0.15px",
              marginBottom: "4rem",
              textAlign: "center",
            }}
          >
            {FromAdmissionUtils.Shalom_International}
          </Typography>
        </Box>
        <TextField
          required
          id="outlined-required"
          label={FromAdmissionUtils.Email}
          name="email"
          value={userFormData.email}
          onChange={handleChange}
        />
        <TextField
          required
          id="outlined-required"
          label={FromAdmissionUtils.Your_Name_and_relation_with_the_child}
          name="name"
          value={userFormData.name}
          onChange={handleChange}
        />
        <TextField
          required
          id="outlined-required"
          label={FromAdmissionUtils.Students_Full_Name}
          name="student_name"
          value={userFormData.student_name}
          onChange={handleChange}
        />
        <TextField
          required
          id="outlined-required"
          label={FromAdmissionUtils.Parents_Contact_number}
          name="phone"
          value={userFormData.phone}
          onChange={handleChange}
        />
        <TextField
          required
          id="outlined-required"
          label={FromAdmissionUtils.Class_in_which_admission_is_sought}
          name="class"
          value={userFormData.class}
          onChange={handleChange}
        />
        <Stack spacing={2} direction="row">
          <Button type="submit" variant="outlined">
            {FromAdmissionUtils.SubmitForm}
          </Button>
        </Stack>
      </Container>
    </Box>
  );
};

export default AdmissionForm;

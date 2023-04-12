import * as React from "react";
import { Box, Container } from "@mui/material";
import TextField from "@mui/material/TextField";
import { FromAdmissionUtils } from "../../utils/text_utils/textUtils";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const AdmissionForm = () => {
  return (
    <Box
      component="form"
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
              textAlign:"center"
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
              textAlign:"center"
            }}
          >
            {FromAdmissionUtils.Shalom_International}
          </Typography>
        </Box>
        <TextField
          required
          id="outlined-required"
          label={FromAdmissionUtils.Email}
        />
        <TextField
          required
          id="outlined-required"
          label={FromAdmissionUtils.Your_Name_and_relation_with_the_child}
        />
        <TextField
          required
          id="outlined-required"
          label={FromAdmissionUtils.Students_Full_Name}
        />
        <TextField
          required
          id="outlined-required"
          label={FromAdmissionUtils.Parents_Contact_number}
        />
        <TextField
          required
          id="outlined-required"
          label={FromAdmissionUtils.Class_in_which_admission_is_sought}
        />
        <Stack spacing={2} direction="row">
          <Button variant="outlined">{FromAdmissionUtils.SubmitForm}</Button>
        </Stack>
      </Container>
    </Box>
  );
};

export default AdmissionForm;

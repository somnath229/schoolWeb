import React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import { details } from "../utils/text_utils/textUtils";
import ImportContactsIcon from "@mui/icons-material/ImportContacts";
import { styled } from "@mui/material/styles";
import HourglassTopIcon from "@mui/icons-material/HourglassTop";

const ContainerWrapper = styled("Container")(({ theme }) => ({
  padding: theme.spacing(1),
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
    width: "100%",
  },
  [theme.breakpoints.up("md")]: {
    flexDirection: "column",
    width: "100%",
  },
  [theme.breakpoints.up("lg")]: {
    flexDirection: "row",
    width: "100%",
  },
}));

const Details = () => {
  return (
    <ContainerWrapper
      maxWidth="false"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
        paddingBottom: "2rem",
        margin: "auto",
        background: "#f9f9f9",
      }}
    >
      <ContainerWrapper
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
          width: "30%",
          paddingTop: "1rem",
        }}
      >
        <AccountBalanceIcon sx={{ fontSize: "3rem", color: "#720404F2" }} />
        <Box>
          <Typography
            variant="h5"
            gutterBottom
            sx={{
              textAlign: "center",
              color: "#720404F2",
              fontSize: "2em",
              fontWeight: "bold",
            }}
          >
            {" "}
            {details.Affiliation}
          </Typography>
          <Typography
            variant="body2"
            gutterBottom
            sx={{ textAlign: "justify", textAlign: "center" }}
          >
            {
              details.Explore_wide_range_of_innovative_and_essential_courses_offered_by_ICSE_SSC__HSC_boards
            }
          </Typography>
        </Box>
      </ContainerWrapper>
      <ContainerWrapper
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "30%",
          paddingTop: "1rem",
        }}
      >
        <ImportContactsIcon sx={{ fontSize: "3rem", color: "#720404F2" }} />
        <Box>
          <Typography
            variant="h5"
            gutterBottom
            sx={{
              textAlign: "center",
              color: "#720404F2",
              fontSize: "1.8em",
              fontWeight: "bold",
            }}
          >
            {" "}
            {details.National_State_Curriculum}
          </Typography>
          <Typography
            variant="body2"
            gutterBottom
            sx={{ textAlign: "justify", textAlign: "center" }}
          >
            {
              details.Best_curriculum_in_accordance_with_the_recommendations_of_the_New_Education_Policy
            }
          </Typography>
        </Box>
      </ContainerWrapper>
      <ContainerWrapper
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "30%",
          paddingTop: "1rem",
        }}
      >
        <HourglassTopIcon sx={{ fontSize: "3rem", color: "#720404F2" }} />
        <Box>
          <Typography
            variant="h5"
            gutterBottom
            sx={{
              textAlign: "center",
              color: "#720404F2",
              fontSize: "1.8em",
              fontWeight: "bold",
            }}
          >
            {" "}
            {details.Expert_Teachers}
          </Typography>
          <Typography
            variant="body2"
            gutterBottom
            sx={{ textAlign: "justify", textAlign: "center" }}
          >
            {details.Preparatory_classes_for_NEET}
          </Typography>
        </Box>
      </ContainerWrapper>
    </ContainerWrapper>
  );
};

export default Details;

import React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import { details } from "../utils/text_utils/textUtils";
import ImportContactsIcon from '@mui/icons-material/ImportContacts';
import { styled } from "@mui/material/styles";
import HourglassTopIcon from '@mui/icons-material/HourglassTop';

const Detail = styled("Container")(({ theme }) => ({
  padding: theme.spacing(1),
  [theme.breakpoints.down("md")]: {
    flexDirection:"column"
  },
  [theme.breakpoints.up("md")]: {
    flexDirection:"column"
  },
  [theme.breakpoints.up("lg")]: {
    flexDirection:"row"
  },
}));
const DetailSub = styled("Container")(({ theme }) => ({
  padding: theme.spacing(1),
  [theme.breakpoints.down("md")]: {
    flexDirection:"column",
    width:"100%"
  },
  [theme.breakpoints.up("md")]: {
    flexDirection:"column",
    width:"100%"
  },
  [theme.breakpoints.up("lg")]: {
    flexDirection:"row",
    width:"100%"
  },
}));

const Details = () => {
  return (
    <Detail sx={{ display: "flex", justifyContent:"space-evenly", width:"100%", margin:"auto", background:"#E7E7E7"}}>
      <DetailSub
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "30%",
          paddingTop:"1rem"
        }}
      >
        <AccountBalanceIcon sx={{ fontSize: "3rem", color:"#720404F2"  }} />
        <Box>
        <Typography variant="h5" gutterBottom sx={{textAlign:"center", color: "#720404F2", fontSize:"2em", fontWeight:"bold"}}> {details.Affiliation}</Typography>
          <Typography variant="body2" gutterBottom  sx={{textAlign:"justify", textAlign:"center"}} >
          {details.ABody}
          </Typography>
        </Box>
      </DetailSub>
      <DetailSub
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "30%",
          paddingTop:"1rem"
        }}
      >
        <ImportContactsIcon sx={{ fontSize: "3rem", color:"#720404F2"  }} />
        <Box>
        <Typography variant="h5" gutterBottom sx={{textAlign:"center", color: "#720404F2", fontSize:"1.8em", fontWeight:"bold"}}> {details.NSCurriculum}</Typography>
          <Typography variant="body2" gutterBottom  sx={{textAlign:"justify", textAlign:"center"}} >
          {details.NSCBody}
          </Typography>
        </Box>
      </DetailSub>
      <DetailSub
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "30%",
          paddingTop:"1rem"
        }}
      >
        <HourglassTopIcon sx={{ fontSize: "3rem", color:"#720404F2"  }} />
        <Box>
        <Typography variant="h5" gutterBottom sx={{textAlign:"center", color: "#720404F2", fontSize:"1.8em", fontWeight:"bold"}}> {details.ExpTeachers}</Typography>
          <Typography variant="body2" gutterBottom  sx={{textAlign:"justify", textAlign:"center"}} >
          {details.ETBody}
          </Typography>
        </Box>
      </DetailSub>    
    </Detail>
  );
};

export default Details;

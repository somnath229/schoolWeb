import * as React from "react";
import { MotoUtils } from "../../utils/text_utils/textUtils";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import ListItemText from "@mui/material/ListItemText";
import ListItem from "@mui/material/ListItem";

const ContainerWrapper = styled("Container")(({ theme }) => ({
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
    width: "50%",
  },
}));

const Moto = () => {
  return (
    <ContainerWrapper
      sx={{
        display: "flex",
        alignItem: "center",
        justifyContent: "center",
        width:"100%",
        margin: "auto",
        padding:"2rem"
      }}
    >
      <ContainerWrapper
        sx={{ width: "50%", alignItem: "center", alignContent: "center" }}
      >
        <ListItem sx={{ width: "100%", poistion:"relative" }}>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            sx={{
              color: "#720404F2",
              textAlign: "right",
              width: "50%",
              fontSize: "45px",
              fontWeight: "500",
              margin:"0"
            }}
          >
            {MotoUtils.n300}
          </Typography>
          <ListItemText
            primary={MotoUtils.n300_Body}
            sx={{
              color: "black",
              fontWeight: "400",
              width: "50%",
              fontSize: "20px",
              lineHeight:"1.4em",
              paddingLeft:"2rem"
            }}
          />
        </ListItem>
        <ListItem sx={{ width: "100%", poistion:"relative" }}>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            sx={{
              color: "#720404F2",
              textAlign: "right",
              width: "50%",
              fontSize: "45px",
              fontWeight: "500",
              margin:"0"
            }}
          >
            {MotoUtils.n40}
          </Typography>
          <ListItemText
            primary={MotoUtils.n40_Body}
            sx={{
              color: "black",
              fontWeight: "400",
              width: "50%",
              fontSize: "20px",
              lineHeight:"1.4em",
              paddingLeft:"2rem"
            }}
          />
        </ListItem>
        <ListItem sx={{ width: "100%", poistion:"relative" }}>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            sx={{
              color: "#720404F2",
              textAlign: "right",
              width: "50%",
              fontSize: "45px",
              fontWeight: "500",
              margin:"0"
            }}
          >
            {MotoUtils.n100}
          </Typography>
          <ListItemText
            primary={MotoUtils.n100_Body}
            sx={{
              color: "black",
              fontWeight: "400",
              width: "50%",
              fontSize: "20px",
              lineHeight:"1.4em",
              paddingLeft:"2rem"
            }}
          />
        </ListItem>
        <ListItem sx={{ width: "100%", poistion:"relative" }}>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            sx={{
              color: "#720404F2",
              textAlign: "right",
              width: "50%",
              fontSize: "45px",
              fontWeight: "500",
              margin:"0"
            }}
          >
            {MotoUtils.n365}
          </Typography>
          <ListItemText
            primary={MotoUtils.n365_Body}
            sx={{
              color: "black",
              fontWeight: "400",
              width: "50%",
              fontSize: "20px",
              lineHeight:"1.4em",
              paddingLeft:"2rem"
            }}
          />
        </ListItem>
        
      </ContainerWrapper>
      <ContainerWrapper
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "50%",
        }}
      >
        <ListItem
          sx={{
            flexDirection: "column",
            alignItems: "center",
            alignContent: "center",
            width: "100%",
            poistion:"relative" 
          }}
        >
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            sx={{ color: "#720404F2", fontWeight: "700", fontSize: "30px" }}
          >
            {MotoUtils.Our_Motto}
          </Typography>
          <ListItemText
            primary={MotoUtils.Our_Motto_Body}
            sx={{ fontWeight: "400", fontSize: "20px", lineHeight: "1.4em" }}
          />
        </ListItem>
      </ContainerWrapper>
    </ContainerWrapper>
  );
};

export default Moto;

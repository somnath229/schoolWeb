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
    width: "60%",
  },
}));
const ListItemWrapper = styled("ListItem")(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
    paddingTop: "1rem",
  },
  [theme.breakpoints.up("md")]: {
    flexDirection: "column",
    paddingTop: "1rem",
  },
  [theme.breakpoints.up("lg")]: {
    flexDirection: "row",
    paddingRight: "1rem",
    paddingTop: "1rem",
  },
}));
const TypographyWrapper = styled("Typography")(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    textAlign:"left",
  },
  [theme.breakpoints.up("md")]: {
    textAlign:"left",
  },
  [theme.breakpoints.up("lg")]: {
    textAlign:"right",
  },
}));

const Moto = () => {
  return (
    <ContainerWrapper
      sx={{
        display: "flex",
        alignItem: "center",
        justifyContent: "center",
        width: "100%",
        margin: "auto",
        padding: "2rem",
        alignContent: "stretch",
      }}
    >
      <ContainerWrapper
        sx={{
          width: "50%",
          alignItem: "center",
          alignContent: "stretch",  
          // margin: "2rem 0",   
        }}
      >
        <ListItemWrapper
          sx={{
            width: "100%",
            poistion: "relative",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <TypographyWrapper
            gutterBottom
            variant="h5"
            component="div"
            sx={{
              color: "#720404F2",
              fontSize: "45px",
              fontWeight: "500",
              margin: "0",
              paddingRight:"1rem",
              fontFamily: "Roboto,Helvetica,Arial,sans-serif"
            }}
          >
            {MotoUtils.n300}
          </TypographyWrapper>
          <ListItemText
            primary={MotoUtils.n300_Body}
            sx={{
              color: "black",
              fontWeight: "400",
              width: "100%",
              fontSize: "20px",
              lineHeight: "1.4em",
              flexWrap: "wrap",
              textAlign: "left",
            }}
          />
        </ListItemWrapper>
        <ListItemWrapper
          sx={{
            width: "100%",
            poistion: "relative",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <TypographyWrapper
            gutterBottom
            variant="h5"
            component="div"
            sx={{
              color: "#720404F2",
              fontSize: "45px",
              fontWeight: "500",
              margin: "0",
              paddingRight:"1rem",
              fontFamily: "Roboto,Helvetica,Arial,sans-serif"
            }}
          >
            {MotoUtils.n40}
          </TypographyWrapper>
          <ListItemText
            primary={MotoUtils.n40_Body}
            sx={{
              color: "black",
              fontWeight: "400",
              width: "100%",
              fontSize: "20px",
              lineHeight: "1.4em",
            }}
          />
        </ListItemWrapper>
        <ListItemWrapper
          sx={{
            width: "100%",
            poistion: "relative",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <TypographyWrapper
            gutterBottom
            variant="h5"
            component="div"
            sx={{
              color: "#720404F2",
              fontSize: "45px",
              fontWeight: "500",
              margin: "0",
              paddingRight:"1rem",
              fontFamily: "Roboto,Helvetica,Arial,sans-serif"
            }}
          >
            {MotoUtils.n100}
          </TypographyWrapper>
          <ListItemText
            primary={MotoUtils.n100_Body}
            sx={{
              color: "black",
              fontWeight: "400",
              width: "100%",
              fontSize: "20px",
              lineHeight: "1.4em",
            }}
          />
        </ListItemWrapper>
        <ListItemWrapper
          sx={{
            width: "100%",
            poistion: "relative",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <TypographyWrapper
            gutterBottom
            variant="h5"
            component="div"
            sx={{
              color: "#720404F2",
              fontSize: "45px",
              fontWeight: "500",
              margin: "0",
              paddingRight:"1rem",
              fontFamily: "Roboto,Helvetica,Arial,sans-serif"
            }}
          >
            {MotoUtils.n365}
          </TypographyWrapper>
          <ListItemText
            primary={MotoUtils.n365_Body}
            sx={{
              color: "black",
              fontWeight: "400",
              width: "100%",
              fontSize: "20px",
              lineHeight: "1.4em",
            }}
          />
        </ListItemWrapper>
      </ContainerWrapper>
      <ContainerWrapper
        sx={{
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "center",
          width: "50%",
          padding: "1rem 0",
          margin: "0",
        }}
      >
        <ListItem
          sx={{
            flexDirection: "column",
            alignItems: "center",
            alignContent: "center",
            width: "100%",
            poistion: "relative",
            padding:"0"
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

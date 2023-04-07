import * as React from "react";
import { navbar } from "../utils/text_utils/textUtils";
import ListItem from "@mui/material/ListItem";
import Box from "@mui/material/Box";
import ListItemText from "@mui/material/ListItemText";
import CloseIcon from "@mui/icons-material/Close";
import MenuItem from "@mui/material/MenuItem";
import { styled } from "@mui/material/styles";
import MenuIcon from "@mui/icons-material/Menu";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Menu from "@mui/material/Menu";
import styles from "@/styles/Home.module.css";
import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state";

const Root = styled("Box")(({ theme }) => ({
  padding: theme.spacing(1),
  [theme.breakpoints.down("md")]: {
    display:"none",
    backgroundColor: "white",
    flexDirection: "column",
    alignItems: "flex-start",
    padding: "0",
    position: "absolute"
  },
  [theme.breakpoints.up("md")]: {
    display: "none",
    backgroundColor: "white",
    flexDirection: "column",
    alignItems: "flex-start",
    padding: "0",
  },
  [theme.breakpoints.up("lg")]: {
    color: "white",
    backgroundColor: "#720404F2",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    margin: "auto",
  },
}));

const Ham = styled("Box")(({ theme }) => ({
  padding: theme.spacing(1),
  [theme.breakpoints.down("md")]: {
    display: "block",
    textAlign: "center",
    backgroundColor: "#720404F2",
    color: "white",
  },
  [theme.breakpoints.up("md")]: {
    display: "block",
    textAlign: "center",
    backgroundColor: "#720404F2",
    color: "white",
  },
  [theme.breakpoints.up("lg")]: {
    display: "none",
  },
}));
// const MenuM = styled("Menu")(({ theme }) => ({
//   [theme.breakpoints.down("md")]: {
//     width:"55%",
//   },
//   [theme.breakpoints.up("md")]: {
//     width:"55%",
//   },
//   [theme.breakpoints.up("lg")]: {
//     width: "12%",
//   },
// }));

function Navbar() {
  function navi() {
    var x = document.getElementById("rootI");
    if (x.style.display === "flex") {
      x.style.display = "none";
    } else {
      x.style.display = "flex";
    }
  }

  const [hamI, setHamI] = React.useState("true");
  const handleClick1 = (event) => {
    navi();
    setHamI(!hamI);
  };
 
  return (
    <Box>
      <Ham>
      {hamI?<MenuIcon onClick={handleClick1} />: <CloseIcon onClick={handleClick1}/>}
      </Ham>

      <Root
        id="rootI"
        disableGutters
        // className = { hamI?styles.naviN :styles.navi}
        sx={{
          padding: "0.8rem",
          cursor: "pointer",
          margin: "auto",
        }}
      >
        <ListItem sx={{ width: "4%" }}>
          <ListItemText primary={navbar.Home} />
        </ListItem>
        <ListItem sx={{ width: "7%" }}>
          <ListItemText
            primary={navbar.VisionMission}
            sx={{ whiteSpace: "nowrap" }}
          />
        </ListItem>
        <ListItem sx={{ width: "5%" }}>
          <ListItemText primary={navbar.About} sx={{ whiteSpace: "nowrap" }} />
        </ListItem>
        <ListItem sx={{ width: "5%" }}>
          <ListItemText primary={navbar.Facilities} />
        </ListItem>
        <ListItem sx={{ width: "6%" }}>
          <ListItemText primary={navbar.Management} />
        </ListItem>
        <PopupState variant="popover" popupId="demo-popup-menu">
          {(popupState) => (
            <React.Fragment>
              <ListItem
                variant="contained"
                {...bindTrigger(popupState)}
                sx={{ width: "7%" }}
              >
                <ListItemText
                  primary={navbar.ForParents}
                  sx={{ whiteSpace: "nowrap" }}
                />
                <KeyboardArrowDownIcon
                  sx={{ color: "#fff", marginRight: ".6rem" }}
                />
              </ListItem>
              <Menu
                {...bindMenu(popupState)}
                sx={{ width: "12%", background: "none", marginTop: ".7rem" }}
              >
                <MenuItem
                  onClick={popupState.close}
                  sx={{ padding: ".5rem 1rem" }}
                >
                  {navbar.OurRules}
                </MenuItem>
                <MenuItem
                  onClick={popupState.close}
                  sx={{ padding: ".5rem 1rem" }}
                >
                  {navbar.ThingsToB}
                </MenuItem>
                <MenuItem
                  onClick={popupState.close}
                  sx={{ padding: ".5rem 1rem" }}
                >
                  {navbar.ParentD}
                </MenuItem>
              </Menu>
            </React.Fragment>
          )}
        </PopupState>
        <PopupState variant="popover" popupId="demo-popup-menu">
          {(popupState) => (
            <React.Fragment>
              <ListItem
                variant="contained"
                {...bindTrigger(popupState)}
                sx={{ width: "8%" }}
              >
                <ListItemText
                  primary={navbar.NewsEvents}
                  sx={{ whiteSpace: "nowrap" }}
                />
                <KeyboardArrowDownIcon sx={{ color: "#fff" }} />
              </ListItem>
              <Menu
                {...bindMenu(popupState)}
                sx={{ width: "12%", background: "none", marginTop: ".7rem" }}
              >                <MenuItem
                  onClick={popupState.close}
                  sx={{ padding: ".5rem 1rem" }}
                >
                  {navbar.Anounc}
                </MenuItem>
                <MenuItem
                  onClick={popupState.close}
                  sx={{ padding: ".5rem 1rem" }}
                >
                  {navbar.SchoolEv}
                </MenuItem>
                <MenuItem
                  onClick={popupState.close}
                  sx={{ padding: ".5rem 1rem" }}
                >
                  {navbar.ExamR}
                </MenuItem>
              </Menu>
            </React.Fragment>
          )}
        </PopupState>
        <ListItem sx={{ width: "5%" }}>
          <ListItemText primary={navbar.Admission} />
        </ListItem>
        <ListItem sx={{ width: "5%" }}>
          <ListItemText primary={navbar.Contact} />
        </ListItem>
      </Root>
    </Box>
  );
}
export default Navbar;

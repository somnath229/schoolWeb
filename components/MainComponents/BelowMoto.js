import * as React from "react";
import { BelowMotoUtils } from "../../utils/text_utils/textUtils";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import { Container } from "@mui/system";

const TypographyWrapper = styled("Typography")(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    width: "100%",
  },
  [theme.breakpoints.up("md")]: {
    width: "100%",
  },
  [theme.breakpoints.up("lg")]: {
    width: "50%",
  },
}));
const BelowMoto = () => {
  return (
    <Container
      maxWidth="false"
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        background: "#720404F2",
        color: "white",
        padding: "2rem",
      }}
    >
      <Typography
        variant="h4"
        sx={{ fontWeight: "700", fontSize: "37px", paddingBottom: "2rem" }}
      >
        {BelowMotoUtils.Shalom_International_School}
      </Typography>
      <TypographyWrapper
        variant="body1"
        sx={{ fontWeight: "400", fontSize: "20px" }}
      >
        {BelowMotoUtils.Shalom_International_School_About1}
      </TypographyWrapper>
      <TypographyWrapper
        variant="body1"
        sx={{ fontWeight: "400", fontSize: "20px" }}
      >
        {BelowMotoUtils.Shalom_International_School_About2}
      </TypographyWrapper>
      <TypographyWrapper
        variant="body1"
        sx={{ fontWeight: "400", fontSize: "20px" }}
      >
        {BelowMotoUtils.Shalom_International_School_About3}
      </TypographyWrapper>
    </Container>
  );
};

export default BelowMoto;

import React from "react";
import styled from "styled-components";
import Grid from "@material-ui/core/Grid";
import Logo from "./../assets/logo.png";

const StyledImg = styled.img`
  width: 125.4px;
  height: 132px;
  margin-bottom: 32px;
`;

export default function Page({ children }) {
  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
      style={{ minHeight: "100vh", maxWidth: "100%" }}
    >
      <StyledImg src={Logo} />
      <Grid item xs={12}>
        {children}
      </Grid>
    </Grid>
  );
}

import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

import Table from "./../components/Table";

// assets
import PLusIcon from "./../assets/PLusIcon";

const StyledHeader = styled.h2`
  direction: rtl;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 24px;
  color: ${({ theme }) => theme.palette.themeCommon.black.main};
`;

const StyledCreateButton = styled(Button)`
  width: 100%;
  background-color: ${({ theme }) => theme.palette.themeCommon.red.main};
  color: ${({ theme }) => theme.palette.themeCommon.white.main};
  &:hover {
    background-color: ${({ theme }) => theme.palette.themeCommon.red.light};
  }
`;

const StyledFetchButton = styled(Button)`
  width: 100%;
  background-color: transparent;
  color: ${({ theme }) => theme.palette.themeCommon.red.main};
`;

const StyledPLusIcon = styled(PLusIcon)`
  margin-left: 10px;
`;

function ShowPage() {
  const history = useHistory();
  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      style={{ width: "800px" }}
      spacing={1}
    >
      <Grid item xs={3}>
        <StyledCreateButton onClick={() => history.push("/create")}>
          ساخت اکانت جدید
          <StyledPLusIcon />
        </StyledCreateButton>
      </Grid>
      <Grid item xs={3}>
        <StyledFetchButton
          variant="outlined"
          color="secondary"
          onClick={() => history.push("/")}
        >
          دریافت اطلاعات از سرور
        </StyledFetchButton>
      </Grid>
      <Grid item xs={6}>
        <StyledHeader>داده ها </StyledHeader>
      </Grid>
      <Table ApiGetPage={false} />
    </Grid>
  );
}

export default ShowPage;

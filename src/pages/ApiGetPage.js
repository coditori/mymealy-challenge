import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Table from "./../components/Table";

const StyledButton = styled(Button)`
  background-color: transparent;
  height: 48px;
  color: ${({ theme }) => theme.palette.themeCommon.black.main};
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 16px;
  direction: rtl;
  position: fixed;
  left: 0;
  bottom: 0;
`;

function ApiGetPage() {
  const history = useHistory();
  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      style={{ width: "800px" }}
      spacing={1}
    >
      <Table ApiGetPage={true} />
      <StyledButton onClick={() => history.push("/show")}>
        بازگشت به صفحه قبلی
      </StyledButton>
    </Grid>
  );
}

export default ApiGetPage;

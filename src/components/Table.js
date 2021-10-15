import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import PropTypes from "prop-types";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import Modal from "./Modal";

// redux
import { fetchUsers } from "./../store/user/usersActions";

// assets
import EditIcon from "./../assets/EditIcon";
import TrashIcon from "./../assets/TrashIcon";

const StyledGridContainerHeader = styled(Grid)`
  padding: 0px 12px;
  direction: rtl;
  background-color: ${({ theme }) => theme.palette.themeCommon.white.light};
  border-bottom: 1px solid ${({ theme }) => theme.palette.themeCommon.gray.main};
`;

const StyledGridContainerRow = styled(Grid)`
  padding: 0px 12px;
  direction: rtl;
  background-color: ${({ theme }) => theme.palette.themeCommon.white.light};
`;

const StyeledTableHeaderText = styled.p`
  height: 56px;
  margin: 0;
  display: flex;
  align-items: center;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 16px;
  color: ${({ theme }) => theme.palette.themeCommon.black.light};
`;

const StyeledTableHeaderRow = styled.p`
  height: 56px;
  margin: 0;
  display: flex;
  align-items: center;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 16px;
  color: ${({ theme }) => theme.palette.themeCommon.black.light};
`;

const TableHeader = () => {
  return (
    <StyledGridContainerHeader container spacing={0}>
      <Grid item xs={2}>
        <StyeledTableHeaderText>نام و نام خوانوادگی</StyeledTableHeaderText>
      </Grid>
      <Grid item xs={2}>
        <StyeledTableHeaderText>شماره موبایل</StyeledTableHeaderText>
      </Grid>
      <Grid item xs={1}>
        <StyeledTableHeaderText>سن</StyeledTableHeaderText>
      </Grid>
      <Grid item xs={3}>
        <StyeledTableHeaderText>ایمیل</StyeledTableHeaderText>
      </Grid>
      <Grid item xs={2}>
        <StyeledTableHeaderText>تاریخ ایجاد</StyeledTableHeaderText>
      </Grid>
      <Grid item xs={1}>
        <StyeledTableHeaderText> </StyeledTableHeaderText>
      </Grid>
      <Grid item xs={1}>
        <StyeledTableHeaderText> </StyeledTableHeaderText>
      </Grid>
    </StyledGridContainerHeader>
  );
};

const TableRow = ({
  name,
  phoneNumber,
  age,
  email,
  date,
  id,
  handleOpen,
  setId,
  showIcons,
}) => {
  return (
    <StyledGridContainerRow container spacing={0}>
      <Grid item xs={2}>
        <StyeledTableHeaderRow>{name}</StyeledTableHeaderRow>
      </Grid>
      <Grid item xs={2}>
        <StyeledTableHeaderRow>{phoneNumber}</StyeledTableHeaderRow>
      </Grid>
      <Grid item xs={1}>
        <StyeledTableHeaderRow>{age}</StyeledTableHeaderRow>
      </Grid>
      <Grid item xs={3}>
        <StyeledTableHeaderRow>{email}</StyeledTableHeaderRow>
      </Grid>
      <Grid item xs={2}>
        <StyeledTableHeaderRow>{date}</StyeledTableHeaderRow>
      </Grid>
      {!showIcons && (
        <Grid item xs={1}>
          <StyeledTableHeaderRow>
            <Link to={`/edit/${id}`}>
              <IconButton>
                <EditIcon />
              </IconButton>
            </Link>
          </StyeledTableHeaderRow>
        </Grid>
      )}
      {!showIcons && (
        <Grid item xs={1}>
          <StyeledTableHeaderRow>
            <IconButton
              onClick={() => {
                handleOpen();
                setId(id);
              }}
            >
              <TrashIcon />
            </IconButton>
          </StyeledTableHeaderRow>
        </Grid>
      )}
    </StyledGridContainerRow>
  );
};

function Table({ ApiGetPage }) {
  const showIcons = ApiGetPage;
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);
  const [open, setOpen] = useState(false);
  const [id, setId] = useState("");

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch, open]);

  return (
    <Paper style={{ width: "100%" }} elevation={1}>
      <TableHeader />
      {!!users.length &&
        users.map((user) => {
          const { id, name, phoneNumber, age, email, date } = user;
          return (
            <TableRow
              key={id}
              id={id}
              name={name}
              phoneNumber={phoneNumber}
              age={age}
              date={date}
              email={email}
              handleOpen={handleOpen}
              setId={setId}
              showIcons={showIcons}
            />
          );
        })}
      <Modal open={open} handleClose={handleClose} id={id} />
    </Paper>
  );
}

Table.propTypes = {
  ApiGetPage: PropTypes.bool.isRequired,
};

export default Table;

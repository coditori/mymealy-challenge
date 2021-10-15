import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import styled from "styled-components";
import Modal from "@material-ui/core/Modal";
import Button from "@material-ui/core/Button";
import { deleteUser } from "./../requests/requests";

const modalStyle = {
  top: "50%",
  left: "50%",
  transform: `translate(-50%, -50%)`,
};

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: "360px",
    height: "158px",
    borderRadius: "4px",
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: "16px",
    direction: "rtl",
  },
}));

const StyledButton = styled(Button)`
  width: 80px;
  height: 32px;
  background-color: ${({ theme }) => theme.palette.themeCommon.red.main};
  color: ${({ theme }) => theme.palette.themeCommon.white.main};
  font-style: Bold;
  font-size: 16px;
  direction: rtl;
  &:hover {
    background-color: ${({ theme }) => theme.palette.themeCommon.red.light};
  }
  position: absolute;
  left: 16px;
  bottom: 16px;
`;

const StyledH2 = styled.h2`
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 16px;
  color: ${({ theme }) => theme.palette.themeCommon.black.light};
`;

const StyledP = styled.p`
  font-style: Regular;
  font-size: 16px;
`;

export default function SimpleModal({ open, handleClose, id }) {
  const classes = useStyles();

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <StyledH2>حذف ردیف</StyledH2>
      <StyledP>آیا از حذف این ردیف مطمئن هستید؟</StyledP>
      <StyledButton
        onClick={() => {
          deleteUser({ id });
          handleClose();
        }}
      >
        حذف
      </StyledButton>
    </div>
  );

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  );
}

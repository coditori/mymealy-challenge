import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import PropTypes from "prop-types";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

// requests
import { addUser, updateUser, getUser } from "./../requests/requests";

const StyledForm = styled.form`
  width: 432px;
  height: 480px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding: 16px;
`;

const StyledHeader = styled.h2`
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 24px;
  display: flex;
  align-items: center;
  text-align: right;
  margin-bottom: 22px;
  color: ${({ theme }) => theme.palette.themeCommon.black.main};
`;

const StyledLabel = styled.label`
  font-style: normal;
  font-weight: normal;
  font-size: 10px;
  line-height: 16px;
  display: flex;
  align-items: center;
  text-align: right;
  margin-bottom: 10px;
  color: ${({ theme }) => theme.palette.themeCommon.black.light};
`;

const StyeledInput = styled(TextField)`
  margin-bottom: 15px;
  width: 100%;
  direction: rtl;
`;

const StyeledButton = styled(Button)`
  width: 100%;
  background-color: ${({ theme }) => theme.palette.themeCommon.red.main};
  height: 48px;
  color: ${({ theme }) => theme.palette.themeCommon.white.main};
  font-style: Bold;
  font-size: 16px;
  direction: rtl;
  &:hover {
    background-color: ${({ theme }) => theme.palette.themeCommon.red.light};
  }
`;

function InputForm({ create, id }) {
  const history = useHistory();
  const [user, setUser] = useState({
    name: "",
    phoneNumber: "",
    age: "",
    email: "",
  });
  useEffect(() => {
    if (id) getUser({ id }).then((resp) => setUser(resp.data));
  }, [id]);

  return (
    <StyledForm>
      <StyledHeader>{create ? "فرم زیر را پر کنید" : "ویرایش"}</StyledHeader>
      <StyledLabel>نام و نام خانوادگی</StyledLabel>
      <StyeledInput
        variant="outlined"
        size="small"
        required
        value={user.name}
        onChange={(e) => setUser({ ...user, name: e.target.value })}
      />
      <StyledLabel>شماره موبایل</StyledLabel>
      <StyeledInput
        variant="outlined"
        size="small"
        required
        type="number"
        value={user.phoneNumber}
        onChange={(e) => setUser({ ...user, phoneNumber: e.target.value })}
      />
      <StyledLabel>سن</StyledLabel>
      <StyeledInput
        variant="outlined"
        size="small"
        required
        type="number"
        value={user.age}
        onChange={(e) => setUser({ ...user, age: e.target.value })}
      />
      <StyledLabel>ایمیل</StyledLabel>
      <StyeledInput
        variant="outlined"
        size="small"
        required
        value={user.email}
        onChange={(e) => setUser({ ...user, email: e.target.value })}
      />
      <StyeledButton
        onClick={() => {
          if (id) {
            updateUser(user).then(() => history.push("/show"));
          } else {
            addUser(user).then(() => history.push("/show"));
          }
        }}
      >
        {create ? "ساخت اکانت" : "ثبت اطلاعات"}
      </StyeledButton>
    </StyledForm>
  );
}

InputForm.propTypes = {
  create: PropTypes.func.isRequired,
  id: PropTypes.string,
};

export default InputForm;

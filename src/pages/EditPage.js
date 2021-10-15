import React from "react";
import PropTypes from "prop-types";
import Paper from "@material-ui/core/Paper";
import InputForm from "./../components/InputForm";

function EditPage({ match }) {
  const { id } = match.params;

  return (
    <Paper elevation={1}>
      <InputForm id={id} />
    </Paper>
  );
}

EditPage.propTypes = {
  match: PropTypes.object,
};

export default EditPage;

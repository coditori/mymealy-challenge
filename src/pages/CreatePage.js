import React from "react";
import Paper from "@material-ui/core/Paper";

import InputForm from "./../components/InputForm";

function CreatePage() {
  return (
    <Paper elevation={1}>
      <InputForm create />
    </Paper>
  );
}

export default CreatePage;

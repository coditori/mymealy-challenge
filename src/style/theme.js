import { createTheme } from "@material-ui/core/styles";

export const theme = createTheme({
  palette: {
    themeCommon: {
      black: {
        main: "#1E1B1B",
        light: "#666464",
      },
      red: {
        main: "#DE2D26",
        light: "#f08d89",
      },
      gray: {
        main: "#DBDBDB",
      },
      white: {
        main: "#FFFFFF",
        light: "rgba(219, 219, 219, 0.08)",
      },
    },
  },
  overrides: {
    MuiTextField: {
      root: {
        "& label.Mui-focused": {
          color: "#f08d89",
        },
        "& .MuiOutlinedInput-root": {
          "& fieldset": {
            borderColor: "#666464",
          },
          "&.Mui-focused fieldset": {
            borderColor: "#f08d89",
          },
        },
      },
    },
    MuiCssBaseline: {
      "@global": {
        h2: {
          margin: 0,
        },
      },
    },
  },
});

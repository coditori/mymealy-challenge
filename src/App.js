import AppRoute from "./appRoutes";
import { ThemeProvider, StylesProvider } from "@material-ui/core";
import { ThemeProvider as SCThemeProvider } from "styled-components";
import CssBaseline from "@material-ui/core/CssBaseline";
import { Provider } from "react-redux";
import store from "./store/store";

import { theme } from "./style/theme";

function App() {
  return (
    <Provider store={store}>
      <StylesProvider injectFirst>
        <ThemeProvider theme={theme}>
          <SCThemeProvider theme={theme}>
            <CssBaseline />
            <AppRoute />
          </SCThemeProvider>
        </ThemeProvider>
      </StylesProvider>
    </Provider>
  );
}

export default App;

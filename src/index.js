import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { persistor, store } from "./features/store";
import { PersistGate } from "redux-persist/integration/react";
import { unstable_createMuiStrictModeTheme as createTheme } from "@mui/material/styles";
import { ThemeProvider } from "@mui/material/styles";
import reportWebVitals from "./reportWebVitals";

const theme = createTheme({
  typography: {
    button: {
      textTransform: "none",
    },
    fontFamily: ["Poppins"].join(","),
    palette: {
      primary: "#FFFFFF",
      secondary: "4A4D4E",
    },
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

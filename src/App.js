import React, { useEffect } from "react";
import "./App.css";
import CovidData from "./components/CovidData";
import { getCovidData } from "./features/covidSlice";
import { useDispatch } from "react-redux";
import QuickData from "./components/QuickData";
import { Typography } from "@mui/material";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCovidData());
  }, [dispatch]);

  return (
    <div className="App">
      <header className="App-header">
        <Typography
          variant="h4"
          sx={{ fontWeight: "bolder", margin: "50px 0" }}
        >
          COVID-19 CORONAVIRUS TRACKER
        </Typography>
        <QuickData />
        <CovidData />
      </header>
    </div>
  );
}

export default App;

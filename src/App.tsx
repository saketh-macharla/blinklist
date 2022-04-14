import React from "react";
import logo from "./logo.svg";
import "./App.css";
import LandingPage from "./components/pages/Landing Page";
import Bookdetail from "./components/pages/BookDetailPage";

import customTheme from "./theme";
import { ThemeProvider } from "@emotion/react";

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      {/* </header> */}
      <ThemeProvider theme={customTheme}>
        <Bookdetail />
      </ThemeProvider>
    </div>
  );
}

export default App;

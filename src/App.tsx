import React from "react";
import logo from "./logo.svg";
import "./App.css";
import LandingPage from "./components/pages/Landing Page";
import Bookdetail from "./components/pages/BookDetailPage";
import ExplorePage from "./components/pages/ExplorePage/Index";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import customTheme from "./theme";
import { ThemeProvider } from "@emotion/react";
import { StyledEngineProvider } from "@mui/material/styles";
import { useAuth0 } from "@auth0/auth0-react";
import LoginPage from "./components/pages/LoginPage/LoginPage";
import { Typography } from "@mui/material";

function App() {
  const { isLoading, isAuthenticated } = useAuth0();
  if (isLoading) {
    return <Typography>Loading...</Typography>;
  }

  if (isAuthenticated) {
    return (
      <div className="App">
        <StyledEngineProvider injectFirst>
          <ThemeProvider theme={customTheme}>
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="bookDetailPage/:id" element={<Bookdetail />} />
                <Route path="explorePage" element={<ExplorePage />} />
              </Routes>
            </BrowserRouter>
          </ThemeProvider>
        </StyledEngineProvider>
      </div>
    );
  } else {
    return (
      <ThemeProvider theme={customTheme}>
        <LoginPage />
      </ThemeProvider>
    );
  }
}

export default App;

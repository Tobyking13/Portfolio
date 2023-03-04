import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavTabs from "./components/NavTabs/NavTabs";
import Home from "./components/pages/Home/Home";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Portfolio from "./components/pages/Portfolio/Portfolio";
import styled, { ThemeProvider } from "styled-components";
import MoonIcon from "./components/icons/moonIcon";
import SunIcon from "./components/icons/sunIcon"; 
import Switch from "./switch";

import "./style.css";

let StyledApp = styled.div`
  min-height: 100vh;
  background-color: ${(props) => props.theme.body};
  color: ${(props) => props.theme.title};
`;

const darkTheme = {
  body: "#1c1c1c",
  title: "#fff",
  subtitle: "#b6b6b6",
};

const lightTheme = {
  body: "#fff",
  title: "#1c1c1c",
  subtitle: "#b6b6b6",
};

function App() {
  const [theme, setTheme] = useState("dark");
  const isDarkTheme = theme === "dark";

  const toggleTheme = () => {
    setTheme(isDarkTheme ? "light" : "dark");
  };

  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <StyledApp>
        <Router>
          <div className="navbar">
            <NavTabs />
            {/* Wrap Route elements in a Routes component */}
            <Routes>
              {/* Define routes using the Route component to render different page components at different paths */}
              {/* Define a default route that will render the Home component */}
              <Route path="/" element={<Home />} />
              <Route path="about" element={<About />} />
              <Route path="portfolio" element={<Portfolio />} />
              {/* Define a route that will have descendant routes */}
              <Route path="contact/*" element={<Contact />} />
            </Routes>
            <div className="theme-switch">
            <SunIcon />
            <Switch toggleTheme={toggleTheme} isDarkTheme={isDarkTheme} />
            <MoonIcon />
            </div>
           
          </div>
        </Router>
      </StyledApp>
    </ThemeProvider>
  );
}

export default App;

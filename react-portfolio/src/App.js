import React, { useState } from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import NavTabs from "./components/NavTabs/NavTabs.js";
import Home from "./pages/Home/Home";
import About from "./pages/About/About.js";
import Contact from "./pages/Contact/Contact";
import Portfolio from "./pages/Portfolio/Portfolio";
import styled, { ThemeProvider } from "styled-components";
import MoonIcon from "./components/switch/icons/moonIcon";
import SunIcon from "./components/switch/icons/sunIcon";
import Switch from "./components/switch/switch.js";
import "./style.css";

let StyledApp = styled.div`
  min-height: 200vh;
  background-color: ${(props) => props.theme.body};
  color: ${(props) => props.theme.title};
`;

const darkTheme = {
  body: "#1c1c1c",
  title: "#FAF9F6",
};

const lightTheme = {
  body: "#FAF9F6",
  title: "#1c1c1c",
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
          <header>
            <NavTabs />
            </header>
            <div className="theme-switch">
            <SunIcon />
            <Switch toggleTheme={toggleTheme} isDarkTheme={isDarkTheme} />
            <MoonIcon />
          </div>
        
          
          <div>
          <hr className="my-4 header-hr" />
          </div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="portfolio" element={<Portfolio />} />
            <Route path="contact/*" element={<Contact />} />
          </Routes>
        </Router>
      </StyledApp>
    </ThemeProvider>
  );
}

export default App;

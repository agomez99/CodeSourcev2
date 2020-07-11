import React from "react";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "../src/Components/theme";
import { GlobalStyles } from "../src/Components/global";
import Toggle from "../src/Components/Toggle";
import { useDarkMode } from "../src/Components/DarkMode";
//import FormControlLabel from '@material-ui/core/FormControlLabel';

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import BlogsPage from "./Pages/BlogsPage";
import TutorialPage from "./Pages/TutorialPage";
import MainNavbar from "./Components/Navbar/Navbar";
import Post from "./Components/Post/Post";
import NoPage from "./Pages/NoPage/NoPage";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import About from "./Pages/About.js";
import Search from "./Pages/SearchPage"
import AuthState from "./context/authContext/AuthState";
import setToken from "./utils/setToken";

if (localStorage.token) {
  setToken(localStorage.token);
}

function App() {
  const [theme, toggleTheme, componentMounted] = useDarkMode();
  const themeMode = theme === "light" ? lightTheme : darkTheme;

  if (!componentMounted) {
    return <div />;
  }

  return (
    <ThemeProvider theme={themeMode}>
      <AuthState>
        <Router>
          <GlobalStyles />
          <MainNavbar />
            <label className="toggle-label"> {theme === "light" ? "light mode" : "dark mode"}!</label>
          <Toggle theme={theme} toggleTheme={toggleTheme} />
          <Switch>
            <Route exact path="/register" component={Register} />
            <Route exact path="/" component={Login} />

            <Route exact path="/blog" component={BlogsPage} />
            <Route path="/blog/:slug" render={Post} />
            <Route exact path="/tutorial-page" component={TutorialPage} />
            <Route exact path="/video" component={Search}/>
            <Route exact path="/about" component={About}/>
            <Route component={NoPage} />
          </Switch>
        </Router>
      </AuthState>
    </ThemeProvider>
  );
}

export default App;

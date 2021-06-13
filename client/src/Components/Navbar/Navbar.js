import React, { useContext, Fragment } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../context/authContext/authContext";
import image2 from "./red.png";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Typist from "react-typist";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import PersonIcon from "@material-ui/icons/Person";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";

import "./style.css";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const MainNavbar = () => {
  const classes = useStyles();

  const { logout, clearErrors, userAuth, user } = useContext(AuthContext);
  const handleLogout = () => {
    logout();
    clearErrors();
  };

  const userLinks = (
    <Fragment>
      <ul>
        <li>
          <Link to="/">Blogs</Link>
        </li>
        <span className="sm-hide">|</span>
        <li>
          <Link to="/tutorial-page">Tutorials</Link>
        </li>
        <span className="sm-hide">|</span>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li className="user"> Hello, {user && user.name} </li>
        <PersonIcon fontSize="small" />
        <span className="sm-hide">|</span>
        <li>
          <a href="/" onClick={handleLogout}>
            <span >Logout</span>
            <ExitToAppIcon fontSize="medium" />
          </a>
        </li>
      </ul>
    </Fragment>
  );

  const authLinks = (
    <Fragment>
      <ul>
        <li>
          <Link to="/register">Register</Link>
          <PersonAddIcon fontSize="large" />
        </li>
        <span className="sm-hide">|</span>
        <li>
          <Link to="/login">Login</Link>
          <PersonIcon fontSize="large" />
        </li>
      </ul>
    </Fragment>
  );

  return (
    <div>
      <AppBar position="static" className="app-bar">
        <Toolbar>
          <img src={image2} alt="" className="logo" />
          <Typography variant="h4" className={classes.title}>
            <Typist>
              <Typist.Delay ms={1000} />
              CodeSource
            </Typist>
          </Typography>
          <ul>
        <li>
          <Link to="/">Blogs</Link>
        </li>
        <span className="sm-hide">|</span>
        <li>
          <Link to="/tutorial-page">Tutorials</Link>
        </li>
        <span className="sm-hide">|</span>
        <li>
          <Link to="/about">About</Link>
        </li>
          </ul>
          {/* <div className="auth">{userAuth ? userLinks : authLinks}</div> */}
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default MainNavbar;

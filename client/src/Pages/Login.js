import React, { useState, useContext, useEffect } from "react";
import AuthContext from "../context/authContext/authContext";
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        CodeSource
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },
  image: {
    backgroundImage: 'url(https://i.ibb.co/N3YLvcr/screen.jpg)',
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const  Login = (props)=>{
  const classes = useStyles();
  const { loginUser, userAuth, errors, clearErrors } = useContext(AuthContext);

  useEffect(() => {
    if (userAuth) {
      props.history.push("/");
    }
  }, [userAuth, props.history]);

  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const { email, password } = user;

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
    clearErrors();
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    loginUser({ email, password });
    clearErrors();
  };

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
  
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign In
          </Typography>
          <form className="login-form"onSubmit={handleSubmit}>
        
          <TextField
          placeholder="Email"
          variant="outlined"
          label="Email Address"
          type="text"
          name="email"
          margin="normal"
          fullWidth
          value={email}
          onChange={handleChange}
          inputProps={{ "aria-label": "description" }}
        />
          <TextField
          placeholder="Password"
          variant="outlined"
          label="Password"
          margin="normal"
          fullWidth
          autoFocus
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
          inputProps={{ "aria-label": "description" }}
        />

           <Button 
          type="submit"
          value="Login"
          fullWidth
          variant="contained"
          color="primary"
        >
              Sign In
            </Button>
            <Grid container>
             
              <Grid item>
                <Link href="/register" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
            <Box mt={5}>
              <Copyright />
            </Box>
          </form>
          <div className="question">
        {errors !== null && (
          <button className="danger">
            {errors.msg ? errors.msg : errors.error[0].msg}
            <span onClick={() => clearErrors()}></span>
          </button>
        )}
        </div>
        </div>
      </Grid>
    </Grid>
  );
}

export default Login;

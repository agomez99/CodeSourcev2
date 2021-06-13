import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";
import { Button } from "@material-ui/core";
import { Linkedin, Twitter } from "@trejgun/material-ui-icons-social-networks";
import Container from "@material-ui/core/Container";
import EmailIcon from "@material-ui/icons/Email";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 2,
    marginLeft: "auto",
    marginRight: "auto",
  },

  button: {
    padding: 5,
    margin: 5,
    backgroundColor: "#D3D3D3",
  },
  avatar: {
    height: 200,
    width: 200,
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: 50,
  },
  container: {
    padding: "10px",
  },
  email: {
    height: 50,
    width: 50,
  },
  grid: {
    display: "block",
  },
  info: {
    display: "block",
    marginLeft: "33%",
    marginRight: "33%",
  },
  btngroup: {
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
  },
}));

export default function CenteredGrid() {
  const classes = useStyles();

  return (
    <div className="{classes.root}">
      <Grid container spacing={0}>
        <Grid className={classes.grid} item xs={12}>
          <Container className={classes.container}>
            <Avatar
              alt="Austine Gomez"
              className={classes.avatar}
              src="https://pbs.twimg.com/profile_images/1381265910607056900/5fLsuMmK_400x400.jpg"
            />
          </Container>
          <Grid>
            <div className={classes.info}>
              <p style={{ textAlign: "center" }}>Austine Gomez</p>
              <hr></hr>
              <div className={classes.btngroup}>
                <Button
                  variant="outlined"
                  className={classes.button}
                  href="https://www.linkedin.com/in/austine-gomez/"
                >
                  <Linkedin className={classes.icon} /> Linkedin
                </Button>
                <Button
                  variant="outlined"
                  className={classes.button}
                  href="https://twitter.com/austine_gomez"
                >
                  <Twitter className={classes.icon} /> Twitter
                </Button>

                <Button
                  variant="outlined"
                  className={classes.button}
                  href="mailto:@agdevelope@gmail.com"
                >
                  <EmailIcon className={classes.email}></EmailIcon>
                </Button>
              </div>
            </div>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

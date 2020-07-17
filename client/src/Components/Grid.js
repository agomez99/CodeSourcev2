import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import { Button } from "@material-ui/core";
import { Linkedin, Twitter } from "@trejgun/material-ui-icons-social-networks";
import Container from '@material-ui/core/Container';
import EmailIcon from '@material-ui/icons/Email';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 5,
  },
  paper: {
    textAlign: 'center',
    color: theme.palette.text.secondary,
    height: 650,
    margin: 100,
    padding: '0 30px',
    paddingTop: 50

  },
  button: {
    padding: 5,
    margin:5,
    backgroundColor: '#D3D3D3',

  },
  avatar: {
    height: 200,
    width: 200,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 50
  },
  container: {
    padding: '10px',

  },
  email: {
    height: 50,
    width: 50
  },
  grid:{
    display : 'block'
  }
}));

export default function CenteredGrid() {
  const classes = useStyles();

  return (
    <div className="{classes.root}">
      <Grid container spacing={0}>

        <Grid classNAme={classes.grid}item xs={12}>
          <Paper className={classes.paper}><h3>Austine Gomez</h3>
            <Container className={classes.container}>
              <Avatar alt="Austine Gomez" className={classes.avatar} src="https://media-exp1.licdn.com/dms/image/C4E03AQEOKRTNFRMwmg/profile-displayphoto-shrink_400_400/0?e=1599696000&v=beta&t=e_RtEQeRMgaTpJPSpbBHAS1eSylA0VEJgDqmwHTV6fs" />
            </Container>
            <Grid>
              <label>Back End</label>
              <hr></hr>
              <Button variant="outlined" className={classes.button} href="https://www.linkedin.com/in/austine-gomez/">
                <Linkedin className={classes.icon} /> Linkedin
              </Button>
              <Button variant="outlined" className={classes.button} href="https://twitter.com/austine_gomez">
                <Twitter className={classes.icon} /> Twitter
              </Button>
            </Grid>

            <Button variant="outlined" className={classes.button} href="mailto:@agdevelope@gmail.com">
              <EmailIcon className={classes.email} ></EmailIcon>
            </Button>

          </Paper>
        </Grid>


      </Grid>
    </div>
  );
}
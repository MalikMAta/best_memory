import React , {useEffect} from "react";
import { Container, AppBar, Typography, Grow, Grid } from "@material-ui/core";
import memories from "./images/memories.png";
import Posts from "./components/Posts/Posts";
import Form from "./components/Form/Form";
import useStyles from "./styles";
import {useDispatch} from 'react-redux'
import getPost from './actions/post'


const App = () => {
  const classes = useStyles();
  const dispatch = useDispatch();


  useEffect(() => {

      dispatch(getPost());

  },[dispatch])


  return (
    <Container maxidth="lg">
      <AppBar className={classes.appbar} position="static" color="inherit">
        <Typography className={classes.heading} variant="h2" align="center">
          Memories
          <img
            className={classes.image}
            src={memories}
            alt="memories"
            height="60"
            width="60"
          />
        </Typography>
      </AppBar>
      <Grow in>
      <Container>
          <Grid container justify="space-between" alignItems="stretch" spacing={3}>
            <Grid item xs={12} sm={7}>
              <Posts  />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form  />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
};

export default App;

import React from "react";
import "./App.scss";
import SideBar from "./components/SideBar";
import ImageAvatar from "./components/Avatar";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import SearchForm from "./components/SearchForm";
import FormWrapper from "./components/FormWrapper";
import AllPatients from "./components/AllPatients";
import { Switch, Route } from "react-router-dom";
import ModalForm from "./components/ModalForm";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary
  }
}));

function App() {
 
  const classes = useStyles();

  return (
      <div className="app-wrapper">
        <div className={classes.root}>
          <Grid container spacing={0}>
            <Grid item xs={2}>
              <div className={classes.root}></div>
              <ImageAvatar />
              <SideBar />
            </Grid>
            <Grid item xs={10}>
              <SearchForm />
              <Switch>
                <Route exact path="/">
                  <FormWrapper />
                </Route>
                <Route path="/all-patients">
                  <AllPatients />
                </Route>
                <Route path="/login">
                  <ModalForm />
                </Route>
              </Switch>
            </Grid>
          </Grid>
        </div>
      </div>
  );
}
export default App;

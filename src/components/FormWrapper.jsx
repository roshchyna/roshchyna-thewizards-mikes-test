import React from "react";

import { Grid  } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import FormAvatar from "./FormAvatar";
import Form from "./Form";
import { Redirect } from "react-router-dom";


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  formWrapper: {
    margin: "35px",
    background: "white"
  },
  mainButtonWrapper: {
    marginTop: 140
  },
  mainButton: {
    width: "80%",
    display: "flex",
    justifyContent: "flex-end",
    margin: "auto",
    "& .Mui-disabled": {
      width: "100%",
      border: "1px solid #C2CFE0",
      boxSizing: "border-box",
      borderRadius: 4,
      color: "#C2CFE0",
      letterSpacing: "0.01em",
      fontWeight: "600",
      fontSize: "13px",
      lineHeight: "19px",
      padding: "1% 15%",
      background: "white"
    }
  }
}));

const FormWrapper = () => {
  const classes = useStyles();
  const {
    root,
    formWrapper,
    formAvatar,
    formBasic,
  } = classes;
     if (!localStorage.getItem("token")) {
      return <Redirect to="/login" />
    }
  return (
    <div className={formWrapper}>
      <div className={root}>
        <Grid container spacing={1}>
          <Grid item xs={2}>
            <div className={formAvatar}>
              <FormAvatar />
            </div>
          </Grid>
          <Grid item xs={10}>
            <div className={formBasic}>
              <Form/>
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default FormWrapper;

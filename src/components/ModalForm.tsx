import React, { useRef, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Modal, TextField, Button } from "@material-ui/core";
import { useForm } from "react-hook-form";
import { useUserLoginMutation, Login } from "../generated/graphql";
import { useHistory, Redirect } from "react-router-dom";

const useStyles = makeStyles(theme => ({
  root: {
    height: 400,
    flexGrow: 1,
    minWidth: 300,
    transform: "translateZ(2)",
    "@media all and (-ms-high-contrast: none)": {
      display: "none"
    },
    "& .MuiTextField-root": {
      margin: theme.spacing(3),
      width: 150
    }
  },
  modal: {
    display: "flex",
    padding: theme.spacing(1),
    alignItems: "center",
    justifyContent: "center"
  },
  paper: {
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(4, 4, 3),
    textAlign: "center"
  },
  mainText: {
    fontSize: 17
  }
}));

const LoginForm = () => {
  const classes = useStyles();
  const rootRef = useRef(null);
  const { root, modal, mainText, paper } = classes;
  const history = useHistory();
  const [userLogin, { data }] = useUserLoginMutation();

  const onSubmit = (login: Login) => {
    userLogin({
      variables: { login }
    });
  };

  useEffect(() => {
    if (data?.Login) {
      localStorage.setItem("token", data.Login);
      history.push("/");
    }
  }, [data, history]);

  

  const { register, handleSubmit } = useForm<Login>();
  if (!!localStorage.getItem("token")) {
    return <Redirect to="/" />;
  }
  return (
    <div className={root} ref={rootRef}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Modal
          disablePortal
          disableEnforceFocus
          disableAutoFocus
          open
          aria-labelledby="server-modal-title"
          aria-describedby="server-modal-description"
          className={modal}
          container={() => rootRef.current}
        >
          <div className={paper}>
            <h3 id="server-modal-title" className={mainText}>
              Please, enter your Login and Password
            </h3>
            <TextField
              id="standard-login-input"
              label="Login"
              type="login"
              autoComplete="current-login"
              placeholder="root@nwms"
              defaultValue="root@nwms"
              name="Email"
              inputRef={register}
            />
            <TextField
              id="standard-password-input"
              label="Password"
              type="password"
              autoComplete="current-password"
              placeholder="root"
              defaultValue="root"
              name="Password"
              inputRef={register}
            />
            <Button type="submit">Login</Button>
          </div>
        </Modal>
      </form>
    </div>
  );
};

export default LoginForm;

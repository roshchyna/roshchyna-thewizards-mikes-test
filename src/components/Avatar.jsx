import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Avatar } from "@material-ui/core";
import avatarIcon from "./../static/images/avatarIcon.jpg";

const useStyles = makeStyles(theme => ({
  wrapper: {
   display: 'flex',
   flexDirection: 'column',
   alignItems: 'center',
   background: 'white',
   paddingBottom: '38px'
  },
  mainText: {
    color: '#109CF1',
    fontSize: '16px',
    marginBottom: '46px'
  },
  textWrapper: {
    display: "flex"
  },
  avatarTextBox: {
    padding: "10px 0px 0px 15px"
  },
  root: {
    display: "flex",
  },
  email: {
    color: "#818E9B",
    fontSize: "11px"
  },
  large: {
    width: theme.spacing(6),
    height: theme.spacing(6)
  },
  name: {
    fontSize: "14px"
  }
}));

const ImageAvatar = () => {
  const classes = useStyles();

  const {
    wrapper,
    root,
    large,
    avatarTextBox,
    name,
    email,
    textWrapper,
    mainText
  } = classes;

  return (
    <div className={wrapper}>
      <p className={mainText}>New Way Medical Supply</p>
      <div className={textWrapper}>
        <div className={root}>
          <Avatar className={large} alt="Remy Sharp" src={avatarIcon} />
        </div>
        <div className={avatarTextBox}>
          <p className={name}>Paul Kruger</p>
          <p className={email}>paul@dmecloud.io</p>
        </div>
      </div>
    </div>
  );
};

export default ImageAvatar;

import React from "react";
import Badge from "@material-ui/core/Badge";
import Avatar from "@material-ui/core/Avatar";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import { AccountCircleRounded, PanoramaOutlined } from "@material-ui/icons/";

const SmallAvatar = withStyles(theme => ({
  root: {
    width: 17,
    height: 13,
    borderRadius: "0!important",
    top: 40,
    right: 36
  }
}))(Avatar);

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    justifyContent: "center",
    height: "100%",
    mazWidth: 100,
    "& > *": {
      margin: "24px 0px 0px 20px"
    }
  },
  large: {
    width: theme.spacing(16),
    height: theme.spacing(16),
    color: "#192A3E",
    background: "#A3AAB2"
  },
  avatarBox: {
    width: "100px",
    height: "100px"
  }
}));

const FormAvatar = () => {
  const classes = useStyles();
  const { root, large, avatarBox } = classes;
  return (
    <div className={root}>
      <Badge
        overlap="circle"
        badgeContent={
          <SmallAvatar alt="Remy Sharp">
            <PanoramaOutlined />
          </SmallAvatar>
        }
      >
        <Avatar alt="Travis Howard" className={avatarBox}>
          <AccountCircleRounded className={large} />
        </Avatar>
      </Badge>
    </div>
  );
};

export default FormAvatar;

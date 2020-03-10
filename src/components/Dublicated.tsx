import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  CardContent,
  Typography,
  Card
} from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    minWidth: 275
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)"
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  }
});

const Dublicated = (props: any) => {
  const { FirstName, LastName, Height, Weight, SSN } = props.info;
  const classes = useStyles();
  const { root, title } = classes;
  return (
    <Card className={root}>
      <CardContent>
        <Typography className={title} color="textSecondary" gutterBottom>
          Dubblicated Patient
        </Typography>
        <Typography variant="h5">First Name: {FirstName}</Typography>
        <Typography variant="h5">First Name: {LastName}</Typography>
        <Typography variant="h5">Height: {Height}</Typography>
        <Typography variant="h5">Weight: {Weight}</Typography>
        <Typography variant="h5">Social Security Number: {SSN}</Typography>
      </CardContent>
    </Card>
  );
};

export default Dublicated;

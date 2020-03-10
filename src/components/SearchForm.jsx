import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Search from "@material-ui/icons/Search";
import { InputAdornment, IconButton } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    width: "100%",
    background: 'white',
    border: 'none'
  },
  inputForm: {
    placeholder: {
      paddingLeft: "20px",
    },
  },
}));

const SearchForm = () => {
  const classes = useStyles();

  const inputProps = {
    fullWidth: true,
    startAdornment: (
      <InputAdornment position="start">
        <IconButton size="small" disabled>
          <Search />
        </IconButton>
      </InputAdornment>
    ),
    disableUnderline: true,
  };
 
  return (
    <div className={classes.root}>
      <TextField
      
        className={classes.inputForm}
        InputProps={inputProps}
        id="standard-full-width"
        style={{ margin: 8 }}
        placeholder={'Search for patients, tickets or inventories...'}
        fullWidth
        margin="normal"
        InputLabelProps={{
          shrink: true
        }}
      />
    </div>
  );
};

export default SearchForm;



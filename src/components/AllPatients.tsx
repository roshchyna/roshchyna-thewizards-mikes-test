import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button
} from "@material-ui/core";
import { ArrowDropDown } from "@material-ui/icons";
import { useGetPatientsQuery } from "../generated/graphql";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  table: {
    maxWidth: "100%",
    fontSize: 13,
    marginLeft: 20
  },
  allPatientsWrapper: {
    margin: 25,
    fontSize: 13
  },
  button: {
    float: "right",
    marginBottom: 25
  },
  link: {
    textDecorationLine: "none"
  },
});

const AllPatients = () => {
  const classes = useStyles();
  const history = useHistory();
  const { table, allPatientsWrapper, button, link } = classes;

  const { data, error } = useGetPatientsQuery();

  useEffect(() => {
    if (error) {
      localStorage.clear();
      history.push("/login");
    }
  }, [error, history]);


  return (
    <div className={allPatientsWrapper}>
      <div className={button}>
        <Link className={link} to="/">
          <Button variant="contained" color="primary">
            Add new Patient
          </Button>
        </Link>
      </div>
      <TableContainer component={Paper}>
        <Table className={table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Last Name</TableCell>
              <TableCell align="inherit">First Name</TableCell>
              <TableCell align="inherit">Date of birth</TableCell>
              <TableCell align="inherit">Address</TableCell>
              <TableCell align="inherit">Tickets</TableCell>
              <TableCell align="inherit">Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {!!data &&
              data.Patients.map(patient => (
                <TableRow key={patient.ID}>
                  <TableCell component="th" scope="row">
                    {patient.LastName}
                  </TableCell>
                  <TableCell align="inherit">{patient.FirstName}</TableCell>
                  <TableCell align="inherit">{patient.DOB}</TableCell>
                  <TableCell align="inherit">{patient.Notes}</TableCell>
                  <TableCell align="inherit">{patient.SSN}</TableCell>
                  <TableCell align="inherit">
                    {patient.IsActive ? (
                      <Button
                        size="small"
                        color="primary"
                        endIcon={<ArrowDropDown />}
                        variant="contained"
                      >
                        Active
                      </Button>
                    ) : (
                      <Button
                        size="small"
                        color="secondary"
                        endIcon={<ArrowDropDown />}
                        variant="contained"
                      >
                        Inactive
                      </Button>
                    )}
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default AllPatients;

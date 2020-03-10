import React, { useMemo, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import {
  TextField,
  InputAdornment,
  MenuItem,
  Button,
  Grid,
  Select,
  FormControl,
  InputLabel
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useForm, Controller } from "react-hook-form";
import * as yup from "yup";
import {
  useSavePatientMutation,
  SavePatient,
  usePatientFormDependenciesLocationsQuery,
  usePatientFormDependenciesContractorsLazyQuery,
  PatientsFilterByDocument,
  PatientsFilterByQuery
} from "../generated/graphql";
import { useApolloClient } from "react-apollo";
import Dublicated from "./Dublicated";

const useStyles = makeStyles(theme => ({
  root: {
    "& .MuiTextField-root": {
      marginBottom: 16,
      width: "100%",
      fontSize: 11,
      "&:nth-child(3)": {
        marginBottom: "24px"
      }
    },
    "& .MuiInputBase-root": {
      width: "100%",
      fontSize: 11
    },
    "& .Mui-required": {
      color: "#818E9B",
      fontWeight: 500
    },
    "& .MuiInput-formControl": {
      fontSize: "11px"
    },
    "& .MuiGrid-item": {
      borderRight: "1px solid #EBEFF2",
      borderLeft: "1px solid #EBEFF2",
      borderSpacing: "7px 11px"
    },
    "& .MuiFormControl-root": {
      width: "100%"
    },
    "& .MuiButton-label": {
      fontSize: 10
    },
    margin: theme.spacing(4)
  },
  formBasicText: {
    fontSize: "15px",
    lineHeight: "22px",
    marginBottom: "23px"
  },
  formAdditionalText: {
    fontSize: "15px",
    lineHeight: "22px",
    marginBottom: "23px"
  },
  withTypeOfValue: {
    width: "200px"
  },
  errorText: {
    color: "red",
    fontSize: "10px",
    marginTop: "-15px"
  },
  mainButtonWrapper: {
    width: "50%"
  },
  mainButton: {
    width: "45%",
    display: "flex",
    margin: "auto",
    marginTop: "20px",
    marginBottom: "20px",
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
  },
  select: {
    marginBottom: 15
  }
}));

const Form = () => {
  const classes = useStyles();
  const client = useApolloClient();
  const history = useHistory();

  const [existingPatient, setExistingPatient] = useState<
    PatientsFilterByQuery["Patients"][0] | undefined
  >();

  const [isOpen, setIsOpen] = useState(false);

  const AddPatientSchema = useMemo(
    () =>
      yup.object().shape({
        FirstName: yup.string().required(),
        LastName: yup.string().required(),
        Height: yup
          .number()
          .max(12)
          .min(1)
          .required(),
        Weight: yup.number().required(),
        DOB: yup.mixed().required(),
        ActivatedAt: yup.mixed().required(),
        DeactivatedAt: yup.mixed().required(),
        SSN: yup
          .mixed()
          .notRequired()
          .test("is-duplicate", "duplicate!", async value => {
            const { data } = await client.query<PatientsFilterByQuery>({
              query: PatientsFilterByDocument,
              variables: { input: value }
            });
            setExistingPatient(data.Patients[0]);
            return data.Patients.length === 0;
          }),
        Notes: yup.mixed().notRequired(),
        LocationID: yup.number(),
        ContractorID: yup.number()
      }),
    [client, setExistingPatient]
  );

  const [savePatient] = useSavePatientMutation();

  const {
    data: formDependenciesLocations,
    error
  } = usePatientFormDependenciesLocationsQuery();

  const [
    fetchContractors,
    { data: formDependenciesContractors }
  ] = usePatientFormDependenciesContractorsLazyQuery();

  useEffect(() => {
    if (error) {
      localStorage.clear();
      history.push("/login");
    }
  }, [error, history]);

  const Locations = formDependenciesLocations?.Locations ?? [];
  const Contractors = formDependenciesContractors?.Contractors ?? [];

  const onSubmit = (input: SavePatient) => {
    savePatient({
      variables: {
        input: {
          ...input, 
          ActivatedAt: new Date(input.ActivatedAt),
          DeactivatedAt: new Date(input.DeactivatedAt),
          DOB: new Date(input.DOB),
          IsActive: input.IsActive = true, 
        }
      }
    });
    console.log(input);
  };

  const onClick = (e: any) => {
    e.preventDefault();
    setIsOpen(!isOpen);
  };

  const {
    root,
    formBasicText,
    formAdditionalText,
    withTypeOfValue,
    errorText,
    mainButtonWrapper,
    mainButton,
    select
  } = classes;

  const { register, errors, handleSubmit, control, formState, watch } = useForm<
    SavePatient
  >({
    mode: "onBlur",
    validationSchema: AddPatientSchema
  });

  const selectedLocationId = watch("LocationID");
  useEffect(() => {
    fetchContractors({ variables: { locationId: selectedLocationId } });
  }, [fetchContractors, selectedLocationId]);

  return (
    <div className={root}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={8}>
          <Grid item xs={6}>
            <div className={formBasicText}>Basic information</div>
            <div>
              <TextField
                required
                label="First name"
                placeholder="Patient first name"
                InputLabelProps={{
                  shrink: true
                }}
                name="FirstName"
                inputRef={register}
                defaultValue={"Misha"}
              />
              <TextField
                required
                label="Last name"
                placeholder="Patient last name"
                InputLabelProps={{
                  shrink: true
                }}
                name="LastName"
                inputRef={register}
                defaultValue={"Last name"}
              />
              <TextField
                label="Email"
                placeholder="Patient email"
                InputLabelProps={{
                  shrink: true
                }}
                defaultValue={"Email"}
              />
              <div className={formBasicText}>Primary delivery address</div>
              <TextField
                required
                label="City"
                placeholder="Patient City name"
                InputLabelProps={{
                  shrink: true
                }}
                defaultValue={"City"}
              />
              <TextField
                required
                label="State"
                placeholder="Patient state name"
                InputLabelProps={{
                  shrink: true
                }}
                defaultValue={"state"}
              />
              <TextField
                required
                label="Address"
                placeholder="Patient address"
                InputLabelProps={{
                  shrink: true
                }}
                defaultValue={"Adres"}
              />
              <TextField      
                label="Zip"
                placeholder="Patient zip"
                InputLabelProps={{
                  shrink: true
                }}
              />
              <TextField
                required
                label="Phone number"
                placeholder="Patient phone number"
                InputLabelProps={{
                  shrink: true
                }}
                defaultValue={"34539353"}
              />
              <TextField
                required
                label="Contact name"
                placeholder="Patient full name"
                InputLabelProps={{
                  shrink: true
                }}
                defaultValue={"Ololo"}
              />
            </div>
          </Grid>
          <Grid item xs={6}>
            <div className={formAdditionalText}>Additional information</div>
            <TextField
              className={withTypeOfValue}
              required
              type="number"
              label="Height"
              placeholder="Patient height (feet)"
              InputProps={{
                endAdornment: (
                  <InputAdornment position={"end"}>(inch)</InputAdornment>
                )
              }}
              InputLabelProps={{
                shrink: true
              }}
              name="Height"
              inputRef={register}
              defaultValue={8}
            />
            {errors.Height && (
              <p className={errorText}>Cannot be larger than 12 feet</p>
            )}
            <TextField
              className={withTypeOfValue}
              type="number"
              required
              label="Weight"
              placeholder="Patient weight (lbs)"
              InputProps={{
                endAdornment: (
                  <InputAdornment position={"end"}>(kg)</InputAdornment>
                )
              }}
              InputLabelProps={{
                shrink: true
              }}
              name="Weight"
              inputRef={register}
              defaultValue={2}
            />
            <TextField
              required
              id="date"
              label="Date of birth (mm/dd/yyyy)"
              type="date"
              InputLabelProps={{
                shrink: true
              }}
              name="DOB"
              inputRef={register}
              defaultValue="2017-05-24"
            />
            <TextField
              required
              id="Activated"
              label="Activated (mm/dd/yyyy)"
              type="date"
              InputLabelProps={{
                shrink: true
              }}
              name="ActivatedAt"
              inputRef={register}
              defaultValue="2018-05-24"
            />
            <TextField
              required
              id="Deactivated"
              label="Deactivated (mm/dd/yyyy)"
              type="date"
              InputLabelProps={{
                shrink: true
              }}
              name="DeactivatedAt"
              inputRef={register}
              defaultValue="2019-05-24"
            />
            <TextField
              required
              label="Social Security Number"
              placeholder="Patient social security number"
              InputLabelProps={{
                shrink: true
              }}
              name="SSN"
              inputRef={register}
              defaultValue={1231}
            />
            {errors.SSN && (
              <div className={errorText}>
                There is already a patient with this social security number.
                Patient details here.{" "}
                <Button onClick={onClick} color="primary" size="small">
                  {isOpen ? "Close Patient details" : "Patient details here"}
                </Button>
                {isOpen && <Dublicated info={existingPatient} />}
              </div>
            )}
            <TextField
              required
              label="Requesting Clinician"
              placeholder="Clinician name"
              InputLabelProps={{
                shrink: true
              }}
              defaultValue={"daad"}
            />
            <FormControl>
              <InputLabel id="demo-simple-select-required-label">
                Location
              </InputLabel>
              <Controller
                as={
                  <Select className={select}>
                    {Locations.map(option =>
                        <MenuItem key={`loc-${option.ID}`} value={option.ID}>
                          {option.City}, {option.State}
                        </MenuItem>
                    )}
                  </Select>
                }
                control={control}
                defaultValue={""}
                name="LocationID"
                inputRef={register}
              />
            </FormControl>
            <FormControl>
              <InputLabel id="demo-simple-select-required-label">
                Customer
              </InputLabel>
              <Controller
                as={
                  <Select>
                    {Contractors.map(option => (
                      <MenuItem
                        key={`contractor-${option.Name}`}
                        value={option.ID}
                      >
                        {option.Name}
                      </MenuItem>
                    ))}
                  </Select>
                }
                control={control}
                defaultValue={""}
                name="ContractorID"
                inputRef={register}
                placeholder={"Please"}
              />
            </FormControl>
            <TextField
              label="Patient notes"
              placeholder="Add patient notes"
              InputLabelProps={{
                shrink: true
              }}
              name="Notes"
              inputRef={register}
              defaultValue={"Ololo"}
            />
          </Grid>
          <div className={mainButtonWrapper}></div>
          <Button
            className={mainButton}
            variant="outlined"
            color="primary"
            type="submit"
            disabled={!formState.dirty}
          >
            Add patient
          </Button>
        </Grid>
      </form>
    </div>
  );
};

export default Form;

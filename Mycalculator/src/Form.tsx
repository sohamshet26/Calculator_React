import { Box, Button, TextField, Typography } from "@mui/material";
import { useState } from "react";
import {data} from "./assets/constants"
import { useFormik } from "formik";
import Grid from "@mui/material/Grid2";

const Form = () => {
  const formik = useFormik({
    initialValues: {
      Flname: "",
      Eadress: "",
      country: "",
    },
    onSubmit: () => {},
  });

  console.log(formik);

  const ap=fetch("https://www.swiggy.com/mapi/homepage/getCards?lat=21.99740&lng=79.00110");
  console.log(ap);
  ap.then((e)=>{
    const d=e.json();
    return d;
  }).then((f)=>{
    console.log(f,"this is json promise");
  }).catch((error)=>{console.log("the error is ",error)})

  return (
    <Box>
      <Grid container>
        <Grid
          size={{ lg: 8, md: 8, sm: 12, xs: 12 }}
          sx={{ bgcolor: "#9e9e9e" }}
        >
          <Box></Box>
        </Grid>
        <Grid
          container
          direction={"column"}
          rowSpacing={1}
          size={{ lg: 4, md: 4, sm: 12, xs: 12 }}
          pl={1}
          sx={{ position: "relative", top: "100px" }}
        >
          <Grid>
            <Typography variant="h6">Contact Information</Typography>
          </Grid>
          <form>
            <Grid container direction={"column"} rowSpacing={2}>
              <Grid>
                <Typography variant="subtitle1">First & last name</Typography>
                <TextField
                  required
                  value={formik.values.Flname}
                  name="Flname"
                  onChange={formik.handleChange}
                  id="outlined-required"
                  label="Required"
                  sx={{ width: "100%" }}
                ></TextField>
              </Grid>

              <Grid>
                <Typography variant="subtitle1">Email Adress</Typography>
                <TextField
                  required
                  value={formik.values.Eadress}
                  name="Eadress"
                  onChange={formik.handleChange}
                  id="outlined-required"
                  label="Required"
                  sx={{ width: "100%" }}
                ></TextField>
              </Grid>

              <Grid>
                <Typography variant="subtitle1">First & last name</Typography>
                <TextField
                  required
                  value={formik.values.country}
                  name="country"
                  onChange={formik.handleChange}
                  id="outlined-required"
                  label="Required"
                  sx={{ width: "100%" }}
                ></TextField>
              </Grid>

              <Grid>
                <Button
                  sx={{ bgcolor: "black", width: "100%" }}
                  variant="contained"
                >
                  Submit
                </Button>
              </Grid>
            </Grid>
          </form>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Form;

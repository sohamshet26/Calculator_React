import {
  Box,
  Typography,
  Button,
  Dialog,
  IconButton,
  Stack,
  Stepper,
  Step,
  StepLabel,
  TextField,
  Select,
  MenuItem,
  Paper,
  Autocomplete,
  Divider,
  Chip,
  Tooltip,
  FormHelperText,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import { FieldArray, Field } from "formik";
import { Formik, Form } from "formik";
import { GoalSelectionvalidation } from "./validation";
import * as React from "react";

const EmployeeNames = [
  "Jovi D'Silva",
  "Soham Shet",
  "Saurabh Parab",
  "Gaurav Kavnevadkar",
  "Madam Greeshma",
];

const Goals = [
  "Expert level achievement in at least one technology",
  "90% of Sprint deliveries on time",
  "Zero production defects, X UAT defects",
  "Innovation ideas - Min X no fo ideas presented in studio/infogen",
  "solve leetcodeweekly and learn git command",
];

const Skills = [
  "Analytical skills",
  "Coding best practices skills",
  "Basic Design Skills",
  "Communication skills",
  "Team Player",
  "All of the above",
  "xx",
  "yy",
  "zz",
  "kk",
  "mm",
];

const GOALS_COUNT = 1;
let Global_total = 100;
const Projectpoc = () => {
  const [ShowModal, setShowModal] = useState<boolean>(false);
  const [DisplayGoals, setDisplayGoals] = useState([]);
  const [DisplaySkills, setDisplaySkills] = useState([]);
  const [Total, setTotal] = useState(100);

  const initialValues = {
    employeename: "",
    goalsArray: [],
    Dgoals: [],
    weightageTotal: 0,
    skillsArray: [],
    skill: "",
    weightage1: 0,
    goal1: "",
    weightage2: 0,
    goal2: "",
  };
  const submit = (value: object) => {
    console.log(value);
  };

  function validategoal(value) {
    let error;
    if (value == "") {
      error = "Required";
    }
    return error;
  }

  function validateweightage(value) {
    let err;
    if (value == 0) {
      return (err = "Required");
    } else if (value < 1 || value > 100) {
      return (err = "not valid weightage");
    }
  }

  const helper = () => {
    if (100 - Total < 100) {
      return "Enter value 1 -" + Total;
    } else {
      return "";
    }
  };

  React.useEffect(() => {
    setTotal(Global_total);
  }, [DisplayGoals]);

  const openDialog = () => {
    setShowModal(true);
  };

  const closeDialog = () => {
    setShowModal(false);
  };

  const GoalSelectionSteps = ["Employee Selection", "Set Goals", "Set Skills"];

  return (
    <Box>
      <Button variant="outlined" onClick={openDialog}>
        setGoals
      </Button>
      <Dialog fullScreen open={ShowModal}>
        <Box sx={{ mx: 20, my: 3 }}>
          <Stack direction={"column"} spacing={10}>
            <Formik
              initialValues={initialValues}
              onSubmit={submit}
              validationSchema={GoalSelectionvalidation}
            >
              {({
                handleChange,
                values,
                setFieldValue,
                handleBlur,
                errors,
                touched,
                validateField,
              }) => (
                <Form>
                  <Grid container sx={{ justifyContent: "space-between" }}>
                    <Grid>
                      <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                        Add Goals
                      </Typography>
                    </Grid>

                    <Grid>
                      <Stack direction={"row"} spacing={2}>
                        <Button variant="outlined">
                          <Typography
                            sx={{ color: "#001FBA", fontWeight: "bold" }}
                            variant="body2"
                          >
                            Save as Draft
                          </Typography>
                        </Button>
                        <Button
                          variant="contained"
                          sx={{ bgcolor: "#001FBA" }}
                          type="submit"
                          onClick={() => {
                            console.log(errors);
                          }}
                        >
                          <Typography
                            sx={{ fontWeight: "bold" }}
                            variant="body2"
                          >
                            Save
                          </Typography>
                        </Button>
                        <IconButton onClick={closeDialog}>
                          <CloseIcon />
                        </IconButton>
                      </Stack>
                    </Grid>
                  </Grid>

                  <Grid container columnGap={5}>
                    <Grid>
                      <Stepper orientation="vertical">
                        {GoalSelectionSteps.map((label) => {
                          return (
                            <Step active={true} key={label}>
                              <StepLabel>
                                <Typography sx={{ fontWeight: "bold" }}>
                                  {label}
                                </Typography>
                              </StepLabel>
                            </Step>
                          );
                        })}
                      </Stepper>
                    </Grid>
                    <Grid size={{ lg: 7 }}>
                      <Grid container direction={"column"} rowGap={5}>
                        <Grid>
                          <Paper elevation={3} sx={{ p: 2 }}>
                            <Stack direction="column" spacing={2}>
                              <Typography variant="h6">
                                Select Employee
                              </Typography>
                              <Autocomplete
                                name="employeename" //Typescript error
                                options={EmployeeNames}
                                value={values.employeename}
                                onChange={(e, values) => {
                                  setFieldValue("employeename", values);
                                }}
                                renderInput={(params) => (
                                  <TextField {...params} />
                                )}
                              ></Autocomplete>
                              {errors.employeename && (
                                <Typography color="error">
                                  please select employee name
                                </Typography>
                              )}
                            </Stack>
                          </Paper>
                        </Grid>

                        <Grid>
                          <FieldArray
                            name="goalsArray"
                            render={(arrayHelpers) => (
                              <Paper elevation={3} sx={{ p: 2 }}>
                                <Stack direction="column" spacing={2}>
                                  <Grid
                                    container
                                    sx={{ justifyContent: "space-between" }}
                                  >
                                    <Typography variant="h6">
                                      Select Goals
                                    </Typography>
                                    <Button
                                      onClick={() => {
                                        validateField("goal1");
                                        validateField("weightage1");
                                        validateField("goal2");
                                        validateField("weightage2");
                                        if (
                                          (values.goal1 != "" &&
                                            values.weightage1 != 0) ||
                                          (values.goal2 != "" &&
                                            values.weightage2 != 0)
                                        ) {
                                          if (
                                            values.goal2 == "" &&
                                            values.weightage2 == 0
                                          ) {
                                            const vali1 =
                                              values.Dgoals.includes(
                                                values.goal1
                                              );
                                            if (
                                              values.weightage1 >= 1 &&
                                              values.weightage1 <= 100 &&
                                              100 - Total + values.weightage1 <=
                                                100 &&
                                              vali1 == false
                                            ) {
                                              Global_total =
                                                Total - values.weightage1;
                                              setFieldValue(
                                                `goalsArray.${DisplayGoals.length}.goal`,
                                                values.goal1
                                              );
                                              setFieldValue(
                                                `goalsArray.${DisplayGoals.length}.weightage`,
                                                values.weightage1
                                              );
                                              setFieldValue("Dgoals", [
                                                ...values.Dgoals,
                                                values.goal1,
                                              ]);

                                              const updated1 = [
                                                ...values.goalsArray,
                                                {
                                                  goal: values.goal1,
                                                  weightage: values.weightage1,
                                                },
                                              ];

                                              console.log(
                                                GOALS_COUNT +
                                                  values.goalsArray.length,
                                                "length"
                                              );
                                              setFieldValue(
                                                "weightageTotal",
                                                values.weightageTotal +
                                                  values.weightage1
                                              );
                                              setFieldValue("goal1", "");
                                              setFieldValue("goal2", "");
                                              setFieldValue("weightage1", 0);
                                              setFieldValue("weightage2", 0);
                                              setDisplayGoals(updated1);
                                            }
                                          } else {
                                            const vali2 =
                                              values.Dgoals.includes(
                                                values.goal2
                                              );
                                            if (
                                              values.weightage2 >= 1 &&
                                              values.weightage2 <= 100 &&
                                              100 - Total + values.weightage2 <=
                                                100 &&
                                              vali2 == false
                                            ) {
                                              Global_total =
                                                Total - values.weightage2;
                                              setFieldValue(
                                                `goalsArray.${DisplayGoals.length}.goal`,
                                                values.goal2
                                              );
                                              setFieldValue(
                                                `goalsArray.${DisplayGoals.length}.weightage`,
                                                values.weightage2
                                              );

                                              const updated2 = [
                                                ...values.goalsArray,
                                                {
                                                  goal: values.goal2,
                                                  weightage: values.weightage2,
                                                },
                                              ];
                                              console.log(
                                                GOALS_COUNT +
                                                  values.goalsArray.length,
                                                "length"
                                              );
                                              setFieldValue(
                                                "weightageTotal",
                                                values.weightageTotal +
                                                  values.weightage2
                                              );
                                              setFieldValue("goal1", "");
                                              setFieldValue("goal2", "");
                                              setFieldValue("weightage1", 0);
                                              setFieldValue("weightage2", 0);
                                              setDisplayGoals(updated2);
                                            }
                                          }
                                        }
                                      }}
                                      variant="outlined"
                                    >
                                      <Typography>Add</Typography>
                                    </Button>
                                  </Grid>

                                  <Grid
                                    container
                                    sx={{ justifyContent: "space-between" }}
                                  >
                                    <Grid>
                                      <Field
                                        name="goal1"
                                        validate={validategoal}
                                      >
                                        {({ field }) => (
                                          <Select
                                            {...field}
                                            id="select-goals"
                                            name="goal1"
                                            value={values.goal1}
                                            onChange={(e) => {
                                              setFieldValue(
                                                "goal1",
                                                e?.target?.value
                                              );
                                            }}
                                            onClick={() => {
                                              setFieldValue("goal2", "");
                                              setFieldValue("weightage2", "");
                                            }}
                                          >
                                            {Goals.map((goal) => {
                                              return (
                                                <MenuItem value={goal}>
                                                  {goal}
                                                </MenuItem>
                                              );
                                            })}
                                          </Select>
                                        )}
                                      </Field>

                                      {errors.goal1 &&
                                        values.goalsArray.length < 8 && (
                                          <Typography color="error">
                                            please select goal
                                          </Typography>
                                        )}
                                    </Grid>

                                    <Grid>
                                      <Field
                                        name="weightage1"
                                        validate={validateweightage}
                                      >
                                        {({ field }) => (
                                          <TextField
                                            {...field}
                                            id="weightage"
                                            placeholder="Weightage"
                                            name="weightage1"
                                            type="number"
                                            variant="outlined"
                                            value={values.weightage1}
                                            onChange={handleChange}
                                            onClick={() => {
                                              setFieldValue("goal2", "");
                                              setFieldValue("weightage2", "");
                                            }}
                                            slotProps={{
                                              htmlInput: {
                                                min: 0,
                                                max: Total,
                                              },
                                            }}
                                            helperText={helper()}
                                          />
                                        )}
                                      </Field>
                                      {errors.weightage1 == "Required" &&
                                        values.goalsArray.length < 8 && (
                                          <Typography color="error">
                                            Please insert the weightage
                                          </Typography>
                                        )}
                                      {errors.weightage1 ==
                                        "not valid weightage" && (
                                        <Typography color="error">
                                          Not vaid weightage
                                        </Typography>
                                      )}
                                    </Grid>
                                  </Grid>

                                  <Divider>
                                    <Chip label="OR" size="small" />
                                  </Divider>

                                  <Grid sx={{ display: "flex" }}>
                                    <Grid sx={{ flexGrow: "1" }}>
                                      <Field
                                        name="goal2"
                                        validate={validategoal}
                                      >
                                        {({ field }) => (
                                          <TextField
                                            id="select-goals"
                                            name="goal2"
                                            value={values.goal2}
                                            placeholder="Type here"
                                            onChange={(e) => {
                                              setFieldValue(
                                                "goal2",
                                                e?.target?.value
                                              );
                                            }}
                                            onClick={() => {
                                              setFieldValue("goal1", "");
                                              setFieldValue("weightage1", "");
                                            }}
                                          ></TextField>
                                        )}
                                      </Field>
                                      {errors.goal2 &&
                                        values.goalsArray.length < 8 && (
                                          <Typography color="error">
                                            Please insert goal
                                          </Typography>
                                        )}
                                    </Grid>
                                    <Grid>
                                      <Field
                                        name="weightage2"
                                        validate={validateweightage}
                                      >
                                        {({ field }) => (
                                          <TextField
                                            onChange={handleChange}
                                            id="weightage"
                                            name="weightage2"
                                            placeholder="Weightage"
                                            type="number"
                                            value={values.weightage2}
                                            helperText={helper()}
                                            slotProps={{
                                              htmlInput: {
                                                min: 0,
                                                max: Total,
                                              },
                                            }}
                                            onClick={() => {
                                              setFieldValue("goal1", "");
                                              setFieldValue("weightage1", "");
                                            }}
                                          ></TextField>
                                        )}
                                      </Field>
                                      {errors.weightage2 == "Required" &&
                                        values.goalsArray.length < 8 && (
                                          <Typography color="error">
                                            Please insert the weightage
                                          </Typography>
                                        )}
                                      {errors.weightage2 ==
                                        "not valid weightage" && (
                                        <FormHelperText>
                                          Not valid weightage
                                        </FormHelperText>
                                      )}
                                    </Grid>
                                  </Grid>
                                </Stack>
                              </Paper>
                            )}
                          />
                        </Grid>

                        <Grid>
                          <Grid container direction={"column"}>
                            <Grid container justifyContent={"space-between"}>
                              <Typography>Goals</Typography>
                              <Typography>Weightage</Typography>
                            </Grid>
                            <Grid
                              container
                              direction={"column"}
                              sx={{ bgcolor: "#eeeeee" }}
                              rowGap={2}
                              width={"100%"}
                            >
                              {DisplayGoals.length == 0 ? (
                                <Grid
                                  container
                                  sx={{ justifyContent: "center" }}
                                >
                                  <Grid
                                    height={"300px"}
                                    sx={{ position: "relative", top: "150px" }}
                                  >
                                    <Typography variant="h5">
                                      No Goals Added Yet!
                                    </Typography>
                                  </Grid>
                                </Grid>
                              ) : (
                                DisplayGoals.map((d, index) => {
                                  return (
                                    <Tooltip
                                      title={
                                        <Button
                                          varaint="outlined"
                                          onClick={() => {
                                            console.log(
                                              values.goalsArray[index].weightage
                                            );
                                            Global_total =
                                              Total +
                                              values.goalsArray[index]
                                                .weightage;
                                            setFieldValue(
                                              "weightageTotal",
                                              values.weightageTotal -
                                                values.goalsArray[index]
                                                  .weightage
                                            );

                                            const UpdatedDisplayGoals =
                                              DisplayGoals.filter((el, i) => {
                                                if (index != i) {
                                                  return el;
                                                }
                                              });
                                            setFieldValue("goalsArray",UpdatedDisplayGoals)
                                            setDisplayGoals(
                                              UpdatedDisplayGoals
                                            );
                                          }}
                                        >
                                          Remove
                                        </Button>
                                      }
                                      placement={"right"}
                                    >
                                      <Grid
                                        container
                                        direction={"row"}
                                        sx={{
                                          justifyContent: "space-between",
                                          m: 2,
                                        }}
                                        onMouseOver={() => {
                                          console.log("cliked");
                                        }}
                                      >
                                        <Typography>{d?.goal}</Typography>
                                        <Typography>{d?.weightage}</Typography>
                                      </Grid>
                                    </Tooltip>
                                  );
                                })
                              )}
                            </Grid>

                            {DisplayGoals.length > 8 &&
                              errors.goalsArray == "Goals Exceeded" && (
                                <Typography color="error">
                                  maximum goals must be 8
                                </Typography>
                              )}
                            {errors.goalsArray ==
                              "not satisfing minnimum goals" &&
                              DisplayGoals.length < 5 && (
                                <Typography color="error">
                                  minimum goals must be 5
                                </Typography>
                              )}
                          </Grid>
                        </Grid>
                        {DisplayGoals.length != 0 && (
                          <Grid
                            container
                            sx={{
                              bgcolor: "#eeeeee",
                              justifyContent: "space-between",
                              p: 1,
                            }}
                            width={"100%"}
                          >
                            <Typography>Total</Typography>
                            <Typography>{100 - Total}/100</Typography>
                          </Grid>
                        )}
                        {errors.weightageTotal && DisplayGoals.length != 0 && (
                          <Typography color="error">
                            please make total to 100
                          </Typography>
                        )}

                        <Grid sx={{ bgcolor: "#eeeeee" }}>
                          <Paper elevation={3} sx={{ p: 2 }}>
                            <Stack spacing={2}>
                              <Typography variant="h6">Skills</Typography>
                              <Select
                                name="skill"
                                id="skill"
                                value={values.skill}
                                onChange={(e) => {
                                  const includeCheckSkill =
                                    values.skillsArray.includes(e.target.value);
                                  if (includeCheckSkill == false) {
                                    setFieldValue("skill", e.target.value);
                                    setFieldValue(
                                      `skillsArray.${DisplaySkills.length}`,
                                      e.target.value
                                    );
                                    setDisplaySkills([
                                      ...DisplaySkills,
                                      e.target.value,
                                    ]);
                                  }
                                }}
                              >
                                <MenuItem disabled value="">
                                  <em>Select Skills</em>
                                </MenuItem>
                                {Skills.map((skill) => {
                                  return (
                                    <MenuItem value={skill}>{skill}</MenuItem>
                                  );
                                })}
                              </Select>
                            </Stack>
                          </Paper>
                        </Grid>

                        {DisplaySkills.length != 0 ? (
                          <Grid container direction={"column"} rowGap={2}>
                            <Grid>
                              <Typography>Skills</Typography>
                            </Grid>
                            <Grid
                              container
                              sx={{ bgcolor: "#eeeeee", p: 2 }}
                              spacing={2}
                            >
                              {DisplaySkills.map((skill, index) => {
                                return (
                                  <Chip
                                    variant="outlined"
                                    label={skill}
                                    onDelete={() => {
                                      const UpdatedSkillsList =
                                        DisplaySkills.filter(
                                          (skl, taregtedindex) => {
                                            if (index != taregtedindex) {
                                              return skl;
                                            }
                                          }
                                        );
                                      setFieldValue(
                                        "skillsArray",
                                        UpdatedSkillsList
                                      );
                                      setDisplaySkills(UpdatedSkillsList);
                                    }}
                                  ></Chip>
                                );
                              })}
                            </Grid>
                          </Grid>
                        ) : (
                          <Grid
                            container
                            sx={{
                              bgcolor: "#eeeeee",
                              width: "100%",
                              height: "300px",
                              justifyContent: "center",
                            }}
                          >
                            <Typography
                              sx={{ position: "relative", top: "150px" }}
                              variant="h5"
                            >
                              No Skills Added Yet!
                            </Typography>
                          </Grid>
                        )}

                        {errors.skillsArray ==
                          "not satisfing minimum skills" && (
                          <Typography color="error">
                            Minimum skill must be 5
                          </Typography>
                        )}
                        {errors.skillsArray == "skills Exceeded" && (
                          <Typography color="error">
                            Maximum skills must be 8
                          </Typography>
                        )}
                      </Grid>
                    </Grid>
                  </Grid>
                </Form>
              )}
            </Formik>
          </Stack>
        </Box>
      </Dialog>
    </Box>
  );
};

export default Projectpoc;

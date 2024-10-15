import * as Yup from "yup";

export const GoalSelectionvalidation = Yup.object().shape({
  employeename: Yup.string().required("Employee Name is required").min(1),
  skillsArray:Yup.array().required().min(5,"not satisfing minimum skills").max(8,"skills Exceeded"),
  weightageTotal:Yup.number().oneOf([100],"total is less"),
  goalsArray: Yup.array()
    .of(
      Yup.object().shape({
        goal: Yup.string().required("it must contain goal"),
        weightage: Yup.string().required("It must contain weightage"),
      })
    )
    .required("This should contains goals")
    .min(5, "not satisfing minnimum goals")
    .max(8, "Goals Exceeded"),
});

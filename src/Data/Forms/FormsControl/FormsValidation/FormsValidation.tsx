import * as Yup from "yup";
import { FormValidationProp, TooltipValidationProp } from "../../../../Types/Forms/FormsControl/FormValidation/FormValidation";

export const tooltipFormSubTitle =[ {
    text: "If your form layout allows it, you can swap the",
    code: `.{'valid|invalid'}`,
  },
  {
    text: "-feedback classes for",
    code: `.{'valid|invalid'}`,
  },
  {
    text: "-tooltip classes to display validation feedback in a styled tooltip. Be sure to have a parent with",
    code: "position: relative",
  },
  { text: "on it for tooltip positioning." },
]

export const browserDefaultSubTitle = [
    {
        text: `Not interested in custom validation feedback messages or writing JavaScript to change form behaviors? Depending on your browser and OS,While these feedback styles cannot be styled with CSS, you can still customize the feedback text through JavaScript.`,
    }
]

export const validationFormSubTitle = [
    {
      text: "Custom feedback styles apply custom colors, borders, focus styles, and background icons to better communicate feedback.Background icons for",
      code: `<select>`,
    },
    {
      text: "s are only available with ",
      code: `.form-select`,
    },
    {
      text: "and not",
      code: ".form-control.",
    },
  ];

 export const tooltipValidationStateList = ["U.K", "India", "Thailand", "Newyork"];

 export const tooltipInitialValue: TooltipValidationProp = { firstname: "", lastname: "", username: "", city: "", state: "", zip: "" };

 export const tooltipValidationSchema = Yup.object().shape({
  firstname: Yup.string().min(2).required(),
  lastname: Yup.string().min(2).required(),
  username: Yup.string().min(2).required(),
  city: Yup.string().min(2).required(),
  state: Yup.string().min(2).required(),
  zip: Yup.string().min(2).required(),
});

export const validationFormInitialValue: FormValidationProp = { firstname: "", password: "", state: "", city: "", zip: "", payment: "", theme: "", file: "", description: "", terms: [] };

export const formValidationSchema = Yup.object().shape({
  firstname: Yup.string().required("Please enter your valid"),
  password: Yup.string().required("Please enter your valid password"),
  state: Yup.string().required("Please select a valid state."),
  city: Yup.string().required("Please provide a valid city."),
  zip: Yup.string().required("Please provide a valid zip."),
  payment: Yup.string().required(),
  theme: Yup.string().required("Invalid select feedback"),
  file: Yup.string().required("Invalid form file selected"),
  description: Yup.string().required("Please enter a message in the textarea."),
  terms: Yup.array().min(1),
});

export const validationFormStateList = ["Choose...", "U.K", "India", "Thailand", "Newyork"];

export const validationStateList = ["Cuba", "Tivo", "Wingo"];

export const validationRadioList = [
  {
    id: 1,
    text: "MasterCard",
  },
  {
    id: 2,
    text: "Visa",
  }
]
import { FormikErrors } from "formik";

export interface TooltipValidationProp {
    firstname: string;
    lastname: string;
    username: string;
    city: string;
    state: string;
    zip: string;
  }

  export interface TooltipFormValidationProp {
    submitErrors: boolean;
    setSubmitError: (key:boolean)=>void
    errors: FormikErrors<TooltipValidationProp>;
  }

  export interface FormValidationProp {
    firstname: string;
    password: string;
    state: string;
    city: string;
    zip: string;
    payment: string;
    theme: string;
    file: string;
    description: string;
    terms: [];
  }

  export interface FormValidationsProp {
    submitErrors: boolean;
    setSubmitError: (key:boolean)=>void
    errors: FormikErrors<FormValidationProp>;
  }
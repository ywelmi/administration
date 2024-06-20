import { ChangeEvent } from "react";

export interface CommonErrorPageType {
    error: string;
    color: string;
    src:string
}

export interface CommonFormPropsType {
    alignLogo?: string;
}

export interface PropsType {
    level: number;
  }

  export interface RegisterWizardForm {
    getUserData: (event: ChangeEvent<HTMLInputElement>) => void;
    formValue: FormValueInterFace;
  }

  interface FormValueInterFace {
    firstName: string;
    lastName: string;
    contactNumber: string;
    email: string;
    password: string;
    confirmPassword: string;
    birthDate: string;
    age: string;
    passPort: string;
    country:string
    state:string
    city:string
  }

  export interface CountdownDataProp {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
    completed: boolean;
  }
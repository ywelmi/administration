import { ChangeEvent, RefObject } from "react";

export type StepperHorizontalPropsType = {
    level: number;
  };
  
  interface BasicInputFormValueInterFace {
    email: string;
    firstName: string;
    password: string;
    confirmPassword: string;
    agreeTerms: boolean;
    placeHolderName: string;
    cardNumber: string;
    expiration: string;
    cvvNumber: string;
    uploadDocumentation: string;
    informationCheckBox: boolean;
    linkedInLink: string;
    gitHubLink: string;
    giveFeedBack: string;
    state: string;
    agreeConditions: boolean;
  }
  
  export type NumberingWizardPropsType = {
    getUserData: (event: ChangeEvent<HTMLInputElement>) => void;
    basicInputFormValue: BasicInputFormValueInterFace;
    level?: number;
  };
  
  interface StudentValidationFormInterFace {
    password: string;
    name: string;
    email: string;
    confirmPassWord: string;
    portfolioURL: string;
    projectDescription: string;
    twitterUrl: string;
    gitHubUrl: string;
  }
  
  export interface StudentFormPropsType {
    handleImageLabelClick: () => void;
    imageUrl: string | null;
    getUserData: (event: ChangeEvent<HTMLInputElement>) => void;
    studentValidationForm: StudentValidationFormInterFace;
    level: number;
    fileInputRef: RefObject<HTMLInputElement>;
  }
  
  export interface StudentTabProp {
    studentValidationForm: StudentValidationFormInterFace;
    getUserData: (event: ChangeEvent<HTMLInputElement>) => void;
  }
  
  export interface VerticalFormPropsType {
    callbackActive: (val: number) => void;
    activeTab: number;
  }
  
  export interface VerticalValidationWizardFormPropsType {
    activeCallBack: (val: number) => void;
    activeTab?: number;
  }

  export interface CardPropsType {
    recipientUserName: string;
    userName: string;
    cardNumber: string;
    expirationDate: string;
    cvvNumber: string;
    documentationName: string;
  }
  
  export interface CardDetailProp {
    cartInfoForm: CardPropsType;
    getUserData: (event: ChangeEvent<HTMLInputElement>) => void;
  }
  
  export interface NavComponentProp {
    callbackActive: (val: number | undefined) => void;
    activeTab: number | undefined;
  }
  
  export interface ShippingFormTabContentPropsType {
    activeTab: number | undefined;
    callbackActive: (val: number | undefined) => void;
  }
  
  export interface BillingFormProp {
    callbackActive: (val: number | undefined) => void;
  }
  
  interface NetBankingAccordionPropType {
    bankName: string;
    feedBack: string;
  }
  export interface NetBankingAccordionProp {
    netBankingFormValues: NetBankingAccordionPropType;
    getUserData: (event: ChangeEvent<HTMLInputElement>) => void;
  }
  
  export interface CustomFormSelectProp {
    inputId: string;
    options: string[];
    title: string;
  }
  
  export interface CustomWizardFormPropsType {
    heading: string;
    horizontalWizardClass?: string;
    xs?: number;
    firstXl?: number;
    secondXl?: number;
    differentId?:boolean;
  }
  
  export interface BusinessFormCommonProps {
    activeTab?: number | undefined;
    callbackActive: (val: number | undefined) => void;
    differentId?:boolean
  }
  
  export interface BusinessFormCommonProps {
    activeTab?: number | undefined;
    callbackActive: (val: number | undefined) => void;
  }
  
  export interface BankLogoListProp {
    getUserData: (event: ChangeEvent<HTMLInputElement>) => void;
    differentId?:boolean;
  }
  
  export interface BusinessFormpropsType {
    horizontalWizardClass?: string;
    heading: string;
    firstXl?: number;
    secondXl?: number;
    xs?: number;
  }

  interface StudentValidationFormType {
    firstName: string;
    lastName: string;
    contact: string;
    email: string;
    address: string;
    country: string;
    state: string;
    zip: string;
    rememberNextTime: boolean;
    otherNotes: string;
  }
  
  export interface BillingUserDetailsProp {
    studentValidationForm: StudentValidationFormType;
    getUserData: (event: ChangeEvent<HTMLInputElement>) => void;
  }

  interface RadioBoxValuesInterFace {
    address: string;
    shippingMethod: string;
  }
  
  export interface ShippingInformationCommonProps {
    handleNextButton?: () => void;
    radioBoxValues: RadioBoxValuesInterFace;
    getUserData: (event: ChangeEvent<HTMLInputElement>) => void;
  }

  export interface PaymentMethodOptionPropsType {
    paymentMethodName: string;
    getUserData: (event: ChangeEvent<HTMLInputElement>) => void;
  }
import React, { ChangeEvent } from 'react'
import { BusinessFormCommonProps } from '../../../../../Types/Forms/FormsLayout/FormsWizardTwo';
import { useAppDispatch, useAppSelector } from '../../../../../ReduxToolkit/Hooks';
import { toast } from "react-toastify";
import { Col, Form, FormGroup, Input, Label, Row } from 'reactstrap';
import { ContactDetails, Continue, Email, GekkoCo, InqMail, JoinOrganizationType, OrganizationDescription, OrganizationName, Previous, ShareYourProblemsAndAnotherIssues } from '../../../../../utils/Constant';
import { Btn, H6, P } from '../../../../../AbstractElements';
import { selectData } from '../../../../../Data/Forms/FormsLayout/FormsWizardTwo/FormsWizardTwo';
import { setContactDetailsFormValue } from '../../../../../ReduxToolkit/Reducer/FormWizardTwoSlice';

const ContactDetailsForm :React.FC<BusinessFormCommonProps> = ({ callbackActive }) => {
  const {contactDetailsFormValues} = useAppSelector((state)=>state.formWizardTwo)
  const { organizationName, email, description, organizationType } = contactDetailsFormValues;
  const dispatch = useAppDispatch()

  const getUserData = (event: ChangeEvent<HTMLInputElement>) => {
    const name = event.target.name;
    const value = event.target.value;
    dispatch(setContactDetailsFormValue({ ...contactDetailsFormValues, [name]: value }));
  };

  const handleNextButton = () => {
    if (organizationName !== "" &&email !== "" &&description !== "" &&organizationType !== "") { callbackActive(4) }
    else { toast.error("Please fill all field after press next button"); }  
  };

  return (
    <Form onSubmit={(event) => event.preventDefault()} className="g-3 needs-validation" noValidate>
      <Row>
        <Col xs="12">
          <H6>{ContactDetails}</H6>
          <P>Please visit the documentation page if you require further information.</P>
        </Col>
        <Col sm="6" className="mt-3">
          <FormGroup>
            <Label check>{OrganizationName}<span className="txt-danger">*</span></Label>
            <Input type="text" placeholder={GekkoCo} name="organizationName" value={organizationName} onChange={getUserData}/>
          </FormGroup>
        </Col>
        <Col sm="6" className="mt-3">
          <FormGroup>
            <Label check>{Email}<span className="txt-danger">*</span></Label>
            <Input type="text" placeholder={InqMail} value={email} name="email" onChange={getUserData}/>
          </FormGroup>
        </Col>
        <Col xs="12">
          <FormGroup>
            <Label check>{JoinOrganizationType}<span className="txt-danger">*</span></Label>
            <Input type="select" value={organizationType} name="organizationType" onChange={getUserData} className="f-w-400 f-14 text-gray">
              <option value={""}>Join organization type</option>
              {selectData.map((item,index)=>(<option key={index} value={item}>{item}</option>))}
            </Input>
          </FormGroup>
        </Col>
        <Col xs="12">
          <FormGroup>
            <Label check>{OrganizationDescription}</Label>
            <Input type="textarea" value={description} name="description" onChange={getUserData} placeholder={ShareYourProblemsAndAnotherIssues}/>
          </FormGroup>
        </Col>
        <Col xs="12" className="text-end mt-3">
          <Btn color="primary" onClick={() => callbackActive(2)}>{Previous}</Btn>
          <Btn className="ms-1" color="primary" onClick={handleNextButton}>{Continue}</Btn>
        </Col>
      </Row>
    </Form>
  );
};

export default ContactDetailsForm
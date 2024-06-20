import React, { ChangeEvent } from 'react'
import { BusinessFormCommonProps } from '../../../../../Types/Forms/FormsLayout/FormsWizardTwo';
import { useAppDispatch, useAppSelector } from '../../../../../ReduxToolkit/Hooks';
import { toast } from "react-toastify";
import { Col, Form, Input, Label, Row } from 'reactstrap';
import { AccountName, Continue, Email, InqMail, Previous, ProjectDescription, Projects, SelectTeamWith } from '../../../../../utils/Constant';
import { Btn, H5, P } from '../../../../../AbstractElements';
import VariationBox from './VariationBox';
import { setBusinessSettingsFormValues } from '../../../../../ReduxToolkit/Reducer/FormWizardTwoSlice';

const BusinessSettingsForm :React.FC<BusinessFormCommonProps> = ({ callbackActive }) => {
  const {businessSettingsFormValues} = useAppSelector((state)=>state.formWizardTwo)
  const { accountName, email, description } = businessSettingsFormValues;
  const dispatch = useAppDispatch()

  const getUserData = (event: ChangeEvent<HTMLInputElement>) => {
    const name = event.target.name;
    const value = event.target.value;
    dispatch(setBusinessSettingsFormValues({...businessSettingsFormValues,[name]: value}));
  };

  const handleNextButton = () => {
    if (accountName !== "" && email !== "" && description !== "") callbackActive(3)
    else toast.error("Please fill all field after press next button");
  };

  return (
    <Form onSubmit={(event) => event.preventDefault()} className="g-3 needs-validation" noValidate>
      <Row>
        <Col md="6">
          <Label check>{AccountName}<span className="txt-danger">*</span></Label>
          <Input name="accountName" value={accountName} onChange={getUserData} type="text"/>
        </Col>
        <Col md="6">
          <Label check>{Email}<span className="txt-danger">*</span></Label>
          <Input type="text" placeholder={InqMail} name="email" value={email} onChange={getUserData}/>
        </Col>
        <Col xs="12" className="mt-3">
          <Label check>{ProjectDescription}</Label>
          <Input type="textarea" rows={3} name="description" value={description} onChange={getUserData}/>
        </Col>
        <Col xs="12">
        <section className="main-upgrade">
          <div>
            <i className="fa fa-rocket mt-3" />
            <H5 className="mb-2">{SelectTeamWith}<span className="txt-primary ms-1">{Projects}</span></H5>
            <P className="text-muted mb-2">Agile teams are cross-functional and made up of 5-11 on a regular basis team member.</P>
          </div>
          <VariationBox />
        </section>
        </Col>
        <Col xs="12" className="text-end">
          <Btn onClick={() => callbackActive(1)} color="primary">{Previous}</Btn>
          <Btn className="ms-1" color="primary" onClick={handleNextButton}>{Continue}</Btn>
        </Col>
      </Row>
    </Form>
  );
};

export default BusinessSettingsForm
import React, { ChangeEvent } from 'react'
import { BusinessFormCommonProps } from '../../../../../Types/Forms/FormsLayout/FormsWizardTwo';
import { useAppDispatch, useAppSelector } from '../../../../../ReduxToolkit/Hooks';
import { toast } from "react-toastify";
import { Col, Form, FormGroup, Input, Label, Row } from 'reactstrap';
import { Btn, H5, LI, P, UL } from '../../../../../AbstractElements';
import { AccountType, Continue } from '../../../../../utils/Constant';
import { selectAmountData } from '../../../../../Data/Forms/FormsLayout/FormsWizardTwo/FormsWizardTwo';
import { setAccountType } from '../../../../../ReduxToolkit/Reducer/FormWizardTwoSlice';

const SelectAccount:React.FC<BusinessFormCommonProps> = ({ callbackActive }) => {
  const { accountType } = useAppSelector((state) => state.formWizardTwo);
  const dispatch = useAppDispatch();

  const getUserData = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    dispatch(setAccountType(value));
  };

  const handleNextButton = () => {
    if (accountType !== "") callbackActive(2);
    else toast.error("Please fill all field after press next button");
  };

  return (
    <Form className="g-3 needs-validation" noValidate onSubmit={(event) => event.preventDefault()}>
      <Row>
        <Col xs="12" className="mt-2">
          <H5>{AccountType}</H5>
          <P>It has long been known that distracting information on a page will lose a readers attention.</P>
        </Col>
        <Col xs="12" className="mt-2">
          <FormGroup check className="radio radio-primary ps-0 select-account">
            <UL className="radio-wrapper simple-list">
            {selectAmountData.map((data, index) => (
              <LI key={index}>
                <Input id={data.tittle} value={data.tittle} checked={data.tittle === accountType} type="radio" name="accountType" onChange={getUserData} />
                <Label className="form-check-label mb-0" for={data.tittle} check>
                  <i className={`fa ${data.iconName}`} />
                  <span className="d-flex flex-column">
                    <span>{data.tittle}</span>
                    <span>Search your {data.tittle} information please check it</span>
                  </span>
                </Label>
              </LI>
            ))}
            </UL>
          </FormGroup>
        </Col>
        <Col xs="12" className="text-end mt-3">
          <Btn onClick={handleNextButton} color="primary">{Continue}</Btn>
        </Col>
      </Row>
    </Form>
  );
};

export default SelectAccount
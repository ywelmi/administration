import React, { ChangeEvent } from 'react'
import { BusinessFormCommonProps } from '../../../../../Types/Forms/FormsLayout/FormsWizardTwo';
import { useAppDispatch, useAppSelector } from '../../../../../ReduxToolkit/Hooks';
import { toast } from "react-toastify";
import { Col, Form, Input, Label, Row } from 'reactstrap';
import { Btn } from '../../../../../AbstractElements';
import { Continue, DescribeYourIssue, Previous } from '../../../../../utils/Constant';
import InquiryDetails from './InquiryDetails';
import { setInquiresForm } from '../../../../../ReduxToolkit/Reducer/FormWizardTwoSlice';

const InquiresForm :React.FC<BusinessFormCommonProps> = ({ callbackActive,differentId }) => {
  const { inquiresForm } = useAppSelector((state) => state.formWizardTwo);
  const { notifications, email, contactNumber, describeIssue } = inquiresForm;
  const dispatch = useAppDispatch();

  const getUserData = (event: ChangeEvent<HTMLInputElement>) => {
    const name = event.target.name;
    const value = name === "rememberNextTime" ? event.target.checked : event.target.value;
    dispatch(setInquiresForm({ ...inquiresForm, [name]: value }));
  };

  const handleNextButton = () => {
    if (notifications !== "" && email !== "" && contactNumber !== "" && describeIssue !== "") {
      callbackActive(4);
    } else {
      toast.error("Please fill all field after press next button");
    }
  };

  return (
    <Form onSubmit={(event) => event.preventDefault()} className="needs-validation" noValidate>
      <Row className='g-3'>
        <InquiryDetails getUserData={getUserData} differentId={differentId}/>
        <Col xs="12" className="mt-2">
          <Label className="f-w-500" check>{DescribeYourIssue}</Label>
          <Input type="textarea" rows={3} value={describeIssue} name="describeIssue" onChange={getUserData} />
        </Col>
        <Col xs="12" className="text-end mt-3">
          <Btn color="primary">{Previous}</Btn>
          <Btn className="ms-1" color="primary" onClick={handleNextButton}>{Continue}</Btn>
        </Col>
      </Row>
    </Form>
  );
};

export default InquiresForm
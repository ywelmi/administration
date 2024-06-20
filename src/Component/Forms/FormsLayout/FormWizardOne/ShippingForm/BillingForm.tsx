import { Col, Form, Row } from 'reactstrap'
import { Btn, H6, P } from '../../../../../AbstractElements'
import { BillingInformation, FillFollowingInformation, ProceedToNext } from '../../../../../utils/Constant'
import { ChangeEvent, useState } from 'react';
import { BillingFormProp } from '../../../../../Types/Forms/FormsLayout/FormWizardOne';
import { toast } from 'react-toastify';
import BillingUserDetails1 from './BillingUserDetails1';
import BillingUserDetail2 from './BillingUserDetail2';

const BillingForm  :React.FC<BillingFormProp> = ({ callbackActive }) => {
    const [studentValidationForm, setStudentValidationForm] = useState({ firstName: "", lastName: "", contact: "", email: "", address: "", country: "", state: "", zip: "", rememberNextTime: false, otherNotes: "" });
    const { firstName, lastName, contact, email, address, country, state, zip, rememberNextTime, otherNotes } = studentValidationForm;
    const getUserData = (event: ChangeEvent<HTMLInputElement>) => {
      const name = event.target.name;
      const value = name === "rememberNextTime" ? event.target.checked : event.target.value;
      setStudentValidationForm({ ...studentValidationForm, [name]: value });
    };
    const handleNextButton = () => {
      if (firstName !== "" && lastName !== "" && contact !== "" && email !== "" && address !== "" && country !== "" && state !== "" && zip !== "" && rememberNextTime !== false && otherNotes !== "") {
        callbackActive(2);
      } else {
        toast.error("Please fill all field after press next button");
      }
    };
  return (
    <>
      <H6>{BillingInformation}</H6>
      <P className="f-light">{FillFollowingInformation}</P>
      <Form onSubmit={(event) => event.preventDefault} className="needs-validation " noValidate>
        <Row className='g-3'>
          <BillingUserDetails1 studentValidationForm={studentValidationForm} getUserData={getUserData} />
          <BillingUserDetail2 studentValidationForm={studentValidationForm} getUserData={getUserData}/>        
          <Col xs="12" className="text-end">
            <Btn onClick={handleNextButton} color="primary">{ProceedToNext}<i className="fa fa-truck proceed-next pe-2" /></Btn>
          </Col>
        </Row>
      </Form>
    </>
  )
}

export default BillingForm
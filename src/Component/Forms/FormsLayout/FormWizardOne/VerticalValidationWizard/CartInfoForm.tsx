import React, { ChangeEvent, useState } from 'react'
import { VerticalValidationWizardFormPropsType } from '../../../../../Types/Forms/FormsLayout/FormWizardOne';
import { Col, Form, Row } from 'reactstrap';
import { Btn } from '../../../../../AbstractElements';
import { Next, Previous } from '../../../../../utils/Constant';
import { toast } from "react-toastify";
import CardTypeDetail from './CardTypeDetail';
import CardDataForm from './CardDataForm';
import CardDetails from './CardDetails';

const CartInfoForm :React.FC<VerticalValidationWizardFormPropsType>= ({ activeCallBack }) => {
    const [cartInfoForm, setCartInfoForm] = useState({ recipientUserName: "", userName: "", cardNumber: "", expirationDate: "", cvvNumber: "", documentationName: "" });
    const { recipientUserName, userName, cardNumber, expirationDate, cvvNumber, documentationName } = cartInfoForm;
  
    const getUserData = (event: ChangeEvent<HTMLInputElement>) => {
      const name = event.target.name;
      const value = name === "rememberNextTime" ? event.target.checked : name === "documentationName" ? event.target.files && event.target.files[0].name : event.target.value;
      setCartInfoForm({ ...cartInfoForm, [name]: value });
    };
  
    const handleNextButton = () => {
      if (recipientUserName !== "" && userName !== "" && cardNumber !== "" && expirationDate !== "" && cvvNumber !== "" && documentationName !== "") {
        activeCallBack(3);
      } else {
        toast.error("Please fill all field after press next button");
      }
    };
  
    return (
      <Form className="g-3 needs-validation custom-input" noValidate>
        <Row>
          <CardTypeDetail />
          <CardDetails cartInfoForm={cartInfoForm} getUserData={getUserData} />
          <CardDataForm cartInfoForm={cartInfoForm} getUserData={getUserData}/>        
          <Col xs="12" className="text-end">
            <Btn onClick={() => activeCallBack(1)} color="primary">{Previous}</Btn>
            <Btn className="ms-1" onClick={handleNextButton} color="primary">{Next}</Btn>
          </Col>
        </Row>
      </Form>
    );
  };

export default CartInfoForm
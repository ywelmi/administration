import React, { ChangeEvent, useState } from 'react'
import { BillingFormProp } from '../../../../../Types/Forms/FormsLayout/FormWizardOne';
import { toast } from 'react-toastify';
import { PaymentInformation, ProceedNext } from '../../../../../utils/Constant';
import { Btn, H6, P } from '../../../../../AbstractElements';
import { Col, Row } from 'reactstrap';
import PayPalOption from './PayPalOption';
import CreditCardOption from './CreditCardOption';
import CashOnDelivery from './CashOnDelivery';

const PaymentForm:React.FC<BillingFormProp> = ({ callbackActive }) => {
    const [paymentMethodName, setPaymentMethodName] = useState("");
    const getUserData = (event: ChangeEvent<HTMLInputElement>) => {
      const value = event.target.value;
      setPaymentMethodName(value);
    };
  
    const handleNextButton = () => {
      if (paymentMethodName !== "") {
        callbackActive(4);
      } else {
        toast.error("Please fill all field after press next button");
      }
    };
  
    return (
      <>
        <H6>{PaymentInformation}</H6>
        <P className="f-light">Fill up the following information to send you the order</P>
        <div className="payment-info-wrapper">
          <Row className="shipping-method g-3">
            <PayPalOption paymentMethodName={paymentMethodName} getUserData={getUserData}/>
            <CreditCardOption paymentMethodName={paymentMethodName} getUserData={getUserData}/>
            <CashOnDelivery paymentMethodName={paymentMethodName} getUserData={getUserData}/>
            <Col xs="12" className="text-end">
              <Btn color="primary" onClick={handleNextButton}>{ProceedNext}<i className="fa fa-truck proceed-next pe-2" /></Btn>
            </Col>
          </Row>
        </div>
      </>
    );
  };

export default PaymentForm
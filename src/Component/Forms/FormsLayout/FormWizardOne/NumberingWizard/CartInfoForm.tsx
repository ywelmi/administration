import React from 'react'
import { Col, Form, FormGroup, Input, Label, Row } from 'reactstrap';
import { AadharPlaceholder, AboveInformationCorrect, CVVNumber, CardNumber, Expiration, ExpiryPlaceholder, PlaceHolderName, PlaceholderName, UploadDocumentation } from '../../../../../utils/Constant';
import { NumberingWizardPropsType } from '../../../../../Types/Forms/FormsLayout/FormWizardOne';

const CartInfoForm :React.FC<NumberingWizardPropsType>= ({ getUserData, basicInputFormValue }) => {
    const { placeHolderName, cardNumber, expiration, cvvNumber } = basicInputFormValue;

    return (
      <Form className="stepper-two g-3 needs-validation custom-input" noValidate>
        <Row>
            <Col md="12">
              <FormGroup>
                <Label check>{PlaceHolderName}</Label>
                <Input name="placeHolderName" value={placeHolderName} onChange={getUserData} type="text" placeholder={PlaceholderName} />
              </FormGroup>
            </Col>
            <Col xxl="4" sm="6">
                <FormGroup>
                    <Label check>{CardNumber}</Label>
                    <Input name="cardNumber" value={cardNumber} onChange={getUserData} type="text" placeholder={AadharPlaceholder} />
                </FormGroup>
            </Col>
            <Col xxl="4" sm="6" >
                <FormGroup>
                    <Label check>{Expiration}</Label>
                    <Input name="expiration" value={expiration} onChange={getUserData} type="number" placeholder={ExpiryPlaceholder} />
                </FormGroup>
            </Col>
            <Col xxl="4">
                <FormGroup>
                    <Label check>{CVVNumber}</Label>
                    <Input name="cvvNumber" value={cvvNumber} onChange={getUserData} type="text" />
                </FormGroup>
            </Col>
            <Col xs="12">
                <FormGroup>
                    <Label check>{UploadDocumentation}</Label>
                    <Input name="uploadDocumentation" onChange={getUserData} type="file" />
                </FormGroup>
            </Col>
            <Col xs="12">
                <FormGroup check>
                    <Input id="invalidCheck-a" name="informationCheckBox" onChange={getUserData} type="checkbox" required />
                    <Label for='invalidCheck-a' className="form-check-label" check>{AboveInformationCorrect}</Label>
                </FormGroup>
            </Col>
        </Row>
      </Form>
    );
}

export default CartInfoForm
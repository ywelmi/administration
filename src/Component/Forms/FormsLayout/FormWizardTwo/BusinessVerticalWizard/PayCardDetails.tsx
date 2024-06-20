import React from 'react'
import { BankLogoListProp } from '../../../../../Types/Forms/FormsLayout/FormsWizardTwo';
import { useAppSelector } from '../../../../../ReduxToolkit/Hooks';
import { Col, Input, Label, Row } from 'reactstrap';
import { CVVNumber, Expiration } from '../../../../../utils/Constant';

const PayCardDetails :React.FC<BankLogoListProp> = ({ getUserData }) => {
  const { payDetailsFormValues } = useAppSelector((state) => state.formWizardTwo);
  const { expiryDate, expiryYear, cvvNumber } = payDetailsFormValues;
  const ListOfYears: number[] = [2024, 2024, 2025, 2026, 2027, 2028, 2029, 2030, 2031, 2032, 2033, 2034, 2035];

  return (
    <Col xs="12">
      <Row className="g-3">
        <Col md="6">
          <Label check>{Expiration}</Label>
          <Row className="g-3">
            <Col md="6">
              <Input id="expiration" type="number" required placeholder="xx/xx" value={expiryDate} name="expiryDate" onChange={getUserData} />
            </Col>
            <Col md="6">
              <Input value={expiryYear} name="expiryYear" type="select" onChange={getUserData} className="f-w-400 f-14 text-gray">
                <option value="">Year</option>
                {ListOfYears.map((data, index) => (<option key={index} value={data}>{data}</option>))}
              </Input>
            </Col>
          </Row>
        </Col>
        <Col md="6">
          <Label check>{CVVNumber}</Label>
          <Input type="text" required value={cvvNumber} name="cvvNumber" onChange={getUserData} />
        </Col>
      </Row>
    </Col>
  );
};

export default PayCardDetails
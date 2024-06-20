import React, { ChangeEvent } from 'react'
import { Col, Form, FormGroup, Input, Label, Row } from 'reactstrap'
import { Btn } from '../../../../../AbstractElements'
import { useAppDispatch, useAppSelector } from '../../../../../ReduxToolkit/Hooks';
import { AgreeConditions, Finish } from '../../../../../utils/Constant';
import NetBankingAccordion from './NetBankingAccordion';
import { bankingNextHandler, setNetBankingForm } from '../../../../../ReduxToolkit/Reducer/VerticalWizardSlice';

const NetBankingForm = () => {
  const { netBankingFormValues } = useAppSelector((state) => state.verticalWizard);
  const dispatch = useAppDispatch();
  const { feedBack } = netBankingFormValues;

  const getUserData = (event: ChangeEvent<HTMLInputElement>) => {
    const name = event.target.name;
    const value = event.target.value;
    dispatch(setNetBankingForm({ ...netBankingFormValues, [name]: value }));
  };
  return (
    <Form onSubmit={(event) => event.preventDefault()} className="needs-validation" noValidate>
      <FormGroup>
        <Row className='g-3'>
          <Col md="12">
            <NetBankingAccordion netBankingFormValues={netBankingFormValues} getUserData={getUserData} />
          </Col>
          <Col xs="12">
            <Input type="textarea" name="feedBack" value={feedBack} onChange={getUserData} placeholder="Your Feedback" />
          </Col>
          <Col xs="12">
            <FormGroup className="mb-0" check>
              <Input id="invalidCheck67" type="checkbox" required />
              <Label className="mb-0" for="invalidCheck67" check>{AgreeConditions}</Label>
            </FormGroup>
          </Col>
          <Col xs="12" className="text-end">
            <Btn color="success" onClick={() => dispatch(bankingNextHandler())}>{Finish}</Btn>
          </Col>
        </Row>
      </FormGroup>
    </Form>
  )
}

export default NetBankingForm
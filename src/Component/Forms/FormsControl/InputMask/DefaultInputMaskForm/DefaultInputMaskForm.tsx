import { Col, Form, Label, Row } from 'reactstrap'
import { CardNumber, CardNumberPlaceholder, Currency, CurrencyPlaceholder, Delimiter, DelimiterPlaceholder, PhoneNumber, PhoneNumberPlaceholder, Prefix, PrefixPlaceholder, Tailprefix, TailprefixPlaceholder } from '../../../../../utils/Constant'
import Cleave from "cleave.js/react";

const DefaultInputMaskForm = () => {
  return (
    <Form>
      <Row className='g-3'>
        <Col xxl="4" sm="6" > 
          <Label className="col-form-label">{Currency}</Label>          
          <Cleave className="form-control" options={{  numeral: true,numeralThousandsGroupStyle: 'thousand'}} placeholder={CurrencyPlaceholder} />
        </Col>
        <Col xxl="4" sm="6"> 
          <Label className="col-form-label">{Prefix}</Label>
          <Cleave className="form-control" options={{prefix: 'PREFIX', delimiter: '-', blocks: [ 6, 4, 4], uppercase: true}} placeholder={PrefixPlaceholder} />
        </Col>
        <Col xxl="4" sm="6">
          <Label className="col-form-label">{Delimiter}</Label>
          <Cleave className="form-control" options={{ delimiters: ['.', '.', '-'], blocks: [3, 3, 3], uppercase: true}} placeholder={DelimiterPlaceholder} />
        </Col>
        <Col xxl="4" sm="6">
          <Label>{PhoneNumber}</Label>
          <Cleave className="form-control" options={{ delimiters: ['(',')', '-', '-'], blocks: [0,3, 3, 4], uppercase: true}} placeholder={PhoneNumberPlaceholder} />
        </Col>
        <Col xxl="4" sm="6" >
          <Label>{CardNumber}</Label>
          <Cleave className="form-control" options={{creditCard: true}} placeholder={CardNumberPlaceholder} />
        </Col>
        <Col xxl="4" sm="6">
          <Label >{Tailprefix}</Label>
          <Cleave className="form-control" options={{numeral: true,prefix: '€', tailPrefix:true,  uppercase: true}} placeholder={TailprefixPlaceholder} />
        </Col>
      </Row>
    </Form>
  )
}

export default DefaultInputMaskForm
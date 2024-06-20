import { CardBody, Col, Form, Row } from 'reactstrap'
import CommonFormFooter from '../Common/CommonFormFooter'
import BasicPlaceholderInput from './BasicPlaceholderInput'
import BasicTelephoneInput from './BasicTelephoneInput'
import BasicDateInput from './BasicDateInput'
import BasicColorPickerInput from './BasicColorPickerInput'

const BasicHTMLInputControlForm = () => {
  return (
    <Form onSubmit={(event) => event.preventDefault()} className="theme-form">
      <CardBody className="custom-input">
        <Row>
          <Col>
            <BasicPlaceholderInput />
            <BasicTelephoneInput />
            <BasicDateInput />
            <BasicColorPickerInput />
          </Col>
        </Row>
      </CardBody>
      <CommonFormFooter />
    </Form>
  )
}

export default BasicHTMLInputControlForm
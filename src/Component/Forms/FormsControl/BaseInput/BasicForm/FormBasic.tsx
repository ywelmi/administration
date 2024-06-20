import { Col, Form, Input, Label, Row } from 'reactstrap'
import { CheckMeOut, Email, EmailPlaceHolder, Password, PasswordPlaceholder, SignIn } from '../../../../../utils/Constant'
import { Btn } from '../../../../../AbstractElements'

const FormBasic = () => {
  return (
    <Form onSubmit={(event) => event.preventDefault()}>
      <Row className='g-3'>
        <Col md="12">
          <Label>{Email}</Label>
          <Input placeholder={EmailPlaceHolder} />
        </Col>
        <Col md="12">
          <Label>{Password}</Label>
          <Input type="password" placeholder={PasswordPlaceholder} />
        </Col>
        <Col xs="12">
          <div className="form-check checkbox-checked">
            <Input type="checkbox" id='checkMeOut' />
            <Label for='checkMeOut'>{CheckMeOut}</Label>
          </div>
        </Col>
        <Col xs="12">
          <Btn color="primary">
            {SignIn}
          </Btn>
        </Col>
      </Row>
    </Form>
  )
}

export default FormBasic
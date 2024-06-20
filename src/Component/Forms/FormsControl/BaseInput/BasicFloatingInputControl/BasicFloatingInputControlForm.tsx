import { CardBody, Col, Form, Row } from 'reactstrap'
import CommonFormFooter from '../Common/CommonFormFooter'
import FloatingValidInputForm from './FloatingValidInputForm'
import FloatingEmailInputForm from './FloatingEmailInputForm'
import FloatingSelectInputForm from './FloatingSelectInputForm'
import FloatingLayoutInputForm from './FloatingLayoutInputForm'

const BasicFloatingInputControlForm = () => {
  return (
    <Form className="theme-form">
      <CardBody className="custom-input">
        <Row>
          <Col>
            <FloatingValidInputForm />
            <FloatingEmailInputForm />
            <FloatingSelectInputForm />
            <FloatingLayoutInputForm />
          </Col>
        </Row>
      </CardBody>
      <CommonFormFooter />
    </Form>
  )
}

export default BasicFloatingInputControlForm
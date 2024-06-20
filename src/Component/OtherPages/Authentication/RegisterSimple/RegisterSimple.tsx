import { Col, Container, Row } from 'reactstrap'
import CommonRegisterForm from '../Common/CommonRegisterForm'

const RegisterSimpleContainer = () => {
  return (
    <Container fluid className="p-0">
      <Row className="m-0">
        <Col xs="12" className="p-0">
          <CommonRegisterForm />
        </Col>
      </Row>
    </Container>
  )
}

export default RegisterSimpleContainer
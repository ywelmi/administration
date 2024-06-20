import { Col, Container, Row } from 'reactstrap'
import LoginForm from '../Common/LoginForm'

const LoginSimpleContainer = () => {
  return (
    <Container fluid className="p-0">
      <Row className="m-0">
        <Col xs="12" className="p-0">
          <LoginForm />
        </Col>
      </Row>
    </Container>
  )
}

export default LoginSimpleContainer
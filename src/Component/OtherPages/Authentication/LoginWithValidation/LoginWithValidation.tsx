import { Col, Container, Row } from 'reactstrap'
import { Image } from '../../../../AbstractElements'
import { dynamicImage } from '../../../../Service'
import LoginForm from '../Common/LoginForm'

const LoginWithValidationContainer = () => {
  return (
    <Container fluid>
      <Row>
        <Col xl="5" className="p-0">
          <LoginForm alignLogo="text-start" />
        </Col>
        <Col xl="7" >
          <Image className="bg-img-cover bg-center w-100 vh-100" src={dynamicImage("login/1.jpg")} alt="loginpage" />
        </Col>
      </Row>
    </Container>
  )
}

export default LoginWithValidationContainer
import { Col, Container, Row } from 'reactstrap'
import { Image } from '../../../../AbstractElements'
import LoginForm from '../Common/LoginForm'
import { dynamicImage } from '../../../../Service'

const LoginWithBackGroundImageContainer = () => {
  return (
    <Container fluid> 
      <Row>
        <Col xl="7" className="b-center bg-size p-0">
          <Image className="bg-img-cover bg-center w-100 vh-100" src={dynamicImage("login/2.jpg")} alt="loginpage" />
        </Col>
        <Col xl="5" className="p-0">
          <LoginForm alignLogo="text-start" />
        </Col>
      </Row>
    </Container>
  )
}

export default LoginWithBackGroundImageContainer
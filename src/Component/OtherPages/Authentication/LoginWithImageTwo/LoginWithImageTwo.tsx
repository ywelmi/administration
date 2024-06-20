import { Col, Container, Row } from 'reactstrap'
import { Image } from '../../../../AbstractElements'
import { dynamicImage } from '../../../../Service'
import LoginForm from '../Common/LoginForm'

const LoginWithImageTwoContainer = () => {
  return (
    <Container fluid>
      <Row>
        <Col xl="7" >
          <Image className="bg-img-cover bg-center" src={dynamicImage("login/3.jpg")} alt="loginpage" />
        </Col>
        <Col xl="5" className="p-0">
          <LoginForm alignLogo="text-start" />
        </Col>
      </Row>
    </Container>
  )
}

export default LoginWithImageTwoContainer
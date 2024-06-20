import { useState } from 'react'
import { Link } from 'react-router-dom';
import { Col, Container, Form, FormGroup, Input, Label, Row } from 'reactstrap';
import { Btn, H4, P } from '../../../../AbstractElements';
import { EnterYourPassword, RememberPassword, SignIn, Unlock } from '../../../../utils/Constant';
import CommonLogo from '../Common/CommonLogo';

const UnlockUserContainer = () => {
    const [showPassWord, setShowPassWord] = useState(false);
    return (
      <div className="page-wrapper">
        <Container fluid className="p-0">
          <div className="authentication-main mt-0">
            <Row>
              <Col xs="12">
                <div className="login-card login-dark">
                  <div>
                    <CommonLogo />
                    <div className="login-main">
                      <Form className="theme-form" onSubmit={(event) => event.preventDefault()}>
                        <H4>{Unlock}</H4>
                        <FormGroup>
                          <Label className="col-form-label">{EnterYourPassword}</Label>
                          <div className="form-input position-relative">
                            <Input type={showPassWord ? "text" : "password"} placeholder="*********" />
                            <div className="show-hide">
                              <span onClick={() => setShowPassWord(!showPassWord)} className={!showPassWord ? "show" : ""} />
                            </div>
                          </div>
                        </FormGroup>
                        <FormGroup className="mb-0">
                          <div className="checkbox p-0">
                            <Input id="checkbox1" type="checkbox" />
                            <Label className="text-muted" for="checkbox1">{RememberPassword}</Label>
                          </div>
                          <Btn color="primary" block className="w-100">{Unlock}</Btn>
                        </FormGroup>
                        <P className="mt-4 mb-0">{"Already have an account?"}
                          <Link className="ms-2" to={`/authentication/loginsimple`}>{SignIn}</Link>
                        </P>
                      </Form>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    )
}

export default UnlockUserContainer
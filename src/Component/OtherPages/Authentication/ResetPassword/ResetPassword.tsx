import { useState } from 'react'
import { Col, Container, Form, FormGroup, Input, Label, Row } from 'reactstrap';
import CommonLogo from '../Common/CommonLogo';
import { Btn, H4, P } from '../../../../AbstractElements';
import { CreateAccount, CreateYourPassword, Done, NewPassword, RememberPassword, RetypePassword } from '../../../../utils/Constant';
import { Link } from 'react-router-dom';

const ResetPasswordContainer = () => {
    const [showPassWord, setShowPassWord] = useState(false);
    return (
      <div className="page-wrapper">
        <Container fluid className="p-0">
          <Row>
            <Col xs="12">
              <div className="login-card login-dark">
                <div>
                  <div><CommonLogo /></div>
                  <div className="login-main">
                    <Form className="theme-form" onSubmit={(event) => event.preventDefault()}>
                      <H4>{CreateYourPassword}</H4>
                      <FormGroup>
                        <Label className="col-form-label">{NewPassword}</Label>
                        <div className="form-input position-relative">
                          <Input type={showPassWord ? "text" : "password"} placeholder="*********"/>
                          <div className="show-hide">
                            <span onClick={() => setShowPassWord(!showPassWord)} className={!showPassWord ? "show" : ""}/>
                          </div>
                        </div>
                      </FormGroup>
                      <FormGroup>
                        <Label className="col-form-label">{RetypePassword}</Label>
                        <Input type="password" required placeholder="*********" />
                      </FormGroup>
                      <FormGroup className="mb-0">
                        <div className="checkbox p-0">
                          <Input id="checkbox1" type="checkbox" />
                          <Label className="text-muted" for="checkbox1">{RememberPassword}</Label>
                        </div>
                        <Btn color="primary" block className="w-100">{Done}</Btn>
                      </FormGroup>
                      <P className="mt-4 mb-0 text-center">{"Don't have account?"}
                        <Link className="ms-2" to={`/authentication/registersimple`}>{CreateAccount}</Link>
                      </P>
                    </Form>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    )
}

export default ResetPasswordContainer
import { useState } from 'react'
import CommonLogo from './CommonLogo';
import { Col, Form, FormGroup, Input, Label, Row } from 'reactstrap';
import { Btn, H4, H6, P } from '../../../../AbstractElements';
import { AgreeWith, CreateAccount, CreateYourAccount, EmailAddress, EmailsPlaceHolder, FacebookHeading, FirstName, Href, LastName, LinkedInHeading, Password, PrivacyPolicy, SignIn, SignUpWith, TwitterHeading, YourName } from '../../../../utils/Constant';
import { Link } from 'react-router-dom';
import { Facebook, Linkedin, Twitter } from 'react-feather';
import { CommonFormPropsType } from '../../../../Types/OtherPages/OtherPages';

const CommonRegisterForm = ({alignLogo}:CommonFormPropsType) => {
    const [showPassWord, setShowPassWord] = useState(false);
    return (
      <div className="login-card login-dark">
        <div>
          <div>
            <CommonLogo alignLogo={alignLogo} />
          </div>
          <div className="login-main">
            <Form className="theme-form"  onSubmit={(event) => event.preventDefault()}>
              <H4>{CreateYourAccount}</H4>
              <P>{"Enter your personal details to create account"}</P>
              <FormGroup>
                <Label className="col-form-label pt-0">{YourName}</Label>
                <Row className="g-2">
                  <Col xs="6">
                    <Input type="text" required placeholder={FirstName}/>
                  </Col>
                  <Col xs="6">
                    <Input type="text" required placeholder={LastName}/>
                  </Col>
                </Row>
              </FormGroup>
              <FormGroup>
                <Label className="col-form-label">{EmailAddress}</Label>
                <Input type="email" required placeholder={EmailsPlaceHolder}/>
              </FormGroup>
              <FormGroup>
                <Label className="col-form-label">{Password}</Label>
                <div className="form-input position-relative">
                <Input type={showPassWord ? "text" : "password"} placeholder="*********" required/>
                  <div className="show-hide">
                    <span onClick={() => setShowPassWord(!showPassWord)} className={!showPassWord ? "show" : ""}/>
                  </div>
                </div>
              </FormGroup>
              <FormGroup className="mb-0">
                <div className="checkbox p-0">
                  <Input id="checkbox1" type="checkbox" />
                  <Label className="text-muted" for="checkbox1">{AgreeWith}<Link className="ms-2" to={Href}>{PrivacyPolicy}</Link></Label>
                </div>
                <Btn block color="primary" className="w-100">{CreateAccount}</Btn>
              </FormGroup>
              <H6 className="text-muted mt-4 or">{SignUpWith}</H6>
              <div className="social mt-4">
                <div className="btn-showcase">
                  <Link className="btn btn-light" to="https://www.linkedin.com/login" target="_blank" rel="noreferrer">
                    <Linkedin className="txt-linkedin" />{LinkedInHeading}
                  </Link>
                  <Link className="btn btn-light" to="https://twitter.com/login?lang=en" target="_blank" rel="noreferrer">
                    <Twitter className="txt-twitter" />{TwitterHeading}
                  </Link>
                  <Link className="btn btn-light" to="https://www.facebook.com/" target="_blank" rel="noreferrer">
                    <Facebook className="txt-fb" />{FacebookHeading}
                  </Link>
                </div>
              </div>
              <P className="mt-4 mb-0">{"Already have an account?"}<Link className="ms-2" to={`/authentication/loginsimple`}>{SignIn}</Link></P>
            </Form>
          </div>
        </div>
      </div>
    )
}

export default CommonRegisterForm
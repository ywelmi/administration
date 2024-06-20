import { useState } from 'react'
import { CommonFormPropsType } from '../../../../Types/OtherPages/OtherPages';
import { Form, FormGroup, Input, Label } from 'reactstrap';
import { Btn, H4, H6, P } from '../../../../AbstractElements';
import { CreateAccount, EmailAddress, EmailsPlaceHolder, FacebookHeading, ForgotPassword, LinkedInHeading, Password, RememberPassword, SignIn, SignInAccount, SignInWith, TwitterHeading } from '../../../../utils/Constant';
import { Link } from 'react-router-dom';
import { Facebook, Linkedin, Twitter } from 'react-feather';
import CommonLogo from './CommonLogo';

const LoginForm =  ({ alignLogo }: CommonFormPropsType) => {
  const [showPassWord, setShowPassWord] = useState(false);
  return (
    <div className="login-card login-dark">
      <div>
        <div>
          <CommonLogo alignLogo={alignLogo} />
        </div>
        <div className="login-main">
          <Form className="theme-form" onSubmit={(event) => event.preventDefault()}>
            <H4>{SignInAccount}</H4>
            <P>{"Enter your email & password to login"}</P>
            <FormGroup>
              <Label className="col-form-label">{EmailAddress}</Label>
              <Input type="email" required placeholder={EmailsPlaceHolder} />
            </FormGroup>
            <FormGroup>
              <Label className="col-form-label">{Password}</Label>
              <div className="form-input position-relative">
                <Input type={showPassWord ? "text" : "password"} placeholder="*********"/>
                <div className="show-hide">
                  <span onClick={() => setShowPassWord(!showPassWord)} className={!showPassWord ? "show" : ""}/>
                </div>
              </div>
            </FormGroup>
            <FormGroup className="mb-0 position-relative">
              <div className="checkbox p-0">
                <Input id="checkbox1" type="checkbox" />
                <Label className="text-muted" for="checkbox1">{RememberPassword}</Label>
              </div>
              <Link className="forgot-link" to={`/authentication/forgetpassword`}>{ForgotPassword}</Link>
              <div className="text-end mt-3">
                <Btn color="primary" block>{SignIn}</Btn>
              </div>
            </FormGroup>
            <H6 className="text-muted mt-4 or">{SignInWith}</H6>
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
            <P className="mt-4 mb-0 text-center">
              {"Don't have account?"}<Link className="ms-2" to={`/authentication/registersimple`}>{CreateAccount}</Link>
            </P>
          </Form>
        </div>
      </div>
    </div>
  )
}

export default LoginForm
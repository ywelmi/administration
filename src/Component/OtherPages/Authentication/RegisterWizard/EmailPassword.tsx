import { ConfirmPassword, ConfirmPasswordPlaceholder, EmailAddress, EmailFloatingPlaceholder, EmailPassWord, Password, SignUpToAccount } from '../../../../utils/Constant';
import { H2, H3 } from '../../../../AbstractElements';
import { FormGroup, Input, Label } from 'reactstrap';
import { RegisterWizardForm } from '../../../../Types/OtherPages/OtherPages';

const EmailPassword = ({ formValue, getUserData }: RegisterWizardForm) => {
    const { email, password, confirmPassword } = formValue;
    return (
      <div id="step-2" className="content">
        <div className="wizard-title">
          <H2>{SignUpToAccount}</H2>
          <H3 className="text-muted mb-4">{EmailPassWord}</H3>
        </div>
        <div className="login-main">
          <div className="theme-form">
            <FormGroup className="position-relative m-t-15">
              <Label>{EmailAddress}</Label>
              <Input name="email" onChange={getUserData} value={email} type="email" placeholder={EmailFloatingPlaceholder}/>
            </FormGroup>
            <FormGroup className="position-relative">
              <Label>{Password}</Label>
              <Input name="password" onChange={getUserData} value={password} type="password" placeholder={Password}/>
            </FormGroup>
            <FormGroup className="position-relative ">
              <Label>{ConfirmPassword}</Label>
              <Input name="confirmPassword" onChange={getUserData} value={confirmPassword} type="password" placeholder={ConfirmPasswordPlaceholder}/>
            </FormGroup>
          </div>
        </div>
      </div>
    )
}

export default EmailPassword
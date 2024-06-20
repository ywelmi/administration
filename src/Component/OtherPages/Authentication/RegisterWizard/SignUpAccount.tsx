import { H2, H5 } from '../../../../AbstractElements';
import { RegisterWizardForm } from '../../../../Types/OtherPages/OtherPages';
import { ContactNo, EmailPassWord, FirstName, LastName, SignUpToAccount } from '../../../../utils/Constant';
import { FormGroup, Input, Label } from 'reactstrap';

const SignUpAccount = ({ formValue, getUserData }: RegisterWizardForm) => {
    const { contactNumber, lastName, firstName } = formValue;
    return (
      <div className="content">
        <div className="wizard-title">
          <H2>{SignUpToAccount}</H2>
          <H5 className="text-muted mb-4">{EmailPassWord}</H5>
        </div>
        <div className="login-main">
          <div className="theme-form">
            <FormGroup className="position-relative">
              <Label>{FirstName}</Label>
              <Input value={firstName} name="firstName" onChange={getUserData} id="name" type="text" placeholder={"Johan"}/>
            </FormGroup>
            <FormGroup className="position-relative">
              <Label >{LastName}</Label>
              <Input value={lastName} name="lastName" onChange={getUserData} type="text" placeholder={"Deo"}/>
            </FormGroup>
            <FormGroup className="position-relative">
              <Label>{ContactNo}</Label>
              <Input value={contactNumber} name="contactNumber" onChange={getUserData} type="number" placeholder={"123456789"}/>
            </FormGroup>
          </div>
        </div>
      </div>
    )
}

export default SignUpAccount
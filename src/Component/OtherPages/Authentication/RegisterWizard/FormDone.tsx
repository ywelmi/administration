import { City, Country, EmailPassWord, SignUpToAccount, State } from '../../../../utils/Constant';
import { H2, H3 } from '../../../../AbstractElements';
import { FormGroup, Input, Label } from 'reactstrap';
import { RegisterWizardForm } from '../../../../Types/OtherPages/OtherPages';

const FormDone = ({ formValue, getUserData }: RegisterWizardForm) => {
    const { country, state, city } = formValue;
    return (
      <div className="content">
        <div className="wizard-title">
          <H2>{SignUpToAccount}</H2>
          <H3 className="text-muted mb-4">{EmailPassWord}</H3>
        </div>
        <div className="login-main">
          <div className="theme-form">
            <FormGroup className="position-relative">
              <Label className="control-label">{Country}</Label>
              <Input className="mt-1" value={country} onChange={getUserData} name="country" type="text" placeholder={Country}/>
            </FormGroup>
            <FormGroup className="position-relative">
              <Label className="control-label">{State}</Label>
              <Input className="mt-1" value={state} onChange={getUserData} name="state" type="text" placeholder={State}/>
            </FormGroup>
            <FormGroup className="position-relative">
              <Label className="control-label">{City}</Label>
              <Input value={city} onChange={getUserData} name="city" className="mt-1" type="text" placeholder={City}/>
            </FormGroup>
          </div>
        </div>
      </div>
    )
}

export default FormDone
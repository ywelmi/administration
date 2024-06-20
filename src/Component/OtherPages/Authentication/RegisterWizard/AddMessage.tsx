import { Age, Birthday, EmailPassWord, HavePassport, SignUpToAccount, YesNo } from '../../../../utils/Constant'
import { H2, H3 } from '../../../../AbstractElements'
import { FormGroup, Input, Label } from 'reactstrap'
import { RegisterWizardForm } from '../../../../Types/OtherPages/OtherPages'

const AddMessage = ({formValue,getUserData}:RegisterWizardForm) => {
    const {birthDate,age,passPort}=formValue
    return (
      <div id="step-3" className="content" >
        <div className="wizard-title">
          <H2>{SignUpToAccount}</H2>
          <H3 className="text-muted mb-4">{EmailPassWord}</H3>
        </div>
        <div className="login-main">
          <div className="theme-form">
            <FormGroup className="position-relative">
              <Label>{Birthday}</Label>
              <Input  type="date" onChange={getUserData} value={birthDate} name="birthDate" />
            </FormGroup>
            <FormGroup className="position-relative">
              <Label className="control-label">{Age}</Label>
              <Input  placeholder={Age} type="text" onChange={getUserData} value={age} name="age" />
            </FormGroup>
            <FormGroup className="position-relative">
              <Label className="control-label">{HavePassport}</Label>
              <Input  placeholder={YesNo} type="text" onChange={getUserData} value={passPort} name="passPort" />
            </FormGroup>
          </div>
        </div>
      </div>
    )
}

export default AddMessage
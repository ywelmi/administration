import { Col, Form, FormGroup, Input, Label, Row } from 'reactstrap';
import { AgreeToTermsAndConditions, ConfirmPassword, Email, EnterConfirmPassword, EnterPassword, EnterYourName, FirstName, RihoMail, Password } from '../../../../../utils/Constant';
import { NumberingWizardPropsType } from '../../../../../Types/Forms/FormsLayout/FormWizardOne';

const BasicInfoForm:React.FC<NumberingWizardPropsType>= ({ basicInputFormValue, getUserData }) => {
    const { email, firstName, password, confirmPassword, agreeTerms } = basicInputFormValue;

    return (
      <Form className="stepper-one g-3 needs-validation custom-input" noValidate>
        <Row>
          <Col sm="6">
            <FormGroup>
              <Label check>{Email}<span className="txt-danger">*</span></Label>
              <Input onChange={getUserData} value={email} name="email" type="email" placeholder={RihoMail} />
            </FormGroup>
          </Col>
          <Col sm="6">
            <FormGroup>
              <Label check>{FirstName}<span className="txt-danger">*</span></Label>
              <Input onChange={getUserData} value={firstName} name="firstName" type="text" placeholder={EnterYourName} />
            </FormGroup>
          </Col>
          <Col xs="12">
            <FormGroup>
              <Label check>{Password}<span className="txt-danger">*</span></Label>
              <Input onChange={getUserData} value={password} name="password" type="password" placeholder={EnterPassword} />
            </FormGroup>
          </Col>
          <Col xs="12">
            <FormGroup>  
              <Label check>{ConfirmPassword}<span className="txt-danger">*</span></Label>
              <Input onChange={getUserData} value={confirmPassword} name="confirmPassword" type="password" placeholder={EnterConfirmPassword} />
            </FormGroup>
          </Col>
          <Col xs="12">
            <FormGroup check>
              <Input id="inputCheckWizard" name="agreeTerms" onChange={getUserData} type="checkbox" checked={agreeTerms} required/>
              <Label className="mb-0" for='inputCheckWizard' check>{AgreeToTermsAndConditions}</Label>
            </FormGroup>
          </Col>
        </Row>
      </Form>
    );
}

export default BasicInfoForm
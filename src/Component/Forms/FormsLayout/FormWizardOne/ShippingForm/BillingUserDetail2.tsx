import { Col, FormGroup, Input, Label } from 'reactstrap'
import { Country, EnterState, EnterYourQueries, OtherNotes, RememberMeForNextTime, State, ZipCode } from '../../../../../utils/Constant'
import { BillingUserDetailsProp } from '../../../../../Types/Forms/FormsLayout/FormWizardOne';
import { countryList } from '../../../../../Data/Forms/FormsLayout/FormWizardOne/FormWizardOne';

const BillingUserDetail2 :React.FC<BillingUserDetailsProp> = ({ studentValidationForm, getUserData }) => {
  const { country, state, zip, otherNotes } = studentValidationForm;
  return (
    <>
      <Col sm="4">
        <Label check>{Country}</Label>
        <Input type="select" value={country} onChange={getUserData} name="country">
          <option value="">Select Country</option>
          {countryList.map((item, index) => (<option value={item} key={index}>{item}</option>))}
        </Input>
      </Col>
      <Col sm="4">
        <Label check>{State}</Label>
        <Input value={state} onChange={getUserData} name="state" type="text" placeholder={EnterState} />
      </Col>
      <Col sm="4">
        <Label check>{ZipCode}</Label>
        <Input value={zip} onChange={getUserData} type="text" name="zip" />
      </Col>
      <Col xs="12">
        <FormGroup check>
          <Input name="rememberNextTime" onChange={getUserData} id="invalid-check-wizard" type="checkbox" required />
          <Label className="mb-0 d-block" check>{RememberMeForNextTime}</Label>
        </FormGroup>
      </Col>
      <Col xs="12">
        <Label check>{OtherNotes}</Label>
        <Input value={otherNotes} onChange={getUserData} type="textarea" name="otherNotes" rows={3} placeholder={EnterYourQueries} />
      </Col>
    </>
  )
}

export default BillingUserDetail2
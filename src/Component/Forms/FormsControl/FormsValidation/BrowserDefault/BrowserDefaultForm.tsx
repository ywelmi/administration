import { Col, Form, FormGroup, Input, Label, Row } from 'reactstrap'
import { AgreeToThePolicies, ChooseFile, Description, EmailAddress, EmailPlaceholder, FirstName, MasterCard, Password, Paypal, SelectYourPaymentMethod, State, SubmitButton, SureInformation, Visa } from '../../../../../utils/Constant'
import { Btn, H6 } from '../../../../../AbstractElements'

const BrowserDefaultForm = () => {
  return (
    <Form onSubmit={(event) => event.preventDefault()}>
      <Row className="g-3">
        <Col xs="12">
            <Label> {FirstName}</Label>
            <Input type="text" placeholder={FirstName} required />
        </Col>
        <Col xs="12">
            <Label>{EmailAddress}</Label>
            <Input type="email" placeholder={EmailPlaceholder} required />
        </Col>
        <Col xs="12">
            <Label className="col-form-label">{Password}</Label>
            <Input type="password" required />
        </Col>
        <Col xs="12">
            <Label>{State}</Label>
            <Input id="exampleSelect" name="select" type="select" required>
                <option>Choose...</option>
                <option>U.K </option>
                <option>Thailand</option>
                <option>India </option>
                <option>U.S</option>
            </Input>
        </Col>
        <Col xs="12">
            <Label>{ChooseFile}</Label>
            <Input type="file" required />
        </Col>
        <Col xs="12">
            <div className="card-wrapper border rounded-3 checkbox-checked">
                <H6 className="sub-title">{SelectYourPaymentMethod}</H6>
                <div className="radio-form">
                    <FormGroup check>
                        <Input type="radio" id="flexRadioDefault1" name="flexRadioDefault" required/>
                        <Label for='flexRadioDefault1' check>{Visa}</Label>
                    </FormGroup>
                    <FormGroup check>
                        <Input type="radio" id="flexRadioDefault2" name="flexRadioDefault" required/>
                        <Label for='flexRadioDefault2' check >{MasterCard}</Label>
                    </FormGroup>
                    <FormGroup check>
                        <Input type="radio" id="flexRadioDefault3" name="flexRadioDefault" defaultChecked required />
                        <Label for='flexRadioDefault3' check >{Paypal}</Label>
                    </FormGroup>
                </div>
            </div>
        </Col>
        <Col xs="12">
            <Label>{Description}</Label>
            <Input type="textarea" id="exampleFormControlTextarea1" rows={3} />
        </Col>
        <Col xs="12" className="checkbox-checked">
            <Input id="flexCheckDefault" type="checkbox" />
            <Label for='flexCheckDefault' check>{AgreeToThePolicies}</Label>
        </Col>
        <Col xs="12">
            <div className="form-check form-switch">
                <Input id="flexSwitchCheckDefault" type="checkbox" role="switch" required/>
                <Label for='flexSwitchCheckDefault' check>{SureInformation}</Label>
            </div>
        </Col>
        <Col xs="12">
            <Btn color="primary">{SubmitButton}</Btn>
        </Col>
      </Row>
    </Form>
  )
}

export default BrowserDefaultForm
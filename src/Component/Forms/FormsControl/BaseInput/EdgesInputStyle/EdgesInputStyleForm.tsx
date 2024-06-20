import { CardBody, Col, Form, FormGroup, Input, Label, Row } from 'reactstrap'
import { DefaultFileInputExamples, EdgeComments, EdgeDefaultInput, EdgeFemale, EdgeMale, EmailAddress, EmailFloatingPlaceholder, Password, PasswordLabel, SelectYourFavoritePixelstrapTheme } from '../../../../../utils/Constant'
import { themeList } from '../../../../../Data/Forms/FormsControl/BaseInput/BaseInput'
import CommonFormFooter from '../Common/CommonFormFooter'

const EdgesInputStyleForm = () => {
  return (
    <Form onSubmit={(event)=>event.preventDefault()} className="theme-form dark-inputs">
      <CardBody>
        <Row>
          <Col>
            <FormGroup>
              <Label>{EmailAddress}</Label>
              <Input className="btn-pill" type="email" placeholder={EmailFloatingPlaceholder}/>
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col>
            <FormGroup>
              <Label>{Password}</Label>
              <Input className="btn-pill" type="password" placeholder={PasswordLabel}/>
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col>
            <FormGroup>
              <Label>{SelectYourFavoritePixelstrapTheme}</Label>
              <Input type='select' className="btn-pill digits">
                {themeList.map((data, index) => (<option key={index}>{data}</option>))}
              </Input>
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col>
            <FormGroup>
              <Label>{DefaultFileInputExamples}</Label>
              <Input className="btn-pill px-4" type="file" />
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col>
            <FormGroup>
              <Label>{EdgeDefaultInput}</Label>
              <Input type="text" placeholder={EdgeDefaultInput} />
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col>
            <FormGroup className="d-flex gap-3 checkbox-checked">
              <FormGroup check>
                <Input className="form-check-input" id="flexRadioDefault1" type="radio" name="flexRadioDefault"/>
                <Label className="form-check-label mb-0" for='flexRadioDefault1'>{EdgeMale}</Label>
              </FormGroup>
              <FormGroup check>
                <Input className="form-check-input" id="flexRadioDefault2" type="radio" name="flexRadioDefault" defaultChecked/>
                <Label className="form-check-label mb-0" for='flexRadioDefault2'>{EdgeFemale}</Label>
              </FormGroup>
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col>
            <div>
              <Label>{EdgeComments}</Label>
              <Input type="textarea" className="btn-pill" rows={3}/>
            </div>
          </Col>
        </Row>
      </CardBody>
      <CommonFormFooter />
    </Form>
  )
}

export default EdgesInputStyleForm
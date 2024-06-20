import { CardBody, Col, Form, FormGroup, Input, Label, Row } from 'reactstrap'
import { EdgeEmailAddressPlaceholder, EmailAddress, Password, RaisedComments, RaisedSelectYourFavoritePixelstrapTheme, SelectTheColorYouLikeBelow } from '../../../../../utils/Constant'
import { colorList, themeList } from '../../../../../Data/Forms/FormsControl/BaseInput/BaseInput'
import CommonFormFooter from '../Common/CommonFormFooter'

const RaiseInputStyleForm = () => {
  return (
    <Form onSubmit={(event)=>event.preventDefault()} className="theme-form dark-inputs">
      <CardBody>
        <Row>
          <Col>
            <FormGroup>
              <Label>{EmailAddress}</Label>
              <Input className="input-air-primary" type="email" placeholder={EdgeEmailAddressPlaceholder}/>
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col>
            <FormGroup>
              <Label>{Password}</Label>
              <Input className="input-air-primary" type="password" placeholder={Password}/>
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col>
            <FormGroup>
              <Label>{RaisedSelectYourFavoritePixelstrapTheme}</Label>
              <Input type='select' className={`input-air-primary digits`} defaultValue={"Tivo"}>
                {themeList.map((data, index) => (<option key={index}>{data}</option>))}
              </Input>
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col>
            <FormGroup>
              <Label>{SelectTheColorYouLikeBelow}</Label>
              <Input type='select' className="input-air-primary digits" multiple>
                {colorList.map((data, index) => (<option key={index} className="rounded-0">{data}</option>))}
              </Input>
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col>
            <div>
              <Label>{RaisedComments}</Label>
              <Input type="textarea" className="input-air-primary" rows={3}/>
            </div>
          </Col>
        </Row>
      </CardBody>
      <CommonFormFooter />
    </Form>
  )
}

export default RaiseInputStyleForm
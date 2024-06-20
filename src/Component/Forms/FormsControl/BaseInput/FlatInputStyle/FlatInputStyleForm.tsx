import { CardBody, Col, Form, FormGroup, Input, Label, Row } from 'reactstrap'
import { PleaseDoComments, SelectYourFavoriteRomanNumber, SelectYourMultiplePaintings } from '../../../../../utils/Constant'
import { multiplePaintingsItems } from '../../../../../Data/Forms/FormsControl/BaseInput/BaseInput'

const FlatInputStyleForm = () => {
  return (
    <Form className="theme-form dark-inputs">
      <CardBody>
        <Row>
          <Col>
            <FormGroup>
              <Label>{SelectYourFavoriteRomanNumber}</Label>
              <Input type='select' className="btn-square digits" defaultValue={"I"}>
                <option>I </option>
                <option>II </option>
                <option>III</option>
                <option>IV </option>
                <option>V </option>
              </Input>
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col>
            <FormGroup>
              <Label>{SelectYourMultiplePaintings}</Label>
              <Input type='select' className="btn-square digits" multiple>
                {multiplePaintingsItems.map((data, index) => (<option key={index} className="rounded-0">{data}</option>))}
              </Input>
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col>
            <div>
              <Label>{PleaseDoComments}</Label>
              <Input type="textarea" className="btn-square" rows={3}/>
            </div>
          </Col>
        </Row>
      </CardBody>
    </Form>
  )
}

export default FlatInputStyleForm
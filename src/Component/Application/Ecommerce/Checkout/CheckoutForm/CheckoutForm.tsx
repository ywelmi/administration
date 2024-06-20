import { Col, Form, FormGroup, Input, Label, Row } from 'reactstrap'
import { Address, CheckMeOut, Country, EmailAddress, FirstName, LastName, Phone, PostalCode, StateCountry, TownCity } from '../../../../../utils/Constant'

const CheckoutForm = () => {
  return (
    <Col xl="6" sm="12">
      <Form>
        <Row>
          <Col sm="6">
            <FormGroup>
              <Label for="inputEmail4">{FirstName}</Label>
              <Input id="inputEmail4" type="email" />
            </FormGroup>
          </Col>
          <Col sm="6">
            <FormGroup>
              <Label for="inputPassword4">{LastName}</Label>
              <Input id="inputPassword4" type="password" />
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col sm="6">
            <FormGroup>
              <Label for="inputEmail5">{Phone}</Label>
              <Input id="inputEmail5" type="email" />
            </FormGroup>
          </Col>
          <Col sm="6">
            <FormGroup>
              <Label for="inputPassword7">{EmailAddress}</Label>
              <Input id="inputPassword7" type="password"/>
            </FormGroup>
          </Col>
        </Row>
        <FormGroup>
          <Label for="inputState">{Country}</Label>
          <Input type="select" id="inputState" defaultValue={"Choose..."}>
            <option>Choose...</option>
            <option>...</option>
          </Input>
        </FormGroup>
        <FormGroup>
          <Label for="inputAddress5">{Address}</Label>
          <Input id="inputAddress5" type="text" />
        </FormGroup>
        <FormGroup>
          <Label for="inputCity">{TownCity}</Label>
          <Input id="inputCity" type="text"  />
        </FormGroup>
        <FormGroup>
          <Label for="inputAddress2">{StateCountry}</Label>
          <Input id="inputAddress2" type="text" />
        </FormGroup>
        <FormGroup>
          <Label for="inputAddress6">{PostalCode}</Label>
          <Input id="inputAddress6" type="text"  />
        </FormGroup>
        <FormGroup check>
          <Input id="gridCheck" type="checkbox" />
          <Label for="gridCheck">{CheckMeOut}</Label>
        </FormGroup>
      </Form>
    </Col>
  )
}

export default CheckoutForm
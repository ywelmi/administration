import { Col, FormGroup, Input, Label, Row } from "reactstrap";
import { BasicDateAndTime, BasicTelephone, URLs } from "../../../../../utils/Constant";

const BasicTelephoneInput = () => {
  return (
    <>
      <FormGroup>
        <Row>
          <Col sm="3">
            <Label>{BasicTelephone}</Label>
          </Col>
          <Col sm="9">
            <Input className="m-input digits" type="tel" defaultValue="91-(999)-999-999"/>
          </Col>
        </Row>
      </FormGroup>
      <FormGroup>
        <Row>
          <Col sm="3">
            <Label>{URLs}</Label>
          </Col>
          <Col sm="9">
            <Input type="url" defaultValue="https://getbootstrap.com" />
          </Col>
        </Row>
      </FormGroup>
      <FormGroup>
        <Row>
          <Col sm="3">
            <Label>{BasicDateAndTime}</Label>
          </Col>
          <Col sm="9">
            <Input type="datetime-local" defaultValue="2018-01-19T18:45:00" />
          </Col>
        </Row>
      </FormGroup>
    </>
  );
};

export default BasicTelephoneInput;

import { Col, FormGroup, Input, Label, Row } from "reactstrap";
import { BasicNumber, BasicPassword, BasicPlaceholder, BasicPlaceholderPlace, PasswordInputPlaceholder } from "../../../../../utils/Constant";

const BasicPlaceholderInput = () => {
  return (
    <>
      <FormGroup>
        <Row>
          <Col sm="3">
            <Label>{BasicPlaceholder}</Label>
          </Col>
          <Col sm="9">
            <Input type="text" placeholder={BasicPlaceholderPlace} />
          </Col>
        </Row>
      </FormGroup>
      <FormGroup>
        <Row>
          <Col sm="3">
            <Label>{BasicPassword}</Label>
          </Col>
          <Col sm="9">
            <Input type="password" placeholder={PasswordInputPlaceholder} />
          </Col>
        </Row>
      </FormGroup>
      <FormGroup>
        <Row>
          <Col sm="3">
            <Label>{BasicNumber}</Label>
          </Col>
          <Col sm="9">
            <Input type="number" placeholder={BasicNumber} />
          </Col>
        </Row>
      </FormGroup>
    </>
  );
};

export default BasicPlaceholderInput;

import { Col, FormGroup, Input, Label, Row } from "reactstrap";
import { EdgeEmailAddress, EmailFloatingPlaceholder, FloatOpenFloatingLabel, FloatingLayout, FloatingOpenLabel } from "../../../../../utils/Constant";

const FloatingLayoutInputForm = () => {
  return (
    <Row className="mb-0">
      <Col sm="3">
        <Label>{FloatingLayout}</Label>
      </Col>
      <Col sm="9">
        <Row className="g-2">
          <Col xxl="6">
            <FormGroup floating>
              <Input type="email" placeholder={EmailFloatingPlaceholder} defaultValue="mdo@example.com" />
              <Label>{EdgeEmailAddress}</Label>
            </FormGroup>
          </Col>
          <Col xxl="6">
            <FormGroup floating>
              <Input type="select">
                <option>{FloatingOpenLabel}</option>
                <option>One</option>
                <option>Two</option>
                <option>Three</option>
              </Input>
              <Label>{FloatOpenFloatingLabel}</Label>
            </FormGroup>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default FloatingLayoutInputForm;

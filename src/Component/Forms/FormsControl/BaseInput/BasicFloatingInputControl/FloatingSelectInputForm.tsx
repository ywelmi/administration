import { Col, FormGroup, Input, InputGroup, InputGroupText, Label, Row } from "reactstrap";
import { FloatOpenFloatingLabel, FloatingInputGroup, FloatingInputGroupFeed, FloatingOpenLabel, UserName } from "../../../../../utils/Constant";

const FloatingSelectInputForm = () => {
  return (
    <>
      <FormGroup>
        <Row>
          <Col sm="3">
            <Label>{FloatingOpenLabel}</Label>
          </Col>
          <Col sm="9">
            <FormGroup floating className="mb-0">
              <Input type="select" defaultValue={FloatingOpenLabel} >
                <option>{FloatingOpenLabel}</option>
                <option>I </option>
                <option>II </option>
                <option>III </option>
              </Input>
              <Label>{FloatOpenFloatingLabel}</Label>
            </FormGroup>
          </Col>
        </Row>
      </FormGroup>
      <FormGroup>
        <Row>
          <Col sm="3">
            <Label>{FloatingInputGroup}</Label>
          </Col>
          <Col sm="9">
            <InputGroup className="mb-3 input-mb">
              <InputGroupText>@</InputGroupText>
              <FormGroup floating className="mb-0">
                <Input type="text" />
                <Label>{UserName}</Label>
              </FormGroup>
            </InputGroup>
          </Col>
        </Row>
      </FormGroup>
      <FormGroup>
        <Row>
          <Col sm="3">
            <Label>{FloatingInputGroup}</Label>
          </Col>
          <Col sm="9">
            <InputGroup className="has-validation">
              <InputGroupText>@</InputGroupText>
              <FormGroup floating className="is-invalid mb-0">
                <Input className="is-invalid" type="text" required />
                <Label>{UserName}</Label>
              </FormGroup>
              <div className="invalid-feedback">{FloatingInputGroupFeed}</div>
            </InputGroup>
          </Col>
        </Row>
      </FormGroup>
    </>
  );
};

export default FloatingSelectInputForm;

import { Col, FormGroup, Input, Label, Row } from "reactstrap";
import { EmailFloatingPlaceholder, FloatingCommentPlaceholder, FloatingComments, FloatingValidInput, InputWithValue, InvalidInput } from "../../../../../utils/Constant";

const FloatingValidInputForm = () => {
  return (
    <>
      <FormGroup>
        <Row>
          <Col sm="3">
            <Label>{FloatingValidInput}</Label>
          </Col>
          <Col sm="9">
            <div className="form-floating">
              <Input type="email" placeholder={EmailFloatingPlaceholder} defaultValue="test@example.com" />
              <Label>{InputWithValue}</Label>
            </div>
          </Col>
        </Row>
      </FormGroup>
      <FormGroup>
        <Row>
          <Col sm="3">
            <Label>{InvalidInput}</Label>
          </Col>
          <Col sm="9">
            <div className="form-floating">
              <Input className="is-invalid" type="email" placeholder={EmailFloatingPlaceholder} defaultValue="test@example.com"/>
              <Label>{InvalidInput}</Label>
            </div>
          </Col>
        </Row>
      </FormGroup>
      <FormGroup>
        <Row>
          <Col sm="3">
            <Label>{FloatingComments}</Label>
          </Col>
          <Col sm="9">
            <div className="form-floating">
              <Input type="textarea" placeholder={FloatingCommentPlaceholder} />
              <Label>{FloatingComments}</Label>
            </div>
          </Col>
        </Row>
      </FormGroup>
    </>
  );
};

export default FloatingValidInputForm;

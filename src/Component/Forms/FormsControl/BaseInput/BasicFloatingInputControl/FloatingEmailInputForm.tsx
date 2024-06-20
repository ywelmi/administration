import { Col, FormGroup, Input, Label, Row } from "reactstrap";
import { FloatingComment, FloatingCommentPlaceholder, FloatingEmail, FloatingPassword } from "../../../../../utils/Constant";

const FloatingEmailInputForm = () => {
  return (
    <>
      <FormGroup>
        <Row>
          <Col sm="3">
            <Label>{FloatingEmail}</Label>
          </Col>
          <Col sm="9">
            <FormGroup floating className="mb-0">
              <Input type="email" />
              <Label>{FloatingEmail}</Label>
            </FormGroup>
          </Col>
        </Row>
      </FormGroup>
      <FormGroup>
        <Row>
          <Col sm="3">
            <Label>{FloatingPassword}</Label>
          </Col>
          <Col sm="9">
            <FormGroup floating className="mb-0">
              <Input type="password" />
              <Label>{FloatingPassword}</Label>
            </FormGroup>
          </Col>
        </Row>
      </FormGroup>
      <FormGroup>
        <Row>
          <Col sm="3">
            <Label>{FloatingComment}</Label>
          </Col>
          <Col sm="9">
            <FormGroup floating className="mb-0">
              <Input
                type="textarea"
                placeholder="Leave a comment here"
                style={{ height: 100 }}
              />
              <Label>{FloatingCommentPlaceholder}</Label>
            </FormGroup>
          </Col>
        </Row>
      </FormGroup>
    </>
  );
};

export default FloatingEmailInputForm;

import { Col, FormGroup, Input, Label, Row } from "reactstrap";
import { BasicColorPicker, BasicMaximumLength, BasicStaticText, MaximumLengthPlaceholder } from "../../../../../utils/Constant";

const BasicColorPickerInput = () => {
  return (
    <>
      <FormGroup>
        <Row>
          <Col sm="3">
            <Label className="pt-0">{BasicColorPicker}</Label>
          </Col>
          <Col sm="2">
            <Input className="form-control-color" type="color" defaultValue="#006666" />
          </Col>
        </Row>
      </FormGroup> 
      <FormGroup>
        <Row>
          <Col sm="3">
            <Label>{BasicMaximumLength}</Label>
          </Col>
          <Col sm="9">
            <Input type="text" placeholder={MaximumLengthPlaceholder} maxLength={6} />
          </Col>
        </Row>
      </FormGroup>
      <Row>
        <Col sm="3">
          <Label>{BasicStaticText}</Label>
        </Col>
        <Col sm="9">
          <div className="form-control-static">
            {"Hello !... This is my magical text"}
          </div>
        </Col>
      </Row>
    </>
  );
};

export default BasicColorPickerInput;

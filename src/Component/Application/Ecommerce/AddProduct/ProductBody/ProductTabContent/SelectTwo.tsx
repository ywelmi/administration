import { Col, Label, Row } from "reactstrap";
import { P } from "../../../../../../AbstractElements";
import { AddTag } from "../../../../../../utils/Constant";
import { Typeahead } from "react-bootstrap-typeahead";
import { multiWithHeaderData } from "../../../../../../Data/Forms/FormsWidgets/Typeahead/Typeahead";

const SelectTwo = () => {
  return (
    <Col sm="6">
      <Row className="g-2 product-tag">
        <Col xs="12">
          <Label className="d-block m-0" for="validationServer01" >
            {AddTag}
          </Label>
        </Col>
        <Col xs="12">
          <Typeahead labelKey="name" options={multiWithHeaderData} multiple id="selectTwo"/>
          <P className="f-light">Products can be tagged</P>
        </Col>
      </Row>
    </Col>
  );
};

export default SelectTwo;

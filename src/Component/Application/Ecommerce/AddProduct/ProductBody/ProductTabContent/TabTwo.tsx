import { Col, Form, Input, Label, Row } from "reactstrap";
import { AdditionalDescription, AdditionalTagTitle, SpecificTags } from "../../../../../../utils/Constant";
import { P } from "../../../../../../AbstractElements";
import { Typeahead } from "react-bootstrap-typeahead";
import { multiWithHeaderData } from "../../../../../../Data/Forms/FormsWidgets/Typeahead/Typeahead";
import SimpleMdeReact from "react-simplemde-editor";
import { useDispatch } from "react-redux";
import { setFormValue } from "../../../../../../ReduxToolkit/Reducer/AddProductSlice";

const TabTwo = () => {
  const dispatch = useDispatch()
  const mdeEditorText = `Enter your messages...`;
  return (
    <div className="meta-body">
      <Form>
        <Row className="g-3">
          <Col xs="12">
            <Row className="g-3">
              <Col sm="6">
                <Row className="custom-input">
                  <Col xs="12">
                    <Label>{AdditionalTagTitle}</Label>
                  </Col>
                  <Col xs="12">
                    <Input type="text" name="additionalTag" onChange={(e)=>dispatch(setFormValue({name:"additionalTag",value:e.target.value}))}/>
                    <P className="f-light"> Add a new tag title. Keywords should be simple and accurate. </P>
                  </Col>
                </Row>
              </Col>
              <Col sm="6">
                <Row className="product-tag">
                  <Col xs="12">
                    <Label>{SpecificTags}</Label>
                  </Col>
                  <Col xs="12">
                    <Typeahead labelKey="name" options={multiWithHeaderData} multiple clearButton id="selectTwo" />
                  </Col>
                </Row>
              </Col>
              <Col xs="12">
                <Row>
                  <Col xs="12">
                    <Label> {AdditionalDescription} </Label>
                    <div id="editor4" >
                      <SimpleMdeReact id="editor_container" value={mdeEditorText} options={{ autofocus: false, spellChecker: true }} />
                    </div>
                    <P className="f-light">
                      Enhance your SEO ranking with an added tag description for
                      the product.
                    </P>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>
        </Row>
      </Form>
    </div>
  );
};

export default TabTwo;

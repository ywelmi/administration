import { Col, Input, Label, Row } from "reactstrap";
import { PublishStatus } from "../../../../../../utils/Constant";
import { P } from "../../../../../../AbstractElements";
import { useDispatch } from "react-redux";
import { setFormValue } from "../../../../../../ReduxToolkit/Reducer/AddProductSlice";

const SelectFour = () => {
  const dispatch = useDispatch()
  const handleStatus = (select:string) => {
    dispatch(setFormValue({name:"status",value:select}))
  }
  return (
    <Col sm="6">
      <Row>
        <Col xs="12">
          <Label for="validationServer01">{PublishStatus}</Label>
          <Input type="select" name="status" onChange={(e)=>handleStatus(e.target.value)}>
            <option>Publish</option>
            <option>Drafts</option>
            <option>Unpublish</option>
          </Input>
          <P className="f-light">Choose the status</P>
        </Col>
      </Row>
    </Col>
  );
};

export default SelectFour;

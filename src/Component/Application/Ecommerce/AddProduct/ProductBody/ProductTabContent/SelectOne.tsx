import { Col, Input, Label, Row } from "reactstrap";
import { AddCategory } from "../../../../../../utils/Constant";
import { P } from "../../../../../../AbstractElements";
import { useDispatch } from "react-redux";
import { setFormValue } from "../../../../../../ReduxToolkit/Reducer/AddProductSlice";

const SelectOne = () => {
  const dispatch = useDispatch()
  const handleCategory = (select:string) => {
    dispatch(setFormValue({name:"category",value:select}))
  }
  return (
    <Col sm="6">
      <Row className="g-2">
        <Col xs="12">
          <Label className="m-0">
            {AddCategory}
          </Label>
        </Col>
        <Col xs="12">
          <Input type="select" name="category" defaultValue="Toys & games" onChange={(e)=>handleCategory(e.target.value)}>
            <option>Toys & games</option>
            <option>Sportswear </option>
            <option>Jewellery </option>
            <option>Furniture and Decor</option>
            <option>Health, Personal Care, and Beauty</option>
            <option>Auto and Parts </option>
            <option>Baby Care Products</option>
          </Input>
          <P className="f-light">A product can be added to a category</P>
        </Col>
      </Row>
    </Col>
  );
};

export default SelectOne;

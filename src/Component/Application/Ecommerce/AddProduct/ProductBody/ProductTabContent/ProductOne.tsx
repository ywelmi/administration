import { Col, Form, Input, Label, Row } from "reactstrap";
import { ProductTitle } from "../../../../../../utils/Constant";
import { useDispatch } from "react-redux";
import { useAppSelector } from "../../../../../../ReduxToolkit/Hooks";
import FormEditors from "./FormEditors";
import { setFormValue } from "../../../../../../ReduxToolkit/Reducer/AddProductSlice";

const ProductOne = () => {
  const {formValue} = useAppSelector((state) => state.addProduct)
  const dispatch = useDispatch()
  return (
    <div className="sidebar-body">
      <Form>
        <Row className="g-2">
          <Col xs="12">
            <Label className="m-0">
              {ProductTitle} <span className="txt-danger"> *</span>
            </Label>
          </Col>
          <Col xs="12">
            <div className="custom-input">
              <Input className={formValue.userName !== "" ? "valid" : "is-invalid"} type="text" required name="F" onChange={(e)=>dispatch(setFormValue({name:"userName",value:e.target.value}))}/>
            </div>
          </Col>
          <FormEditors />
        </Row>
      </Form>
    </div>
  );
};

export default ProductOne;

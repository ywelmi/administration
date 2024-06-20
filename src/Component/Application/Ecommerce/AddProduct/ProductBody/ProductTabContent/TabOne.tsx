import { Col, Form, FormGroup, Input, Label, Row } from "reactstrap";
import { AllowBackOrders, LowStock, PreOrder, RestockDate, SKU, StockAvailability, StockQuantity } from "../../../../../../utils/Constant";
import { P } from "../../../../../../AbstractElements";
import { useDispatch } from "react-redux";
import { setFormValue } from "../../../../../../ReduxToolkit/Reducer/AddProductSlice";

const TabOne = () => {
  const dispatch = useDispatch()
  return (
    <div className="meta-body">
      <Form id="advance-tab">
        <Row className="g-3 custom-input">
          <Col sm="6">
            <Label>{StockAvailability}</Label>
            <Input type="select" name="stock" defaultValue={"In stock"} onChange={(e)=>dispatch(setFormValue({name:"stock",value:e.target.value}))}>
              <option>{"In stock"}</option>
              <option>{"Out of stock"}</option>
              <option>{"Pre-order"}</option>
            </Input>
          </Col>
          <Col sm="6">
            <Label>{LowStock}</Label>
            <Input type="select" name="lowStock" defaultValue={"Low Stock (5 or less)"} onChange={(e)=>dispatch(setFormValue({name:"lowStock",value:e.target.value}))}>
              <option>{"Low Stock (5 or less)"}</option>
              <option>{"Low Stock (10 or less)"}</option>
              <option>{"Low Stock (20 or less)"}</option>
              <option>{"Low Stock (25 or less)"}</option>
              <option>{"Low Stock (30 or less)"}</option>
            </Input>
          </Col>
          <Col lg="3" sm="6">
            <Label>
              {SKU} <span className="txt-danger">*</span>
            </Label>
            <Input type="text" name="sku" onChange={(e)=>dispatch(setFormValue({name:"sku",value:e.target.value}))}/>
          </Col>
          <Col lg="3" sm="6">
            <Label>
              {StockQuantity} <span className="txt-danger">*</span>
            </Label>
            <Input type="number" name="quantity" defaultValue={7} min={0} onChange={(e)=>dispatch(setFormValue({name:"quantity",value:e.target.value}))} />
          </Col>
          <Col lg="3" sm="6">
            <Label>
              {RestockDate} <span className="txt-danger">*</span>
            </Label>
            <Input type="number" name="restock" onChange={(e)=>dispatch(setFormValue({name:"restock",value:e.target.value}))}/>
          </Col>
          <Col lg="3" sm="6">
            <Label>
              {PreOrder} <span className="txt-danger">*</span>
            </Label>
            <Input type="number"/>
          </Col>
          <Col xs="12">
            <Label>
              {AllowBackOrders}
            </Label>
            <FormGroup check>
              <Input id="gridCheck" type="checkbox" />
              <Label className="m-0" for="gridCheck" check>
                This is a digital Product
              </Label>
              <P className="f-light">
                Decide if the product is a digital or physical item. Shipping
                may be necessary for real-world items.
              </P>
            </FormGroup>
          </Col>
        </Row>
      </Form>
    </div>
  );
};

export default TabOne;

import { Col, Form, Input, Label, Row } from "reactstrap";
import { City, Dimensions, Height, Length, ShippingClass, WeightKg, Width, ZipCode } from "../../../../../../utils/Constant";
import { useState } from "react";
import { P, ToolTip } from "../../../../../../AbstractElements";
import { useDispatch } from "react-redux";
import { setFormValue } from "../../../../../../ReduxToolkit/Reducer/AddProductSlice";

const TabThree = () => {
  const [tooltipOpen, setTooltipOpen] = useState(false);
  const toggle = () => setTooltipOpen(!tooltipOpen);
  const dispatch = useDispatch()
  return (
    <div className="meta-body">
      <Form>
        <Row className="g-3 custom-input">
          <Col xs="12">
            <Row className="gx-xl-3 gx-md-2 gy-md-0 g-2">
              <Col xs="12">
                <Label> Where can I pick up my order? </Label>
              </Col>
              <Col md="4" sm="6" >
                <Input type="number" placeholder={`${ZipCode} (10001)`} name="zipCode" onChange={(e)=>dispatch(setFormValue({name:"zipCode",value:e.target.value}))} />
              </Col>
              <Col md="4" sm="6">
                <Input type="text" name="city" placeholder={City} onChange={(e)=>dispatch(setFormValue({name:"city",value:e.target.value}))} />
              </Col>
              <Col md="4">
                <Input type="select" defaultValue={"State"} name="state" onChange={(e)=>dispatch(setFormValue({name:"state",value:e.target.value}))}>
                  <option>{"State"}</option>
                  <option>{"Gujarat"}</option>
                  <option>{"Punjab"}</option>
                  <option>{"Himachal pradesh"}</option>
                  <option>{"Goa"} </option>
                  <option>{"Sikkim"} </option>
                  <option>{"Telangana"}</option>
                </Input>
              </Col>
            </Row>
          </Col>
          <Col xs="12">
            <Row>
              <Col xs="12">
                <Label> {WeightKg} </Label>
                <i className="icon-help-alt ms-1" id="tooltip2" />
                <ToolTip target="tooltip2" placement="top" toggle={toggle} isOpen={tooltipOpen}>{"set proper weight for product items."}</ToolTip>
              </Col>
              <Col xs="12">
                <Input name="inputCity" type="number" onChange={(e)=>dispatch(setFormValue({name:"inputCity",value:e.target.value}))}/>
                <P className="f-light"> Decide if the product is a digital or physical item. Shipping may be necessary for real-world items. </P>
              </Col>
            </Row>
          </Col>
          <Col xs="12">
            <Row className="gx-xl-3 gx-md-2 gy-md-0 g-2">
              <Col xs="12">
                <Label>{Dimensions}</Label>
                <i className="icon-help-alt ms-1" id="tooltip2"></i>
                <ToolTip target="tooltip2" placement="top" toggle={toggle} isOpen={tooltipOpen}>{"set proper length/width and height for product items."}</ToolTip>
              </Col>
              <Col md="4" sm="6">
                <Input id="inputCity" type="number" placeholder={Length}/>
              </Col>
              <Col md="4" sm="6">
                <Input id="inputCity" type="number" placeholder={Width} />
              </Col>
              <Col md="4">
                <Input id="inputCity" type="number" placeholder={Height} />
              </Col>
            </Row>
          </Col>
          <Col xs="12">
            <Row>
              <Col xs="12">
                <Label> {ShippingClass} </Label>
              </Col>
              <Col md="12">
                <Input type="select" name="inputState" defaultValue={"Basic Shipping"} onChange={(e)=>dispatch(setFormValue({name:"inputState",value:e.target.value}))}>
                  <option>{"Basic Shipping"}</option>
                  <option>{"Expedited Shipping"}</option>
                  <option>{"International Shipping"}</option>
                  <option>{"Free Shipping"}</option>
                  <option>{"Same-Day or Next-Day Shipping"}</option>
                  <option>{"Flat Rate Shipping"}</option>
                  <option>{"Local Pickup"}</option>
                </Input>
              </Col>
            </Row>
          </Col>
        </Row>
      </Form>
    </div>
  );
};

export default TabThree;

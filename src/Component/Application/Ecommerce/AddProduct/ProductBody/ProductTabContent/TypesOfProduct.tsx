import { Col, Input, Label } from "reactstrap";
import { TypesOfProductDiscount } from "../../../../../../utils/Constant";
import { LI, ToolTip, UL } from "../../../../../../AbstractElements";
import { useState } from "react";
import { typesOfProductData } from "../../../../../../Data/Application/Ecommerce/AddProduct";

const TypesOfProduct = () => {
  const [tooltipOpen, setTooltipOpen] = useState(false);
  const toggle = () => setTooltipOpen(!tooltipOpen);
  return (
    <Col xs="12">
      <Label for="exampleFormControlInput1">
        {TypesOfProductDiscount}
        <i className="icon-help-alt ms-1" id="tooltip1" />
        <ToolTip target="tooltip1" placement="top" toggle={toggle} isOpen={tooltipOpen}>{"Choose the kind of discount that will be used on that particular item."}</ToolTip>
      </Label>
      <UL className="radio-wrapper simple-list flex-row">
        {typesOfProductData.map((data, i) => (
          <LI key={i}>
            <Input id={data.id} type="radio" name="radio5" defaultValue="option5" />
            <Label className="form-check-label" for={data.id}>
              <span>{data.title}</span>
            </Label>
          </LI>
        ))}
      </UL>
    </Col>
  );
};

export default TypesOfProduct;

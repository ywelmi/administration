import { Col, Form, Input, Label, Row } from "reactstrap";
import { ChooseYourCurrency, InitialCost, ProductStocks, SellingPrice } from "../../../../../../utils/Constant";
import TypesOfProduct from "./TypesOfProduct";
import { useDispatch } from "react-redux";
import { setFormValue } from "../../../../../../ReduxToolkit/Reducer/AddProductSlice";

const ProductFour = () => {
  const dispatch = useDispatch()
  return (
    <div className="sidebar-body">
      <Form className="price-wrapper">
        <Row className="g-3 custom-input">
          <Col sm="6">
            <Label>{InitialCost}
              <span className="txt-danger">*</span>
            </Label>
            <Input type="number" name="initialCost" onChange={(e)=> dispatch(setFormValue({name:"initialCost",value:e.target.value}))}/>
          </Col>
          <Col sm="6">
            <Label>
              {SellingPrice} <span className="txt-danger">*</span>
            </Label>
            <Input type="number" name="initialPrice" onChange={(e)=>dispatch(setFormValue({name:"initialPrice",value:e.target.value}))}/>
          </Col>
          <Col sm="6">
            <Label>{ChooseYourCurrency}</Label>
            <Input type="select" defaultValue={"Dollar $"} name="select" onChange={(e)=>dispatch(setFormValue({name:"select",value:e.target.value}))} >
              <option>Dollar $</option>
              <option>Euro €</option>
              <option>Rupees ₹</option>
              <option>British pounds £</option>
              <option>Russian Ruble ₽</option>
              <option>Japanese Yen ¥</option>
              <option>Singapore Dollar S$</option>
            </Input>
          </Col>
          <Col sm="6">
            <Label>
              {ProductStocks}
              <span className="txt-danger">*</span>
            </Label>
            <Input type="number" name="productStocks" onChange={(e)=>dispatch(setFormValue({name:"productStocks",value:e.target.value}))}/>
          </Col>
          <TypesOfProduct />
        </Row>
      </Form>
    </div>
  );
};

export default ProductFour;

import { Col, Row } from "reactstrap";
import TotalSalesCard from "./TotalSalesCard";
import SaleHistory from "./SaleHistory";

const TotalSales = () => {
  return (
    <Col xxl="6" className="box-col-12">
      <Row>
        <TotalSalesCard changeClass={false}/>
        <SaleHistory />
      </Row>
    </Col>
  );
};

export default TotalSales;

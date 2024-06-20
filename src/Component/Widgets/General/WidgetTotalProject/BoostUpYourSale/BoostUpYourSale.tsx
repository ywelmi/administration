import { Col, Row } from "reactstrap";
import BoostUpYourSaleCard from "./BoostUpYourSaleCard";
import Deliveries from "./Deliveries";

const BoostUpYourSale = () => {
  return (
    <Col xl="4" lg="6">
      <Row>
        <BoostUpYourSaleCard />
        <Deliveries />
      </Row>
    </Col>
  );
};

export default BoostUpYourSale;

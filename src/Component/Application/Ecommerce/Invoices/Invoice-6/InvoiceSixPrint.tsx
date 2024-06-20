import { Col } from "reactstrap";
import { Btn } from "../../../../../AbstractElements";
import { Cancel, Print } from "../../../../../utils/Constant";

const InvoiceSixPrint = () => {
  return (
    <Col sm="12" className="text-center mt-3">
      <Btn color="primary" className="me-2">
        {Print}
      </Btn>
      <Btn color="secondary">
        {Cancel}
      </Btn>
    </Col>
  );
};

export default InvoiceSixPrint;

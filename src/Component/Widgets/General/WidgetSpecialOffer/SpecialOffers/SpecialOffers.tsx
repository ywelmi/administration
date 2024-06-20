import { Card, Col } from "reactstrap";
import { H4, P } from "../../../../../AbstractElements";

const SpecialOffers = () => {
  return (
    <Col xl="12" className="special-Offer-banner">
      <Card>
        <div className="special-Offer img-fluid">
          <div className="offer-contain">
            <H4>Today’s Special Offer</H4>
            <P className="mb-0 mt-2">You can flat get 20% off on your next pro version</P>
            <P className="text-align-center">if your sale break your last record.</P>
          </div>
        </div>
      </Card>
    </Col>
  );
};

export default SpecialOffers;

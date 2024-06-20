import { Card, Col } from "reactstrap";
import { H4, P } from "../../../../AbstractElements";

const SpecialOffer = () => {
  return (
    <Col xl="3" md="6" className="special-Offer-banner box-col-none">
      <Card>
        <div className="special-Offer">
          <div className="offer-contain">
            <H4>Today’s Special Offer</H4>
            <P className="mt-2 text-center">
              You can flat get 20% off on your next pro version if your sale
              break your last record.
            </P>
          </div>
        </div>
      </Card>
    </Col>
  );
};

export default SpecialOffer;

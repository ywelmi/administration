import { Card, Col, Row } from "reactstrap";
import { Btn, H6, Image, P } from "../../../../../AbstractElements";
import { dynamicImage } from "../../../../../Service";
import { UpgradeNow } from "../../../../../utils/Constant";

const BoostUpYourSaleCard = () => {
  return (
    <Col md="12" sm="6">
      <Card className="boost-up-card overflow-hidden">
        <div className="p-4">
          <Row className="boostup-name">
            <H6 className="text-white f-28 f-w-700 mb-2 z-1 ">Boost up your sale</H6>
            <Col xs="9">
              <P className="text-white f-14 f-w-500 line-clamp">by upgrading your increase sale by 30% more.</P>
            </Col>
          </Row>
          <div className="img-boostup">
            <Image className="img-boostup-img-1" src={dynamicImage(`dashboard-3/boostup1.png`)} alt="boostup"/>
          </div>
          <div className="btn-showcase text-start">
            <Btn outline color="light-2x" className="btn-pill b-r-8">{UpgradeNow}</Btn>
          </div>
        </div>
      </Card>
    </Col>
  );
};

export default BoostUpYourSaleCard;

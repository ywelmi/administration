import { Link } from "react-router-dom";
import { Card, CardBody, Col } from "reactstrap";
import { UpgradeNowHeading } from "../../../../../utils/Constant";
import { Btn } from "../../../../../AbstractElements";

const UpgradeNow = () => {
  return (
    <Col xl="12" md="6">
      <Card className="overflow-hidden">
        <CardBody className="pt-0 project-ideas-card">
          <div className="project-card">
            <div>
              <span className="f-22 f-w-500 text-center">
                Get more ideas for your important project
              </span>
              <div className="btn-showcase text-center">
                <Link to={`${process.env.PUBLIC_URL}/ecommerce/pricing`}>
                  <Btn outline color="primary-2x" className="btn-pill b-r-8" active>
                    {UpgradeNowHeading}
                  </Btn>
                </Link>
              </div>
            </div>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default UpgradeNow;

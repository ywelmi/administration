import { Card, CardBody, Col } from "reactstrap";
import { H2, SVG } from "../../../../AbstractElements";
import CardBubbles from "./CardBubbles";
import { totalProjectCardData } from "../../../../Data/Dashboard/Ecommerce/Ecommerce";

const TotalProjectCard = () => {
  return (
    <>
      {totalProjectCardData.map((data, i) => (
        <Col xl="3" sm="6" key={i}>
          <Card className="o-hidden small-widget">
            <CardBody className={`total-${data.class} border-b-${data.color !== "light" ? data.color : ""} border-2`}>
              <span className="f-light f-w-500 f-14">{data.title}</span>
              <div className="project-details">
                <div className="project-counter">
                  <H2 className="f-w-600">{data.count}</H2>
                  <span className="f-12 f-w-400">(This month)</span>
                </div>
                <div className={`product-sub bg-${data.color}-light`}>
                  <SVG className="invoice-icon" iconId={data.svgIcon} />
                </div>
              </div>
              <CardBubbles />
            </CardBody>
          </Card>
        </Col>
      ))}
    </>
  );
};

export default TotalProjectCard;

import { Card, CardBody, Col } from "reactstrap";
import { H2, LI, SVG, UL } from "../../../../AbstractElements";
import { totalSalesData } from "../../../../Data/Dashboard/Default";
import { PropsWidgetsType } from "../../../../Types/Widgets/GeneralType";

const TotalSalesCard:React.FC<PropsWidgetsType> = ({changeClass}) => {
  return (
    <Col xl={changeClass ? "4":"5"} sm="6">
      <Card className="height-equal">
        <CardBody>
          {totalSalesData.map((data,i)=>(
            <UL className="product-costing simple-list" key={i}>
              <LI className="product-cost">
                <div className={`product-icon bg-${data.color}`}>
                  <SVG iconId={data.icon} />
                </div>
                <div>
                  <span className="f-w-500 f-14 mb-0">{data.title}</span>
                  <H2 className="f-w-600">{data.amount}</H2>
                </div>
              </LI>
              <LI>
                <span className="f-light f-14 f-w-500">
                  {data.detail}
                </span>
              </LI>
            </UL>
          ))}
        </CardBody>
      </Card>
    </Col>
  );
};

export default TotalSalesCard;

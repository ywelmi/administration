import { Card, CardBody, Col } from "reactstrap";
import CardHeaderCommon from "../../../../CommonElements/CommonCardHeader/CardHeaderCommon";
import { BestSellingProductHeading } from "../../../../utils/Constant";
import { LI, UL } from "../../../../AbstractElements";
import { balanceData } from "../../../../Data/Dashboard/OnlineCourse";
import ReactECharts from 'echarts-for-react';
import { bestSellingProductChartData } from "../../../../Data/Dashboard/DashboardChart";

const BestSellingProduct = () => {
  return (
    <Col xxl="3" xl="6" className="box-col-6">
      <Card>
        <CardHeaderCommon title={BestSellingProductHeading} />
        <CardBody className="pt-0">
          <div className="selling-product">
            <ReactECharts className="apache-cotainer" option={bestSellingProductChartData} />
            <div className="sales-chart-dropdown">
              <UL className="balance-data flex-row">
                {balanceData.map((data,i)=>(
                  <LI key={i}>
                    <span className={`circle bg-${data.color}`} />
                    <span className="f-light ms-1">{data.title}</span>
                  </LI>
                ))}
              </UL>
            </div>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default BestSellingProduct;
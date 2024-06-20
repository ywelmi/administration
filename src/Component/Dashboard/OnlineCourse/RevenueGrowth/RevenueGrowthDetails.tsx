import { Col } from "reactstrap";
import { H4, P } from "../../../../AbstractElements";
import { revenueGrowthDetailsData } from "../../../../Data/Dashboard/DashboardChart";

const RevenueGrowthDetails = () => {
  return (
    <Col xxl="4" xl="4" className="d-xxl-block d-none ">
      <div className="revenuegrowth-details">
        {revenueGrowthDetailsData.map((data, i) => (
          <div className="growth-details"  key={i}>
            <span className="f-light f-12  text-uppercase">{data.title}</span>
            <H4 className="f-w-500 mb-2">{data.amount} </H4>
            <div className="d-flex justify-content-center align-items-center gap-2 mb-4">
              <P className="mb-0 f-w-500 f-12">Compared to</P>
              <span className={`${i === 1 ? "txt-secondary" :"f-light"} f-12 f-w-500`}>({data.percentage})</span>
              <P className="mb-0 f-w-500 f-12">last year</P>
            </div>
          </div>
        ))}
      </div>
    </Col>
  );
};

export default RevenueGrowthDetails;

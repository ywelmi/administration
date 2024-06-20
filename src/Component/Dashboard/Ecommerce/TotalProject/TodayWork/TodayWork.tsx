import { Card, CardBody, Col, Table } from "reactstrap";
import CardHeaderCommon from "../../../../../CommonElements/CommonCardHeader/CardHeaderCommon";
import { TodayWorkHeading } from "../../../../../utils/Constant";
import TodayWorkTableBody from "./TodayWorkTableBody";

const TodayWork = () => {
  return (
    <Col md="6">
      <Card>
        <CardHeaderCommon title={TodayWorkHeading} subTitle="View All" />
        <CardBody className="pt-0">
          <div className="today-work-table">
            <div className="table-responsive custom-scrollbar">
              <Table className="today-working-table w-100" >
                <TodayWorkTableBody />
              </Table>
            </div>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default TodayWork;

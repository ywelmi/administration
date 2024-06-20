import { Card, CardBody, Col, Table } from "reactstrap";
import CardHeaderCommon from "../../../../CommonElements/CommonCardHeader/CardHeaderCommon";
import { TeamActivityHeading } from "../../../../utils/Constant";
import TeamActivityTableBody from "./TeamActivityTableBody";

const TeamActivity = () => {
  return (
    <Col xxl="5" sm="6" className="box-col-6">
      <Card className="height-equal">
        <CardHeaderCommon headClass="pb-0" title={TeamActivityHeading} subTitle="View All" />
        <CardBody className="pt-0">
          <div className="activity-table custom-scrollbar">
            <div className="table-responsive custom-scrollbar">
              <Table className="order-table overflow-hidden project-table w-100 activity-log">
                <tbody> 
                  <TeamActivityTableBody />
                </tbody>
              </Table> 
            </div>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default TeamActivity;

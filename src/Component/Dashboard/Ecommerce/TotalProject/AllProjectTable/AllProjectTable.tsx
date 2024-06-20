import { Card, CardBody, Col, Table } from "reactstrap";
import CardHeaderCommon from "../../../../../CommonElements/CommonCardHeader/CardHeaderCommon";
import { AllProjectTableHeading } from "../../../../../utils/Constant";
import AllProjectTableBody from "./AllProjectTableBody";

const AllProjectTable = () => {
  return (
    <Col xxl="12">
      <Card className="recent-order">
        <CardHeaderCommon title={AllProjectTableHeading} subTitle="View All" />
        <CardBody className="pt-0">
          <div className="project-table">
            <div className="table-responsive custom-scrollbar">
              <Table className="order-table project-table w-100">
                <thead>
                  <tr>
                    <th>Project Name</th>
                    <th>Client Name</th>
                    <th>End Date</th>
                    <th>Assigned to</th>
                    <th>Status</th>
                    <th>Progress</th>
                  </tr>
                </thead>
                <AllProjectTableBody />
              </Table>
            </div>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default AllProjectTable;

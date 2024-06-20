import { Card, CardBody, Col, Table } from "reactstrap";
import CardHeaderCommon from "../../../../../CommonElements/CommonCardHeader/CardHeaderCommon";
import { TopClientListHeading } from "../../../../../utils/Constant";
import TopClientTableBody from "./TopClientTableBody";

const TopClientList = () => {
  return (
    <Col xl="5" className="box-col-6">
      <Card className="recent-order">
        <CardHeaderCommon title={TopClientListHeading} subTitle="View All" />
        <CardBody className="pt-0">
          <div className="client-list-table">
            <div className="table-responsive custom-scrollbar">
              <Table className="order-table w-100">
                <tbody>
                  <TopClientTableBody />
                </tbody>
              </Table>
            </div>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default TopClientList;

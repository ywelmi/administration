import { Card, CardBody, Col, Table } from "reactstrap";
import CardHeaderCommon from "../../../../CommonElements/CommonCardHeader/CardHeaderCommon";
import { LatestTransactionHeading } from "../../../../utils/Constant";
import LatestTransactionTableBody from "./LatestTransactionTableBody";

const LatestTransaction = () => {
  return (
    <Col xxl="5" xl="6" className="box-col-6">
      <Card>
        <CardHeaderCommon title={LatestTransactionHeading} subTitle="View All" />
        <CardBody className="pt-0">
          <div className="table-order">
            <div className="table-responsive custom-scrollbar">
              <Table className=" w-100 tranaction-table">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Date</th>
                    <th>Amount</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <LatestTransactionTableBody />
              </Table>
            </div>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default LatestTransaction;

import { CardBody, Table } from "reactstrap";
import LatestOrdersTableBody from "./LatestOrdersTableBody";

const LatestOrdersTable = () => {
  return (
    <CardBody className="pt-0">
      <div className="table-order ">
        <div className="table-responsive custom-scrollbar">
          <Table className="latest-orders w-100">
            <thead>
              <tr>
                <th>Order ID</th>
                <th>Billing Name</th>
                <th>Amount</th>
                <th>Status</th>
                <th>Invoice</th>
              </tr>
            </thead>
            <LatestOrdersTableBody />
          </Table>
        </div>
      </div>
    </CardBody>
  );
};

export default LatestOrdersTable;

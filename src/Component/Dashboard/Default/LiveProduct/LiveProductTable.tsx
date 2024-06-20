import { Table } from "reactstrap";
import LiveProductTableBody from "./LiveProductTableBody";

const LiveProductTable = () => {
  return (
    <div className="table-order"> 
      <div className="table-responsive custom-scrollbar">
        <Table className="order-table w-100">
          <thead>
            <tr>
              <th>Product Name</th>
              <th>Type</th>
              <th>Stock</th>
              <th>Variants</th>
              <th>Action</th>
            </tr>
          </thead>
          <LiveProductTableBody />
        </Table>
      </div>
    </div>
  );
};

export default LiveProductTable;

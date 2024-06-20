import { Card, CardBody, CardHeader, Col, Table } from "reactstrap";
import { H4, SVG } from "../../../../AbstractElements";
import { DeliveriesHeading } from "../../../../utils/Constant";
import DeliveriesTableBody from "./DeliveriesTableBody";

const Deliveries = () => {
  return (
    <Col md="12" sm="6">
      <Card>
        <CardHeader className="card-no-border total-revenue pb-0">
          <H4>{DeliveriesHeading}</H4>
          <div className="icon-menu-header">
            <SVG iconId="more-horizontal" />
          </div>
        </CardHeader>
        <CardBody className="pt-0">
          <div className="deliveries-percentage">
            <div className="table-responsive custom-scrollbar"> 
              <Table className="percentage-data w-100">
                <thead>
                    <tr>
                      <th className="f-light f-12 f-w-500" scope="col">
                        Particular
                      </th>
                      <th className="f-light f-12 f-w-500" scope="col">
                        Percentage
                      </th>
                      <th className="f-light f-12 f-w-500 text-end" scope="col">
                        Total Amount
                      </th>
                    </tr>
                  </thead> 
                <DeliveriesTableBody />
              </Table>
            </div>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default Deliveries;

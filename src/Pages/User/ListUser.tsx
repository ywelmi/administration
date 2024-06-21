import { Card, CardBody, CardHeader, Col, Container, Row } from "reactstrap";
import Breadcrumbs from "../../CommonElements/Breadcrumbs/Breadcrumbs";
import {
  BasicDataTables,
  DataTables,
  ZeroConfiguration,
} from "../../utils/Constant";
import { H4 } from "../../AbstractElements";
import DataTable from "react-data-table-component";

const columns = ["username", "fullname"];
const ListUser = () => {
  const 
  return (
    <div className="page-body">
      <Breadcrumbs mainTitle={BasicDataTables} parent={DataTables} />
      <Container fluid>
        <Row>
          <Col sm="12">
            <Card>
              <CardHeader className="pb-0 card-no-border">
                <H4>{ZeroConfiguration}</H4>
                <span>
                  DataTables has most features enabled by default, so all you
                  need to do to use it with your own tables is to call the
                  construction function:<code>$().DataTable();</code>.
                </span>
                <span>
                  earching, ordering and paging goodness will be immediately
                  added to the table, as shown in this example.
                </span>
              </CardHeader>
              <CardBody>
                <div className="table-responsive">
                  <DataTable
                    columns={zeroConfigurationColumn}
                    data={filteredItems}
                    pagination
                    subHeader
                    subHeaderComponent={subHeaderComponentMemo}
                    highlightOnHover
                    striped
                    persistTableHead
                  />
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export { ListUser };

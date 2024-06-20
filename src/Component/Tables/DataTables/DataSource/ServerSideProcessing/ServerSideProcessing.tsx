import React, { useMemo, useState } from 'react'
import { Card, CardBody, CardHeader, Col, Input, Label } from 'reactstrap';
import { SearchTableButton, ServerSideProcessingHeading } from '../../../../../utils/Constant';
import { H4 } from '../../../../../AbstractElements';
import { serverColumn, serverData } from '../../../../../Data/Tables/DataTables/DataSource/DataSource';
import DataTable from "react-data-table-component";

const ServerSideProcessing = () => {
    const [filterText, setFilterText] = useState("");

    const filteredItems = serverData.filter((item) => item.name && item.name.toLowerCase().includes(filterText.toLowerCase()));
    const subHeaderComponentMemo = useMemo(() => {
      return (
        <div id="dataSource" className="dataTables_filter d-flex align-items-center">
          <Label className="me-1">{SearchTableButton}:</Label>
          <Input onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFilterText(e.target.value)} type="search" value={filterText} />
        </div>
      );
    }, [filterText]);
  
    return (
      <Col sm="12">
        <Card>
          <CardHeader className="pb-0 card-no-border">
            <H4 className="mb-3">{ServerSideProcessingHeading}</H4>
            <span>There are many ways to get your data into DataTables, and if you are working with seriously large databases, you might want to consider using the server-side options that DataTables provides. With server-side processing enabled, all paging, searching, ordering actions that DataTables performs are handed off to a server where an SQL engine (or similar) can perform these actions on the large data set (after all, that's what the database engine is designed for!). As such, each draw of the table will result in a new Ajax request being made to get the required data.</span>
            <span>Server-side processing is enabled by setting the
              <code className="option" title="DataTables initialisation option">serverSide:option</code>option to <code>true</code> and providing an Ajax data source through the
              <code className="option" title="DataTables initialisation option">ajax:option</code>option.
            </span>
          </CardHeader>
          <CardBody>
            <div className="table-responsive">
              <DataTable data={filteredItems} columns={serverColumn} striped highlightOnHover pagination subHeader subHeaderComponent={subHeaderComponentMemo} />
            </div>
          </CardBody>
        </Card>
      </Col>
    );
}

export default ServerSideProcessing
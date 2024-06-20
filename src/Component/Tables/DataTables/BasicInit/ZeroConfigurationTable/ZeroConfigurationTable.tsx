import React, { useMemo, useState } from 'react'
import { Card, CardBody, CardHeader, Col, Input, Label } from 'reactstrap';
import { SearchTableButton, ZeroConfiguration } from '../../../../../utils/Constant';
import { H4 } from '../../../../../AbstractElements';
import DataTable from "react-data-table-component";
import { zeroConfigurationColumn, zeroConfigurationData } from '../../../../../Data/Tables/DataTables/BasicInit/BasicInit';

const ZeroConfigurationTable = () => {
    const [filterText, setFilterText] = useState("");

    const filteredItems = zeroConfigurationData.filter((item) => item.name && item.name.toLowerCase().includes(filterText.toLowerCase()));
    const subHeaderComponentMemo = useMemo(() => {
      return (
        <div id="basic-1_filter" className="dataTables_filter d-flex align-items-center">
          <Label className="me-2">{SearchTableButton}:</Label>
          <Input onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFilterText(e.target.value)} type="search" value={filterText} />
        </div>
      );
    }, [filterText]);
  
    return (
      <Col sm="12">
        <Card>
          <CardHeader className="pb-0 card-no-border">
            <H4>{ZeroConfiguration}</H4>
            <span>DataTables has most features enabled by default, so all you need to do to use it with your own tables is to call the construction function:<code>$().DataTable();</code>.</span>
            <span>earching, ordering and paging goodness will be immediately added to the table, as shown in this example.</span>
          </CardHeader>
          <CardBody>
            <div className="table-responsive">
              <DataTable columns={zeroConfigurationColumn} data={filteredItems} pagination subHeader subHeaderComponent={subHeaderComponentMemo} highlightOnHover striped persistTableHead />
            </div>
          </CardBody>
        </Card>
      </Col>
    );
}

export default ZeroConfigurationTable
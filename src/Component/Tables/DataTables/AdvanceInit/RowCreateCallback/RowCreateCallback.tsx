import React, { useMemo, useState } from 'react'
import { Card, CardBody, CardHeader, Col, Input, Label } from 'reactstrap';
import { RowCreateCallBackSpan, SearchTableButton } from '../../../../../utils/Constant';
import { H4 } from '../../../../../AbstractElements';
import DataTable from "react-data-table-component";
import { rowCreateCallColumn, rowCreateCallData, rowCreateCallList } from '../../../../../Data/Tables/DataTables/AdvanceInit/AdvanceInit';

const RowCreateCallback = () => {
    const [filterText, setFilterText] = useState("");

    const filteredItems = rowCreateCallList.filter((item) =>item.name && item.name.toLowerCase().includes(filterText.toLowerCase()));
    const subHeaderComponentMemo = useMemo(() => {
      return (
        <div id="row_create_filter" className="dataTables_filter d-flex align-items-center">
          <Label className="me-1">{SearchTableButton}:</Label>
          <Input onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFilterText(e.target.value)} type="search" value={filterText} />
        </div>
      );
    }, [filterText]);
  
    return (
      <Col sm="12">
        <Card>
          <CardHeader className="pb-0 card-no-border">
            <H4>{RowCreateCallBackSpan}</H4>
            {rowCreateCallData.map((item, index) => (
              <span key={index}>{item}</span>
            ))}
          </CardHeader>
          <CardBody>
            <div className="table-responsive theme-scrollbar" id="row_create">
              <DataTable data={filteredItems} columns={rowCreateCallColumn} highlightOnHover striped pagination className="display dataTable" subHeader subHeaderComponent={subHeaderComponentMemo}/>
            </div>
          </CardBody>
        </Card>
      </Col>
    );
}

export default RowCreateCallback
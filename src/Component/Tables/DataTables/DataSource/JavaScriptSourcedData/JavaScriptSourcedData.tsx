import React, { useMemo, useState } from 'react'
import { javaScriptSourceColumn, javaScriptSourceData } from '../../../../../Data/Tables/DataTables/DataSource/DataSource';
import { SearchTableButton } from '../../../../../utils/Constant';
import { Card, CardBody, Col, Input, Label } from 'reactstrap';
import DataTable from "react-data-table-component";
import JavaScriptTableCardHeader from './JavaScriptTableCardHeader';

const JavaScriptSourcedData = () => {
    const [filterText, setFilterText] = useState("");

    const filteredItems = javaScriptSourceData.filter((item) => item.name && item.name.toLowerCase().includes(filterText.toLowerCase()));
    const subHeaderComponentMemo = useMemo(() => {
      return (
        <div id="data-source-3_filter" className="dataTables_filter d-flex align-items-center">
          <Label className="me-1">{SearchTableButton}:</Label>
          <Input onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFilterText(e.target.value)} type="search" value={filterText} />
        </div>
      );
    }, [filterText]);
  
    return (
      <Col sm="12">
        <Card>
          <JavaScriptTableCardHeader/>
          <CardBody>
            <div className="table-responsive">
              <DataTable data={filteredItems} columns={javaScriptSourceColumn} striped highlightOnHover pagination subHeader subHeaderComponent={subHeaderComponentMemo} />
            </div>
          </CardBody>
        </Card>
      </Col>
    );
}

export default JavaScriptSourcedData
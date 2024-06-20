import React, { useMemo, useState } from 'react'
import { ChildrenRowsTitle, SearchTableButton } from '../../../../../utils/Constant';
import DataTable from "react-data-table-component";
import { Card, CardBody, Col, Input, Label } from 'reactstrap';
import { zeroConfigurationData } from '../../../../../Data/Tables/DataTables/BasicInit/BasicInit';
import { childRowColumn, childRowData } from '../../../../../Data/Tables/DataTables/ApiDataTable/ApiDataTable';
import CustomExpandableComponent from './CustomExpandableComponent';
import CommonCardHeader from '../../../../../CommonElements/CommonCardHeader/CommonCardHeader';

const ChildRows = () => {
    const [filterText, setFilterText] = useState("");

    const filteredItems = zeroConfigurationData.filter((item) =>item.office && item.office.toLowerCase().includes(filterText.toLowerCase()));
    
    const subHeaderComponentMemo = useMemo(() => {
      return (
        <div id="API-chield-row_filter" className="dataTables_filter d-flex align-items-center">
          <Label className="me-2">{SearchTableButton}:</Label>
          <Input onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFilterText(e.target.value)} type="search" value={filterText} />
        </div>
      );
    }, [filterText]);
    
    return (
      <Col sm="12">
        <Card>
          <CommonCardHeader title={ChildrenRowsTitle} span={childRowData} />
          <CardBody>
            <div className="table-responsive">
              <div id="API-chield-row">
                <DataTable data={filteredItems} columns={childRowColumn} pagination expandableRows expandableRowsComponent={CustomExpandableComponent} striped  highlightOnHover className="display" subHeader subHeaderComponent={subHeaderComponentMemo}/>
              </div>
            </div>
          </CardBody>
        </Card>
      </Col>
    );
}

export default ChildRows
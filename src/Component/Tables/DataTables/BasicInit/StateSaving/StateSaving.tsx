import React, { useMemo, useState } from 'react'
import { Card, CardBody, Col, Input, Label } from 'reactstrap';
import { SearchTableButton } from '../../../../../utils/Constant';
import DataTable from "react-data-table-component";
import StateSavingCardHeader from './StateSavingCardHeader';
import { stateSavingColumns, stateSavingDataList } from '../../../../../Data/Tables/DataTables/BasicInit/BasicInit';

const StateSaving = () => {
    const [filterText, setFilterText] = useState("");

    const filteredItems = stateSavingDataList.filter((item) => item.name && item.name.toLowerCase().includes(filterText.toLowerCase()));
    const subHeaderComponentMemo = useMemo(() => {
      return (
        <div id="basic-9_filter" className="dataTables_filter d-flex align-items-center">
          <Label className="me-2">{SearchTableButton}:</Label>
          <Input onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFilterText(e.target.value)} type="search" value={filterText} />
        </div>
      );
    }, [filterText]);
  
    return (
      <Col sm="12">
        <Card>
          <StateSavingCardHeader />
          <CardBody>
            <div className="table-responsive">
              <DataTable data={filteredItems} columns={stateSavingColumns} striped pagination subHeader subHeaderComponent={subHeaderComponentMemo} />
            </div>
          </CardBody>
        </Card> 
      </Col>
    );
}

export default StateSaving
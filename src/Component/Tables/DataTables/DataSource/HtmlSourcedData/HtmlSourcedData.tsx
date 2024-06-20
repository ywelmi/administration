import React, { useMemo, useState } from 'react'
import { HtmlTableTittle, SearchTableButton } from '../../../../../utils/Constant';
import { Card, CardBody, Col, Input, Label } from 'reactstrap';
import DataTable from "react-data-table-component";
import { htmlColumn, htmlColumnData, htmlData } from '../../../../../Data/Tables/DataTables/DataSource/DataSource';
import CommonCardHeader from '../../../../../CommonElements/CommonCardHeader/CommonCardHeader';

const HtmlSourcedData = () => {
    const [filterText, setFilterText] = useState("");

    const filteredItems = htmlColumnData.filter((item) =>item.name && item.name.toLowerCase().includes(filterText.toLowerCase()));
    const subHeaderComponentMemo = useMemo(() => {
      return (
        <div id="basic-1_filter" className="dataTables_filter d-flex align-items-center">
          <Label className="me-1">{SearchTableButton}:</Label>
          <Input onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFilterText(e.target.value)} type="search" value={filterText} />
        </div>
      );
    }, [filterText]);
  
    return (
      <Col sm="12">
        <Card>
          <CommonCardHeader title={HtmlTableTittle} span={htmlData} headClass="pb-0 card-no-border" />
          <CardBody>
            <div className="table-responsive">
              <DataTable data={filteredItems} columns={htmlColumn} striped highlightOnHover pagination subHeader subHeaderComponent={subHeaderComponentMemo}/>
            </div>
          </CardBody>
        </Card>
      </Col>
    );
}

export default HtmlSourcedData
import React, { useMemo, useState } from 'react'
import { Card, CardBody, CardHeader, Col, Input, Label } from 'reactstrap';
import { ScrollVerticalDynamicHeightTitle, SearchTableButton } from '../../../../../utils/Constant';
import DataTable from "react-data-table-component";
import { H4 } from '../../../../../AbstractElements';
import { scrollVerticalColumns, scrollVerticalData } from '../../../../../Data/Tables/DataTables/BasicInit/BasicInit';

const ScrollVerticalDynamicHeight = () => {
    const ScrollVertical1 = `This example shows a vertically scrolling DataTable that makes use of the CSS3 vh unit in order to dynamically resize the viewport based on the browser window height. The vh unit is effectively a percentage of the browser window height. So the 50vh used in this example is 50% of the window height. The viewport size will update dynamically as the window is resized.`;
    const ScrollVertical2 = `A relatively modern browser is required for vh units to operate correctly. IE9+ supports the vh unit and all other evergreen browsers.`;
  
    const [filterText, setFilterText] = useState("");
  
    const filteredItems = scrollVerticalData.filter((item) =>item.title && item.title.toLowerCase().includes(filterText.toLowerCase()));
    const subHeaderComponentMemo = useMemo(() => {
      return (
        <div id="basic-12_filter" className="dataTables_filter d-flex align-items-center">
          <Label className="me-2">{SearchTableButton}:</Label>
          <Input onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFilterText(e.target.value)} type="search" value={filterText} />
        </div>
      );
    }, [filterText]);
  
    return (
      <Col sm="12">
        <Card>
          <CardHeader className="pb-0 card-no-border">
            <H4>{ScrollVerticalDynamicHeightTitle}</H4>
            <span>{ScrollVertical1}</span>
            <span>{ScrollVertical2}</span>
          </CardHeader>
          <CardBody>
            <div className="table-responsive user-datatable custom-scrollbar">
              <DataTable  data={filteredItems} columns={scrollVerticalColumns} striped fixedHeader fixedHeaderScrollHeight="40vh" className="display dataTable custom-scrollbar" subHeader subHeaderComponent={subHeaderComponentMemo} />
            </div>
          </CardBody>
        </Card>
      </Col>
    );
}

export default ScrollVerticalDynamicHeight
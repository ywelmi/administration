import React, { useMemo, useState } from 'react'
import DataTable from "react-data-table-component";
import { Card, CardBody, CardHeader, Col, Input, Label } from 'reactstrap';
import { SearchTableButton, StockResultTitle } from '../../../../../utils/Constant';
import { H4 } from '../../../../../AbstractElements';
import { stockResultColumn, stockResultData, stockResultList } from '../../../../../Data/Tables/DataTables/AdvanceInit/AdvanceInit';

const StockResult = () => {
    const [filterText, setFilterText] = useState("");

    const filteredItems = stockResultData.filter((item) =>item.name && item.name.toLowerCase().includes(filterText.toLowerCase()));
    const subHeaderComponentMemo = useMemo(() => {
      return (
        <div id="stock_filter" className="dataTables_filter d-flex align-items-center">
          <Label className="me-1">{SearchTableButton}:</Label>
          <Input onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFilterText(e.target.value)} type="search" value={filterText} />
        </div>
      );
    }, [filterText]);
  
    return (
      <Col sm="12">
        <Card>
          <CardHeader className="pb-0 card-no-border">
            <H4>{StockResultTitle}</H4>
            {stockResultList.map((item, index) => (
              <span dangerouslySetInnerHTML={{ __html: item }} key={index} />
            ))}
          </CardHeader>
          <CardBody>
            <div className="table-responsive theme-scrollbar">
              <div id="stock_wrapper" className="dataTables_wrapper">
                <DataTable data={filteredItems} columns={stockResultColumn} striped fixedHeader fixedHeaderScrollHeight="50vh" className="display dataTable custom-scrollbar" subHeader subHeaderComponent={subHeaderComponentMemo} />
              </div>
            </div>
          </CardBody>
        </Card>
      </Col>
    );
}

export default StockResult
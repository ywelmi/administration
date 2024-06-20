import React, { useMemo, useState } from 'react'
import { Card, CardBody, Col, Input, Label } from 'reactstrap';
import { DataTableOrdersHistory, SearchTableButton } from '../../../../utils/Constant';
import CommonCardHeader from '../../../../CommonElements/CommonCardHeader/CommonCardHeader';
import DataTable from 'react-data-table-component';
import { orderHistoryData, orderHistoryDataColumn } from '../../../../Data/Application/Ecommerce/OrderHistory';

const DataTableOrderHistory = () => {
    const [filterText, setFilterText] = useState("");
    const filteredItems = orderHistoryData.filter((item) =>item.productName && item.productName.toLowerCase().includes(filterText.toLowerCase()));
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
          <CommonCardHeader title={DataTableOrdersHistory} />
          <CardBody> 
            <div className="order-history table-responsive custom-scrollbar">
              <DataTable data={filteredItems} columns={orderHistoryDataColumn} className="dataTables_wrapper no-footer" highlightOnHover noHeader pagination paginationServer subHeader subHeaderComponent={subHeaderComponentMemo} />
            </div>
          </CardBody>
        </Card>
      </Col>
    );
}

export default DataTableOrderHistory
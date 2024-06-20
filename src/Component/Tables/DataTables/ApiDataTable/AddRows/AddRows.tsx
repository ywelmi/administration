import React, { useMemo, useState } from 'react'
import { AddNewRowButton, AddRowsTitle, SearchTableButton } from '../../../../../utils/Constant';
import { Card, CardBody, CardHeader, Col, Input, Label } from 'reactstrap';
import { Btn, H4 } from '../../../../../AbstractElements';
import { addRowColumn, addRowData } from '../../../../../Data/Tables/DataTables/ApiDataTable/ApiDataTable';
import DataTable from "react-data-table-component";

const AddRows = () => {
    const [filterText, setFilterText] = useState("");
    const [tableData, setTableData] = useState(addRowData);
  
    const filteredItems = tableData.filter((item) =>item.column1 && item.column1.toString().toLowerCase().includes(filterText.toLowerCase()));
    const subHeaderComponentMemo = useMemo(() => {
      return (
        <div id="API-1_filter" className="dataTables_filter d-flex align-items-center">
          <Label className="me-1">{SearchTableButton}:</Label>
          <Input onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFilterText(e.target.value)} type="search" value={filterText} />
        </div>
      );
    }, [filterText]);
  
    const getRandomFloat = (min: number, max: number) => {
      const generateRandom = Math.random() * (max - min) + min;
      return parseFloat(generateRandom.toFixed(2));
    };
  
    const addNewRow = () => {
      const minimumValue = 10;
      const maximumValue = 100;
      const tempData = {
        column1: tableData[tableData.length - 1].column1 + 10,
        column2: getRandomFloat(minimumValue, maximumValue),
        column3: getRandomFloat(minimumValue, maximumValue),
        column4: getRandomFloat(minimumValue, maximumValue),
        column5: getRandomFloat(minimumValue, maximumValue),
      };
      setTableData([...tableData, tempData]);
    };
    return (
      <Col sm="12">
        <Card>
          <CardHeader>
            <H4 className="mb-3">{AddRowsTitle} </H4>
            <span>New rows can be added to a DataTable using the<code className="api" title="DataTables API method">row.add()</code>API method. Simply call the API function with the data for the new row (be it an array or object). Multiple rows can be added using the<code className="api" title="DataTables API method">rows.add()</code>method (note the plural). Data can likewise be updated with the<code className="api" title="DataTables API method">row().data()</code>and<code className="api" title="DataTables API method">row().remove()</code>methods.</span>
            <span>Note that in order to see the new row in the table you must call the<code className="api" title="DataTables API method">draw()</code>method, which is easily done through the chaining that the DataTables API employs.</span>
          </CardHeader>
          <CardBody>
            <Btn color="primary" className="mb-3" onClick={addNewRow}>{AddNewRowButton}</Btn>
            <div className="table-responsive">
              <div id="API-1" className="dataTables_wrapper">
                <DataTable data={filteredItems} columns={addRowColumn} striped={true} pagination className="display" subHeader subHeaderComponent={subHeaderComponentMemo} />
              </div>
            </div>
          </CardBody>
        </Card>
      </Col>
    );
}

export default AddRows
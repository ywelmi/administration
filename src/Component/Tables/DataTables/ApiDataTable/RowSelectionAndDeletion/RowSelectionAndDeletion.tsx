import { useCallback, useState } from 'react'
import { Card, CardBody, Col } from 'reactstrap';
import DataTable from "react-data-table-component";
import { Btn } from '../../../../../AbstractElements';
import { DeleteSelectDataButton } from '../../../../../utils/Constant';
import { DeleteRowData } from '../../../../../Types/Tables/DataTables/ApiDataTable';
import RowSelectionAndDeletionHeader from './RowSelectionAndDeletionHeader';
import { deleteDataColumn, deleteRowDataList } from '../../../../../Data/Tables/DataTables/ApiDataTable/ApiDataTable';

const RowSelectionAndDeletion = () => {
    const [data, setData] = useState(deleteRowDataList);
    const [selectedRows, setSelectedRows] = useState<any>([]);
    const [toggleCleared, setToggleCleared] = useState(false);
    const handleRowSelected = useCallback((state: any) => {
      setSelectedRows(state.selectedRows);
    }, []);
    const handleDelete = () => {
      if (window.confirm(`Are you sure you want to delete:\r ${selectedRows.map((r: DeleteRowData) => r.name)}?`)) {
        setToggleCleared(!toggleCleared);
        setData(data.filter((item) => (selectedRows.filter((elem: DeleteRowData) => elem.id === item.id).length > 0 ? false : true)));
        setSelectedRows("");
      }
    };
    return (
      <Col sm="12">
        <Card>
          <RowSelectionAndDeletionHeader />
          <CardBody>
            <div className="table-responsive">
              {selectedRows.length !== 0 && (<Btn color="secondary" onClick={handleDelete} className="mb-3">{DeleteSelectDataButton}</Btn>
              )}
              <div id="row-select-delete">
                <DataTable data={data} columns={deleteDataColumn} striped highlightOnHover pagination selectableRows onSelectedRowsChange={handleRowSelected} clearSelectedRows={toggleCleared} className="display" />
              </div>
            </div>
          </CardBody>
        </Card>
      </Col>
    );
}

export default RowSelectionAndDeletion
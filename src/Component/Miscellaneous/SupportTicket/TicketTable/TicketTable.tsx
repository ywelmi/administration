import { useCallback, useState } from 'react'
import DataTable from "react-data-table-component";
import { supportColumnData, supportTicketData } from '../../../../Data/Miscellaneous/SupportTicket/SupportTicket';
import { SupportDataType } from '../../../../Types/Miscellaneous/Faq/SupportTicket/SupportTicket';
import { Btn, H4 } from '../../../../AbstractElements';
import { DeleteData, DeleteSupportTicket } from '../../../../utils/Constant';

const TicketTable = () => {
    const [selectedRows, setSelectedRows] = useState([]);
    const [toggleDelete, setToggleDelete] = useState(false);
    const [data, setData] = useState(supportTicketData);
  
    const handleRowSelected= useCallback((state:any) => {
      setSelectedRows(state.selectedRows);
    }, []);
  
    const handleDelete = () => {
      if (window.confirm(`Are you sure you want to delete:\r ${selectedRows.map((r: SupportDataType) => r.name)}?`)) {
        setToggleDelete(!toggleDelete);
        setData(data.filter((item) => (selectedRows.filter((elem: SupportDataType) => elem.id === item.id).length > 0 ? false : true)));
        setSelectedRows([]);
      }
    };
    return (
      <div className="table-responsive">
        {selectedRows.length !== 0 && (
          <div className={`d-flex align-items-center justify-content-between bg-light-info p-2`}>
            <H4 className="text-muted m-0">{DeleteData}</H4> 
            <Btn color="danger" onClick={handleDelete}>{DeleteSupportTicket}</Btn>
          </div>
        )}
        <DataTable className='custom-scrollbar' columns={supportColumnData} data={data} striped={true} pagination selectableRows onSelectedRowsChange={handleRowSelected} clearSelectedRows={toggleDelete} />
      </div>
    );
}

export default TicketTable
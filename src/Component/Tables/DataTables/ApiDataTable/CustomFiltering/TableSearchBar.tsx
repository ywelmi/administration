import React from 'react'
import { MaximumAge, MinimumAge } from '../../../../../utils/Constant';
import { Input, Table } from 'reactstrap';
import { TableSearchBarPropsType } from '../../../../../Types/Tables/DataTables/ApiDataTable';

const TableSearchBar:React.FC<TableSearchBarPropsType> = ({ handleMinAgeChange, handleMaxAgeChange }) => {
  return (
    <div className="table-responsive dataTables_wrapper me-0">
      <Table>
        <tbody className="dataTables_filter">
          <tr>
            <td>{MinimumAge}</td>
            <td>
              <Input onChange={handleMinAgeChange} type="search" name="minValue" />
            </td>
          </tr>
          <tr>
            <td>{MaximumAge}</td>
            <td>
              <Input onChange={handleMaxAgeChange} type="search" name="maxValue" />
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}

export default TableSearchBar
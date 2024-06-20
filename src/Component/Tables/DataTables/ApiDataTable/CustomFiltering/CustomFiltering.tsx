import { ChangeEvent, useEffect, useState } from 'react'
import { Card, CardBody, Col } from 'reactstrap';
import { CustomFilteringSearch } from '../../../../../utils/Constant';
import DataTable from "react-data-table-component";
import { customFilteringList, filteringTableColumn, filteringTableData } from '../../../../../Data/Tables/DataTables/ApiDataTable/ApiDataTable';
import TableSearchBar from './TableSearchBar';
import CommonCardHeader from '../../../../../CommonElements/CommonCardHeader/CommonCardHeader';

const CustomFiltering = () => {
    const [data, setData] = useState(filteringTableData);
    const [minAge, setMinAge] = useState(0);
    const [maxAge, setMaxAge] = useState(100);
  
    useEffect(() => {
      const filteredData = filteringTableData.filter((item) => {
        const age = item.age;
        if(minAge && maxAge){
          return age >= minAge && age <= maxAge;
        }else{
          return filteringTableData
        }
      });
  
      setData(filteredData);
    }, [minAge, maxAge]);
  
    const handleMinAgeChange = (event: ChangeEvent<HTMLInputElement>) => {
      setMinAge(parseInt(event.target.value, 10));
    };
  
    const handleMaxAgeChange = (event: ChangeEvent<HTMLInputElement>) => {
      setMaxAge(parseInt(event.target.value, 10));
    };
  
    return (
      <Col sm="12">
        <Card>
          <CommonCardHeader title={CustomFilteringSearch} span={customFilteringList}  />
          <CardBody>
            <TableSearchBar handleMinAgeChange={handleMinAgeChange} handleMaxAgeChange={handleMaxAgeChange}  />
            <div className="table-responsive user-datatable">
              <div id="datatable-range_wrapper" className="dataTables_wrapper">
                <DataTable data={data} columns={filteringTableColumn} striped highlightOnHover pagination />
              </div>
            </div>
          </CardBody>
        </Card>
      </Col>
    );
}

export default CustomFiltering
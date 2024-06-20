import { ChangeEvent } from 'react'
import { useAppDispatch } from '../../../../../ReduxToolkit/Hooks';
import { Col, Input } from 'reactstrap';
import { filterSortBy } from '../../../../../ReduxToolkit/Reducer/FilterSlice';

const Sorting = () => {
  const dispatch = useAppDispatch();
  const filterSort = (event:ChangeEvent<HTMLInputElement>) => {
    dispatch(filterSortBy(event.target.value));
  };
  return (
    <Col md="6" className="text-sm-end">
      <span className="f-w-600 m-r-5">Showing Products 1 - 24 Of 200 Results</span>
      <div className="select2-drpdwn-product select-options d-inline-block" onChange={filterSort} >
        <Input type="select" className="btn-square" name="select" defaultValue={"Featured"}>
          <option>{'Featured'}</option>
          <option>{'Lowest Prices'}</option>
          <option>{'Highest Prices'}</option>
        </Input>
      </div>
    </Col>
  )
}

export default Sorting
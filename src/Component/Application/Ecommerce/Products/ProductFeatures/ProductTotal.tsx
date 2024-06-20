import { useAppDispatch } from '../../../../../ReduxToolkit/Hooks';
import { Col, Row } from 'reactstrap';
import { ChevronDown } from 'react-feather';
import { Filters } from '../../../../../utils/Constant';
import GridAndListView from './GridAndListView';
import GridOptions from './GridOptions';
import Sorting from './Sorting';
import { setIsFilter } from '../../../../../ReduxToolkit/Reducer/FilterSlice';

const ProductTotal = () => {
  const dispatch = useAppDispatch();
  return (
    <Row className='mb-3'>
      <Col md="6" className="products-total">
        <GridAndListView />
        <span className="d-none-productlist filter-toggle">
          {Filters}
          <span className="ms-2" onClick={() => dispatch(setIsFilter())}>
            <ChevronDown className="toggle-data" />
          </span>
        </span>
        <GridOptions />
      </Col>
      <Sorting />
    </Row>
  )
}

export default ProductTotal
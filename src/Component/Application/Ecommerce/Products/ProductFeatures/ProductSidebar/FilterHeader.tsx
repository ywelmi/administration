import { useAppDispatch } from '../../../../../../ReduxToolkit/Hooks';
import { CardHeader } from 'reactstrap';
import { H6 } from '../../../../../../AbstractElements';
import { Filters } from '../../../../../../utils/Constant';
import { setSideBarOn } from '../../../../../../ReduxToolkit/Reducer/FilterSlice';

const FilterHeader = () => {
  const dispatch = useAppDispatch();
  return (
    <CardHeader>
      <H6 className="mb-0 f-w-600"> {Filters}
        <span className="pull-right" onClick={() => dispatch(setSideBarOn())}>
          <i className="fa fa-chevron-down toggle-data"></i>
        </span>
      </H6>
    </CardHeader>
  )
}

export default FilterHeader
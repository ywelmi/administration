import { useAppDispatch } from '../../../../../ReduxToolkit/Hooks';
import { Link } from 'react-router-dom';
import { Grid, List } from 'react-feather';
import { Href } from '../../../../../utils/Constant';
import { setColView, setListView } from '../../../../../ReduxToolkit/Reducer/FilterSlice';

const GridAndListView = () => {
  const dispatch = useAppDispatch();

  const gridLayout = () => {
    dispatch(setListView(false));
    dispatch(setColView("col-xl-3 col-lg-4 col-sm-6"));
  };

  const listLayout = () => dispatch(setListView(true));
  return (
    <>
      <div className="square-product-setting d-inline-block">
        <Link className="icon-grid grid-layout-view" to={Href} onClick={gridLayout}>
          <Grid />
        </Link>
      </div>
      <div className="square-product-setting d-inline-block">
        <Link className="icon-grid m-0 list-layout-view" to={Href} onClick={listLayout}>
          <List />
        </Link>
      </div>
    </>
  )
}

export default GridAndListView
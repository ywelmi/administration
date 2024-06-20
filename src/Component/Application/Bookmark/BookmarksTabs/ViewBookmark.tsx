import { useAppDispatch } from '../../../../ReduxToolkit/Hooks'
import { LI, UL } from '../../../../AbstractElements'
import { Link } from 'react-router-dom'
import { Href } from '../../../../utils/Constant'
import { Grid, List } from 'react-feather'
import { setGridView } from '../../../../ReduxToolkit/Reducer/BookmarkTabSlice'

const ViewBookmark = () => {
    const dispatch = useAppDispatch()
    const gridBookmark = () => dispatch(()=> dispatch(setGridView(true))) 
    const listBookmark = () => dispatch(()=> dispatch(setGridView(false))) 
    return (
      <UL className='flex-row' >
        <LI>
            <Link className="grid-bookmark-view" to={Href}>
                <Grid onClick={gridBookmark} />
            </Link>
        </LI>
        <LI>
            <Link className="list-layout-view" to={Href}>
                <List onClick={listBookmark} />
            </Link>
        </LI>
      </UL>
    )
}

export default ViewBookmark
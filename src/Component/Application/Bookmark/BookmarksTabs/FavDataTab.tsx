import { Card, CardBody, CardHeader, TabPane } from 'reactstrap'
import { H6 } from '../../../../AbstractElements'
import ViewBookmark from './ViewBookmark'
import { Favourites } from '../../../../utils/Constant'
import FavDataLoop from './FavDataLoop'
import { useAppSelector } from '../../../../ReduxToolkit/Hooks'

const FavDataTab = () => {
  const { gridView } = useAppSelector((state)=>state.bookmarkTab)
  return (
    <TabPane tabId="2">
      <Card className="mb-0">
        <CardHeader className="d-flex">
          <H6 className="mb-0">{Favourites}</H6>
          <ViewBookmark />
        </CardHeader>
        <CardBody>
          <div
            className={`details-bookmark text-center ${
              gridView ? "" : "list-bookmark"
            }`}
          >
            <FavDataLoop />
          </div>
        </CardBody>
      </Card>
    </TabPane>
  )
}

export default FavDataTab
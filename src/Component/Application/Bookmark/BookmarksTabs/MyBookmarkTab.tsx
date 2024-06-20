import { useAppSelector } from '../../../../ReduxToolkit/Hooks';
import { Card, CardBody, CardHeader, TabPane } from 'reactstrap';
import { H6 } from '../../../../AbstractElements';
import ViewBookmark from './ViewBookmark';
import { MyBookmark } from '../../../../utils/Constant';
import DataLoop from './DataLoop';

const MyBookmarkTab = () => {
  const { gridView } = useAppSelector((state) => state.bookmarkTab);
  return (
    <TabPane tabId="4">
      <Card className="mb-0">
        <CardHeader className="d-flex">
          <H6 className="mb-0">{MyBookmark}</H6>
          <ViewBookmark />
        </CardHeader>
        <CardBody>
          <div className={`details-bookmark text-center ${gridView ? "" : "list-bookmark"}`}>
            <DataLoop />
          </div>
        </CardBody>
      </Card>
    </TabPane>
  )
}

export default MyBookmarkTab
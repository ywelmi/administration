import { Container, Row } from 'reactstrap'
import HtmlSourcedData from './HtmlSourcedData/HtmlSourcedData'
import AjaxSourcedData from './AjaxSourcedData/AjaxSourcedData'
import JavaScriptSourcedData from './JavaScriptSourcedData/JavaScriptSourcedData'
import ServerSideProcessing from './ServerSideProcessing/ServerSideProcessing'
import Breadcrumbs from '../../../../CommonElements/Breadcrumbs/Breadcrumbs'
import { DATASourceDataTables, DataTables } from '../../../../utils/Constant'

const DataSourceContainer = () => {
  return (
    <>
      <Breadcrumbs mainTitle={DATASourceDataTables} parent={DataTables} />
      <Container fluid>
        <Row>
          <HtmlSourcedData />
          <AjaxSourcedData />
          <JavaScriptSourcedData />
          <ServerSideProcessing />
        </Row>
      </Container>
    </>
  )
}

export default DataSourceContainer
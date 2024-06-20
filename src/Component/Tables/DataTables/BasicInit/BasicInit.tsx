import { Container, Row } from 'reactstrap'
import ZeroConfigurationTable from './ZeroConfigurationTable/ZeroConfigurationTable'
import StateSaving from './StateSaving/StateSaving'
import ScrollVerticalDynamicHeight from './ScrollVerticalDynamicHeight/ScrollVerticalDynamicHeight'
import Breadcrumbs from '../../../../CommonElements/Breadcrumbs/Breadcrumbs'
import { BasicDataTables, DataTables } from '../../../../utils/Constant'

const BasicInitContainer = () => {
  return (
    <>
      <Breadcrumbs mainTitle={BasicDataTables} parent={DataTables} />
      <Container fluid>
        <Row>
          <ZeroConfigurationTable />
          <StateSaving />
          <ScrollVerticalDynamicHeight />
        </Row>
      </Container>
    </>
  )
}

export default BasicInitContainer
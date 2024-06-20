import { Container, Row } from 'reactstrap'
import StockResult from './StockResult/StockResult'
import RowCreateCallback from './RowCreateCallback/RowCreateCallback'
import Breadcrumbs from '../../../../CommonElements/Breadcrumbs/Breadcrumbs'
import { AdvanceInit, DataTables } from '../../../../utils/Constant'

const AdvanceInitContainer = () => {
  return (
    <>
      <Breadcrumbs mainTitle={AdvanceInit} parent={DataTables} />
      <Container fluid>
        <Row>
          <StockResult />
          <RowCreateCallback />
        </Row>
      </Container>
    </>
  )
}

export default AdvanceInitContainer
import { Container, Row } from 'reactstrap'
import BasicTableBorderBottomColor from './BasicTableBorderBottomColor/BasicTableBorderBottomColor'
import InverseTable from './InverseTable/InverseTable'
import HoverableRows from './HoverableRows/HoverableRows'
import InverseTablePrimary from './InverseTablePrimary/InverseTablePrimary'
import CaptionTable from './CaptionTable/CaptionTable'
import TableHeadOptions from './TableHeadOptions/TableHeadOptions'
import StripedRowInverseTable from './StripedRowInverseTable/StripedRowInverseTable'
import BreakPointSpecific from './BreakPointSpecific/BreakPointSpecific'
import ResponsiveLightBackground from './ResponsiveLightBackground/ResponsiveLightBackground'
import SizingTables from './SizingTables/SizingTables'
import CustomColorHoverStripped from './CustomColorHoverStripped/CustomColorHoverStripped'
import DashedBorder from './DashedBorder/DashedBorder'
import Breadcrumbs from '../../../../CommonElements/Breadcrumbs/Breadcrumbs'
import { ReactstrapBasicTable, ReactstrapTable } from '../../../../utils/Constant'

const BasicTableContainer = () => {
  return (
    <>
      <Breadcrumbs mainTitle={ReactstrapBasicTable} parent={ReactstrapTable} />
      <Container fluid>
        <Row>
          <BasicTableBorderBottomColor />
          <InverseTable />
          <HoverableRows />
          <InverseTablePrimary />
          <CaptionTable />
          <TableHeadOptions />
          <StripedRowInverseTable />
          <BreakPointSpecific />
          <ResponsiveLightBackground />
          <SizingTables />
          <CustomColorHoverStripped />
          <DashedBorder />
        </Row>
      </Container>
    </>
  )
}

export default BasicTableContainer
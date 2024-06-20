import { Container, Row } from 'reactstrap'
import BasicPopover from './BasicPopover/BasicPopover'
import PopoverDirection from './PopoverDirection/PopoverDirection'
import PopoverOffset from './PopoverOffset/PopoverOffset'
import Breadcrumbs from '../../../CommonElements/Breadcrumbs/Breadcrumbs'
import { Popover, UiKits } from '../../../utils/Constant'

const PopoverContainer = () => {
  return (
    <>
      <Breadcrumbs mainTitle={Popover} parent={UiKits} />
      <Container fluid>
        <Row>
          <BasicPopover />
          <PopoverDirection />
          <PopoverOffset />
        </Row>
      </Container>
    </>
  )
}

export default PopoverContainer
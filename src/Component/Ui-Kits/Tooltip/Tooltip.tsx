import { Container, Row } from 'reactstrap'
import BasicTooltips from './BasicTooltips/BasicTooltips'
import ColoredTooltip from './ColoredTooltip/ColoredTooltip'
import TooltipDirections from './TooltipDirections/TooltipDirections'
import ElementsWithHoverEffect from './ElementsWithHoverEffect/ElementsWithHoverEffect'
import FilledTooltip from './FilledTooltip/FilledTooltip'
import Breadcrumbs from '../../../CommonElements/Breadcrumbs/Breadcrumbs'
import { Tooltip, UiKits } from '../../../utils/Constant'

const TooltipContainer = () => {
  return (
    <>
      <Breadcrumbs mainTitle={Tooltip} parent={UiKits}/>
      <Container fluid>
        <Row>
          <BasicTooltips />
          <ColoredTooltip />
          <TooltipDirections />
          <ElementsWithHoverEffect />
          <FilledTooltip />
        </Row>
      </Container>
    </>
  )
}

export default TooltipContainer
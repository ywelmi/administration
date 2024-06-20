import { Container, Row } from 'reactstrap'
import SimpleAccordion from './SimpleAccordion/SimpleAccordion'
import FlushAccordion from './FlushAccordion/FlushAccordion'
import MultipleCollapseAccordion from './MultipleCollapseAccordion/MultipleCollapseAccordion'
import WithIconsAccordion from './WithIconsAccordion/WithIconsAccordion'
import OutlineAccordion from './OutlineAccordion/OutlineAccordion'
import HorizontalAccordion from './HorizontalAccordion/HorizontalAccordion'
import CollapseAccordion from './CollapseAccordion/CollapseAccordion'
import Breadcrumbs from '../../../CommonElements/Breadcrumbs/Breadcrumbs'
import { Accordion, UiKits } from '../../../utils/Constant'

const AccordionContainer = () => {
  return (
    <>
      <Breadcrumbs mainTitle={Accordion} parent={UiKits} />
      <Container fluid>
        <Row>
          <SimpleAccordion />
          <FlushAccordion />
          <MultipleCollapseAccordion />
          <WithIconsAccordion />
          <OutlineAccordion />
          <HorizontalAccordion />
          <CollapseAccordion />
        </Row>
      </Container>
    </>
  )
}

export default AccordionContainer
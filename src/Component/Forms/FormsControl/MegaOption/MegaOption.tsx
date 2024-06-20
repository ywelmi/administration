import { Container, Row } from 'reactstrap'
import VariationRadio from './VariationRadio/VariationRadio'
import VariationCheckbox from './VariationCheckbox/VariationCheckbox'
import DefaultStyle from './DefaultStyle/DefaultStyle'
import WithoutBordersStyle from './WithoutBordersStyle/WithoutBordersStyle'
import SolidBorderStyle from './SolidBorderStyle/SolidBorderStyle'
import OfferStyleBorder from './OfferStyleBorder/OfferStyleBorder'
import InlineStyle from './InlineStyle/InlineStyle'
import VerticalStyle from './VerticalStyle/VerticalStyle'
import HorizontalStyle from './HorizontalStyle/HorizontalStyle'
import Breadcrumbs from '../../../../CommonElements/Breadcrumbs/Breadcrumbs'
import { FormsControls, MegaOptions } from '../../../../utils/Constant'

const MegaOptionContainer = () => {
  return (
    <>
      <Breadcrumbs mainTitle={MegaOptions} parent={FormsControls} />
      <Container fluid>
        <Row>
          <VariationRadio />
          <VariationCheckbox />
          <DefaultStyle />
          <WithoutBordersStyle />
          <SolidBorderStyle />
          <OfferStyleBorder />
          <InlineStyle />
          <VerticalStyle />
          <HorizontalStyle />
        </Row>
      </Container>
    </>
  )
}

export default MegaOptionContainer
import { Container, Row } from 'reactstrap'
import SlidesOnly from './SlidesOnly/SlidesOnly'
import WithControls from './WithControls/WithControls'
import AutoPlayVariant from './AutoPlayVariant/AutoPlayVariant'
import WithIndicators from './WithIndicators/WithIndicators'
import WithCaptions from './WithCaptions/WithCaptions'
import CrossFade from './CrossFade/CrossFade'
import IndividualInterval from './IndividualInterval/IndividualInterval'
import DisableTouchSwiping from './DisableTouchSwiping/DisableTouchSwiping'
import DarkVariant from './DarkVariant/DarkVariant'
import Breadcrumbs from '../../../CommonElements/Breadcrumbs/Breadcrumbs'
import { BonusUi, OwlCarousel } from '../../../utils/Constant'

const OwlCarouselContainer = () => {
  return (
    <>
      <Breadcrumbs mainTitle={OwlCarousel} parent={BonusUi} />
      <Container fluid>
        <Row>
          <SlidesOnly />
          <WithControls />
          <AutoPlayVariant />
          <WithIndicators />
          <WithCaptions />
          <CrossFade />
          <IndividualInterval />
          <DisableTouchSwiping />
          <DarkVariant />
        </Row>
      </Container>
    </>
  )
}

export default OwlCarouselContainer
import { Container, Row } from 'reactstrap'
import BasicTimeline from './BasicTimeline/BasicTimeline'
import HoveringTimeline from './HoveringTimeline/HoveringTimeline'
import VariationTimeline from './VariationTimeline/VariationTimeline'
import HorizontalTimeline from './HorizontalTimeline/HorizontalTimeline'
import Timelines from './Timelines/Timelines'
import Breadcrumbs from '../../../CommonElements/Breadcrumbs/Breadcrumbs'
import { BonusUi, Timeline } from '../../../utils/Constant'

const TimelineContainer = () => {
  return (
    <>
      <Breadcrumbs mainTitle={Timeline} parent={BonusUi} />
      <Container fluid>
        <Row>
          <BasicTimeline />
          <HoveringTimeline />
          <VariationTimeline />
          <HorizontalTimeline />
          <Timelines />
        </Row>
      </Container>
    </>
  )
}

export default TimelineContainer
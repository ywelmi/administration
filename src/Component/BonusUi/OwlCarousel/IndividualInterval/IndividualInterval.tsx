import { Card, CardBody, Col } from 'reactstrap'
import { IndividualCarouselItemIntervals } from '../../../../utils/Constant'
import IndividualIntervalBody from './IndividualIntervalBody'
import CardHeaderCommon from '../../CardHeaderCommon/CardHeaderCommon'
import { itemIntervalData } from '../../../../Data/BonusUi/OwlCarousel/OwlCarousel'

const IndividualInterval = () => {
  return (
    <Col xl="6" xs="12">
      <Card>
        <CardHeaderCommon title={IndividualCarouselItemIntervals} span={itemIntervalData} />
        <CardBody>
          <IndividualIntervalBody />
        </CardBody>
      </Card>
    </Col>
  )
}

export default IndividualInterval
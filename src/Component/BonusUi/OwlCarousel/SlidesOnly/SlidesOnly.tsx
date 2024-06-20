import { Card, CardBody, Col } from 'reactstrap'
import { SlideOnly } from '../../../../utils/Constant'
import CommonCarousel from '../Common/CommonCarousel'
import CardHeaderCommon from '../../CardHeaderCommon/CardHeaderCommon'
import { sliesOnlyData, sliesOnlyDataList } from '../../../../Data/BonusUi/OwlCarousel/OwlCarousel'

const SlidesOnly = () => {
  return (
    <Col xl="6" xs="12">
      <Card>
        <CardHeaderCommon title={SlideOnly} span={sliesOnlyData} />
        <CardBody>
          <CommonCarousel data={sliesOnlyDataList} interval="2000"  />
        </CardBody>
      </Card>
    </Col>
  )
}

export default SlidesOnly
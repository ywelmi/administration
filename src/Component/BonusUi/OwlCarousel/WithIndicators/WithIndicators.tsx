import { Card, CardBody, Col } from 'reactstrap'
import { WithIndicator } from '../../../../utils/Constant'
import CommonCarousel from '../Common/CommonCarousel'
import CardHeaderCommon from '../../CardHeaderCommon/CardHeaderCommon'
import { withIndicatorData, withIndicatorDataList } from '../../../../Data/BonusUi/OwlCarousel/OwlCarousel'

const WithIndicators = () => {
  return (
    <Col xl="6" xs="12">
      <Card>
        <CardHeaderCommon title={WithIndicator} span={withIndicatorData} />
        <CardBody>
          <CommonCarousel data={withIndicatorDataList} control indecators />
        </CardBody>
      </Card>
    </Col>
  )
}

export default WithIndicators
import { Card, CardBody, Col } from 'reactstrap'
import { WithCaption } from '../../../../utils/Constant'
import CommonCarousel from '../Common/CommonCarousel'
import CardHeaderCommon from '../../CardHeaderCommon/CardHeaderCommon'
import { withCaptionData, withCaptionDataList } from '../../../../Data/BonusUi/OwlCarousel/OwlCarousel'

const WithCaptions = () => {
  return (
    <Col xl="6" xs="12">
      <Card>
        <CardHeaderCommon title={WithCaption} span={withCaptionData} />
        <CardBody className="mt-2 mb-3">
          <CommonCarousel data={withCaptionDataList} control indecators caption />
        </CardBody>
      </Card>
    </Col>
  )
}

export default WithCaptions
import { Card, CardBody, Col } from 'reactstrap'
import { DefaultRangeSliders } from '../../../../utils/Constant'
import DefaultRangeSliderForm from './DefaultRangeSliderForm'
import { defaultRangeData } from '../../../../Data/BonusUi/RangeSlider/RangeSlider'
import CardHeaderCommon from '../../CardHeaderCommon/CardHeaderCommon'

const DefaultRangeSlider = () => {
  return (
    <Col lg="6">
      <Card>
        <CardHeaderCommon title={DefaultRangeSliders} span={defaultRangeData} />
        <CardBody>
          <DefaultRangeSliderForm />
        </CardBody>
      </Card>
    </Col>
  )
}

export default DefaultRangeSlider
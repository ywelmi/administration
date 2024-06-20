import { Card, CardBody, Col } from 'reactstrap'
import { Disable } from '../../../../utils/Constant'
import DisabledForm from './DisabledForm'
import { defaultRangeData } from '../../../../Data/BonusUi/RangeSlider/RangeSlider'
import CardHeaderCommon from '../../CardHeaderCommon/CardHeaderCommon'

const Disabled = () => {
  return (
    <Col lg="6">
      <Card>
        <CardHeaderCommon title={Disable} span={defaultRangeData} />
        <CardBody>
          <DisabledForm />
        </CardBody>
      </Card>
    </Col>
  )
}

export default Disabled
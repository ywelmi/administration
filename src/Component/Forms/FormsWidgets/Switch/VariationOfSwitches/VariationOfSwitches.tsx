import { Card, CardBody, Col } from 'reactstrap'
import { VariationOfSwitchHeading } from '../../../../../utils/Constant'
import { variationSwitchData } from '../../../../../Data/Forms/FormsWidgets/Switch/Switch'
import { UL } from '../../../../../AbstractElements'
import VariationOfSwitchOne from './VariationOfSwitchOne'
import VariationOfSwitchTwo from './VariationOfSwitchTwo'
import CommonCardHeader from '../../../../../CommonElements/CommonCardHeader/CommonCardHeader'

const VariationOfSwitches = () => {
  return (
    <Col md="6">
      <Card>
        <CommonCardHeader title={VariationOfSwitchHeading} span={variationSwitchData} />
        <CardBody className="common-flex">
          <UL className="tg-list common-flex simple-list flex-row">
            <VariationOfSwitchOne />
            <VariationOfSwitchTwo />
          </UL>
        </CardBody>
      </Card>
    </Col>
  )
}

export default VariationOfSwitches
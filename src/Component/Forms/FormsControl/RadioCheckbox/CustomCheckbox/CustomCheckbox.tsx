import { Card, CardBody, Col, Row } from 'reactstrap'
import { CustomCheckboxHeading } from '../../../../../utils/Constant'
import BorderedCheckbox from './BorderedCheckbox'
import IconCheckbox from './IconCheckbox'
import FilledCheckbox from './FilledCheckbox'
import { customCheckboxData } from '../../../../../Data/Forms/FormsControl/RadioCheckbox/RadioCheckbox'
import CommonCardHeader from '../../../../../CommonElements/CommonCardHeader/CommonCardHeader'

const CustomCheckbox = () => {
  return (
    <Col sm="12">
      <Card>
        <CommonCardHeader title={CustomCheckboxHeading} span={customCheckboxData} />
        <CardBody>
          <Row className="g-3">
            <BorderedCheckbox />
            <IconCheckbox />
            <FilledCheckbox />
          </Row>
        </CardBody>
      </Card>
    </Col>
  )
}

export default CustomCheckbox
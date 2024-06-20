import { Card, CardBody, Col, Input, InputGroup } from 'reactstrap'
import { SegmentedButton, SegmentedButtonInfo, SegmentedButtonSecondary } from '../../../../../utils/Constant'
import { Btn } from '../../../../../AbstractElements'
import ButtonDropdownList from '../ButtonsWithDropdowns/ButtonDropdownList'
import CommonCardHeader from '../../../../../CommonElements/CommonCardHeader/CommonCardHeader'
import { segmentButtonData, segmentDataOne, segmentDataTwo } from '../../../../../Data/Forms/FormsControl/InputGroup/InputGroup'

const SegmentedButtons = () => {
  return (
    <Col md="6">
      <Card className="height-equal">
        <CommonCardHeader title={SegmentedButton} span={segmentButtonData} />
        <CardBody className="main-segment-btn card-wrapper input-group-wrapper">
          <InputGroup>
            <Btn color="info" outline> {SegmentedButtonInfo}</Btn>
            <ButtonDropdownList color="info" divider options={segmentDataOne}/>
            <Input type="text" />
          </InputGroup>
          <InputGroup>
            <Input type="text" />
            <Btn color="secondary" outline>{SegmentedButtonSecondary}</Btn>
            <ButtonDropdownList color="secondary" divider options={segmentDataTwo}/>
          </InputGroup>
        </CardBody>
      </Card>
    </Col>
  )
}

export default SegmentedButtons
import { Card, CardBody, Col, Label, Media } from 'reactstrap'
import { uncheckedSwitchData, uncheckedSwitchDataList } from '../../../../../Data/Forms/FormsWidgets/Switch/Switch'
import CommonSwitchSpan from '../Common/CommonSwitchSpan'
import { UncheckedSwitchHeading } from '../../../../../utils/Constant'
import CommonCardHeader from '../../../../../CommonElements/CommonCardHeader/CommonCardHeader'

const UnCheckedSwitch = () => {
  return (
    <Col xl="4" sm="6">
      <Card className="height-equal">
        <CommonCardHeader title={UncheckedSwitchHeading} span={uncheckedSwitchData} />
        <CardBody className="common-flex flex-column switch-wrapper">
          {uncheckedSwitchDataList.map(({ color, text }, index) => (
            <Media className="align-items-center" key={index}>
              <Media body className="text-end">
                <CommonSwitchSpan color={color} defaultChecked />
              </Media>
              <Label className="m-l-10" check>{text}</Label>
            </Media>
          ))}
        </CardBody>
      </Card>
    </Col>
  )
}

export default UnCheckedSwitch
import { Card, CardBody, Col, Label, Media } from 'reactstrap'
import { iconSwitchData, iconSwitchDataList } from '../../../../../Data/Forms/FormsWidgets/Switch/Switch'
import { IconsSwitchHeading } from '../../../../../utils/Constant'
import CommonSwitchSpan from '../Common/CommonSwitchSpan'
import CommonCardHeader from '../../../../../CommonElements/CommonCardHeader/CommonCardHeader'

const IconsSwitch = () => {
  return (
    <Col xl="4" sm="6">
      <Card className="height-equal">
        <CommonCardHeader title={IconsSwitchHeading} span={iconSwitchData} />
        <CardBody className="common-flex flex-column switch-wrapper">
          {iconSwitchDataList.map(({ color, text }, index) => (
            <Media className="align-items-center" key={index}>
              <Media body className="text-end icon-state">
                <CommonSwitchSpan color={color} defaultChecked/>
              </Media>
              <Label className="m-l-10" check>{text}</Label>
            </Media>
          ))}
        </CardBody>
      </Card>
    </Col>
  )
}

export default IconsSwitch
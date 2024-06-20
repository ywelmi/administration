import { Card, CardBody, Col, Label, Media } from 'reactstrap'
import CommonSwitchSpan from '../Common/CommonSwitchSpan'
import { BordersWithIcon } from '../../../../../utils/Constant'
import { borderIconSwitchData, borderIconSwitchDataList } from '../../../../../Data/Forms/FormsWidgets/Switch/Switch'
import CommonCardHeader from '../../../../../CommonElements/CommonCardHeader/CommonCardHeader'

const BordersWithIcons = () => {
  return (
    <Col xl="4">
      <Card className="height-equal">
        <CommonCardHeader title={BordersWithIcon} span={borderIconSwitchData} />
        <CardBody className="common-flex flex-column switch-wrapper ">
          {borderIconSwitchDataList.map(({ color, text }, index) => (
            <Media className="align-items-center" key={index}>
              <Media body className="text-end icon-state switch-outline">
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

export default BordersWithIcons
import { Card, CardBody, Col, Input, Label, Media } from 'reactstrap'
import { SwitchSizingHeading } from '../../../../../utils/Constant'
import { switchSizingData, switchSizingDataList } from '../../../../../Data/Forms/FormsWidgets/Switch/Switch'
import CommonCardHeader from '../../../../../CommonElements/CommonCardHeader/CommonCardHeader'

const SwitchSizing = () => {
  return (
    <Col md="12">
      <Card>
        <CommonCardHeader title={SwitchSizingHeading} span={switchSizingData} />
        <CardBody className="common-flex switch-wrapper">
          {switchSizingDataList.map(({ label, flexClass, defaultChecked, disabled }, index) => (
            <Media key={index}>
              <Label className="col-form-label m-r-10" check>{label}</Label>
              <Media body className={`text-end ${flexClass}`}>
                <Label className="switch">
                  <Input type="checkbox" defaultChecked={defaultChecked} disabled={disabled} />
                  <span className="switch-state"></span>
                </Label>
              </Media>
            </Media>
          ))}
        </CardBody>
      </Card>
    </Col>
  )
}

export default SwitchSizing
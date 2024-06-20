import { Card, CardBody, Col, Input, Label, Media } from 'reactstrap'
import { SwitchWithIcon } from '../../../../../utils/Constant'
import { switchIconData, switchIconDataList } from '../../../../../Data/Forms/FormsWidgets/Switch/Switch'
import CommonCardHeader from '../../../../../CommonElements/CommonCardHeader/CommonCardHeader'

const SwitchWithIcons = () => {
  return (
    <Col md="12">
      <Card>
        <CommonCardHeader title={SwitchWithIcon} span={switchIconData} />
        <CardBody className="common-flex switch-wrapper">
          {switchIconDataList.map(({ label, flexClass, defaultChecked, disabled }, index) => (
            <Media key={index}>
              <Label className="col-form-label m-r-10" check>{label}</Label>
              <Media body className={`text-end icon-state ${flexClass}`}>
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

export default SwitchWithIcons
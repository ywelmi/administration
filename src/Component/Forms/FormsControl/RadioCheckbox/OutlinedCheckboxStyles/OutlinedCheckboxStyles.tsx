import { Card, CardBody, Col, Input, Label } from 'reactstrap'
import { ButtonChecked, ButtonCheckedSuccessRadio, ButtonDarkRadio, OutlinedCheckboxStyle, SingleToggle } from '../../../../../utils/Constant'
import CommonCardHeader from '../../../../../CommonElements/CommonCardHeader/CommonCardHeader'
import { outlineCheckboxData } from '../../../../../Data/Forms/FormsControl/RadioCheckbox/RadioCheckbox'

const OutlinedCheckboxStyles = () => {
  return (
    <Col md="6">
      <Card>
        <CommonCardHeader title={OutlinedCheckboxStyle} span={outlineCheckboxData} />
        <CardBody className="common-flex main-checkbox-toggle">
          <Input className="btn-check" id="btn-check-outlined" type="checkbox" />
          <Label className="btn btn-outline-info" check for='btn-check-outlined'>{SingleToggle}</Label>
          <Input className="btn-check" id="btn-check-2-outlined" type="checkbox" defaultChecked />
          <Label className="btn btn-outline-danger" check for='btn-check-2-outlined'>{ButtonChecked}</Label>
          <Input className="btn-check" id="success-outlined" type="radio" name="options-outlined" defaultChecked/>
          <Label className="btn btn-outline-success" check>{ButtonCheckedSuccessRadio}</Label>
          <Input className="btn-check" id="danger-outlined" type="radio" name="options-outlined"/>
          <Label className="btn btn-outline-dark" check for='danger-outlined'>{ButtonDarkRadio}</Label>
        </CardBody>
      </Card>
    </Col>
  )
}

export default OutlinedCheckboxStyles
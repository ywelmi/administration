import { Card, CardBody, Col, Input, Label, Row } from 'reactstrap'
import { DefaultCheckboxHeading } from '../../../../../utils/Constant'
import { H6 } from '../../../../../AbstractElements'
import DefaultChecks from './DefaultChecks'
import Indeterminate from './Indeterminate'
import { defaultCheckBoxData, defaultCheckBoxDataList } from '../../../../../Data/Forms/FormsControl/RadioCheckbox/RadioCheckbox'
import CommonCardHeader from '../../../../../CommonElements/CommonCardHeader/CommonCardHeader'

const DefaultCheckbox = () => {
  return (
    <Col sm="12">
      <Card>
        <CommonCardHeader title={DefaultCheckboxHeading} span={defaultCheckBoxData} />
        <CardBody>
          <Row className="g-3">
            <DefaultChecks />
            {defaultCheckBoxDataList.map(({ title, span, className }, index) => (
              <Col sm="6" xl="4" key={index}>
                <div className="card-wrapper border rounded-3 checkbox-checked">
                  <H6 className="sub-title">{title}</H6>
                  {span.map(({ id, label, defaultChecked, disabled }, index) => (
                    <div className={`form-check ${className}`} key={index}>
                      <Input id={id} type="checkbox" defaultChecked={defaultChecked} disabled={disabled} />
                      <Label for={id} check>{label}</Label>
                    </div>
                  ))}
                </div>
              </Col>
            ))}
            <Indeterminate />
          </Row>
        </CardBody>
      </Card>
    </Col>
  )
}

export default DefaultCheckbox
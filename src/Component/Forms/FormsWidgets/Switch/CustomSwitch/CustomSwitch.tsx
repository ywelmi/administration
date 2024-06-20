import { Card, CardBody, Col, Row } from 'reactstrap'
import { CustomSwitchHeading } from '../../../../../utils/Constant'
import { customSwitchData, customSwitchDataList } from '../../../../../Data/Forms/FormsWidgets/Switch/Switch'
import CommonSwitch from '../Common/CommonSwitch'
import CommonCardHeader from '../../../../../CommonElements/CommonCardHeader/CommonCardHeader'

const CustomSwitch = () => {
  return (
    <Col md="12">
      <Card>
        <CommonCardHeader title={CustomSwitchHeading} span={customSwitchData} />
        <CardBody>
          <Row className="g-3">
            {customSwitchDataList.map(({ id, item, cardClass, formClass, disabled, sm }) => (
              <Col md="4" sm={sm} key={id}>
                <div className={`card-wrapper border rounded-3 ${cardClass} `}>
                  <div className={`form-check-size ${formClass}`}>
                    {item.map((item, index) => (
                      <CommonSwitch color={item} defaultChecked disabled={disabled} key={index} />
                    ))}
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </CardBody>
      </Card>
    </Col>
  )
}

export default CustomSwitch
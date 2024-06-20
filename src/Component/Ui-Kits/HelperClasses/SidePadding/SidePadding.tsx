import { Card, CardBody, Col, Row } from 'reactstrap'
import { H6 } from '../../../../AbstractElements'
import { OnlyOneSidePadding, PaddingLeft } from '../../../../utils/Constant'
import CardHeaderCommon from '../../CardHeaderCommon/CardHeaderCommon'
import { sidePaddingData, sidePaddingDetails, sidePaddings } from '../../../../Data/Ui-Kits/HelperClasses/HelperClassesData'

const SidePadding = () => {
  return (
    <Col xl="12">
      <Card>
        <CardHeaderCommon title={OnlyOneSidePadding} span={sidePaddingData}/>
        <CardBody>
          <Row className="g-3">
            <Col xxl="3" sm="6">
              <div className="border-wrapper h-100 alert-light-light dark-helper">
                <H6 className="mb-3">{PaddingLeft}</H6>
                <div className="common-p-box">
                  {sidePaddings.map((value, index) => (<span key={index}>{value}</span>))}
                </div>
              </div>
            </Col>
            {sidePaddingDetails.map((item, index) => (
              <Col xxl="3" sm="6" key={index}>
                <div className="border-wrapper h-100 alert-light-light dark-helper">
                  <H6 className="mb-3">{item.title}</H6>
                  <div className="common-p-box">{item.direction.map((data, index) => (<span key={index}>{data}</span>))}</div>
                </div>
              </Col>
            ))}
          </Row>
        </CardBody>
      </Card>
    </Col>
  )
}

export default SidePadding
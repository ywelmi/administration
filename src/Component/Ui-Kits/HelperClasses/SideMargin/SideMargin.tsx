import { Card, CardBody, Col, Row } from 'reactstrap'
import { MarginLeft, OnlyOneSideMargin } from '../../../../utils/Constant'
import { H6 } from '../../../../AbstractElements'
import CardHeaderCommon from '../../CardHeaderCommon/CardHeaderCommon'
import { sideMarginData, sideMarginDetails, sideMargins } from '../../../../Data/Ui-Kits/HelperClasses/HelperClassesData'

const SideMargin = () => {
  return (
    <Col xl="12">
      <Card>
      <CardHeaderCommon title={OnlyOneSideMargin} span={sideMarginData} />
        <CardBody>
            <Row className="g-3">
                <Col xxl="3" sm="6">
                    <div className="border-wrapper h-100 alert-light-light dark-helper">
                        <H6 className="mb-3">{MarginLeft}</H6>
                        <div className="common-p-box">
                            {sideMargins.map((value, index) => (<span key={index}>{value}</span>))}
                        </div>
                    </div>
                </Col>
            {sideMarginDetails.map((item, index) => (
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

export default SideMargin
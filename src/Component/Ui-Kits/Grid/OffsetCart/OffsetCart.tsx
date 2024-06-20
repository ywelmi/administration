import { Card, CardBody, Col, Row } from 'reactstrap'
import { offsetData, offsetList } from '../../../../Data/Ui-Kits/Grid/GridData'
import GridCommonCardFooter from '../Common/GridCommonCardFooter'
import { Offset, OffsetClass, OffsetValueClass } from '../../../../utils/Constant'
import CardHeaderCommon from '../../CardHeaderCommon/CardHeaderCommon'

const OffsetCart = () => {
  return (
    <Col sm="12">
      <Card>
        <CardHeaderCommon title={Offset} span={offsetData} />
        <CardBody className="grid-showcase">
          <Row className="g-2">
            <Col sm="5" xs="4" className="offset-sm-3 offset-2">
              <span>col-5 offset-3</span>
            </Col>
            {offsetList.map(({ smallSize, extraSmallSize, className, item }, index) => (
              <Col sm={smallSize} xs={extraSmallSize} className={className} key={index}>
                <span>{item}</span>
              </Col>
            ))}
          </Row>
        </CardBody>
        <GridCommonCardFooter className={OffsetClass} valueClass={OffsetValueClass} />
      </Card>
    </Col>
  )
}

export default OffsetCart
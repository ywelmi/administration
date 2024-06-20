import { Card, CardBody, Col, Row } from 'reactstrap'
import { orderData, orderList } from '../../../../Data/Ui-Kits/Grid/GridData'
import GridCommonCardFooter from '../Common/GridCommonCardFooter'
import { Order, OrderClass, OrderValueClass } from '../../../../utils/Constant'
import CardHeaderCommon from '../../CardHeaderCommon/CardHeaderCommon'

const OrderCart = () => {
  return (
    <Col sm="12">
      <Card>
        <CardHeaderCommon title={Order} span={orderData} />
        <CardBody className="grid-showcase">
          <Row className="g-2">
            <Col xs="3" className="order-3">
              <span>First Item (order-3)</span>
            </Col>
            {orderList.map(({ extraSmallSize, smallSize, item, order }, index) => (
              <Col xs={extraSmallSize} sm={smallSize && smallSize} className={order} key={index}>
                <span>{item} ({order})</span>
              </Col>
            ))}
          </Row>
        </CardBody>
        <GridCommonCardFooter className={OrderClass} valueClass={OrderValueClass} />
      </Card>
    </Col>
  )
}

export default OrderCart
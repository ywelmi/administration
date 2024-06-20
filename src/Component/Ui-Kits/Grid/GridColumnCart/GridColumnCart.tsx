import { Card, CardBody, Col, Row } from 'reactstrap'
import { columnData, gridColumnDetails } from '../../../../Data/Ui-Kits/Grid/GridData'
import { GridForColumn } from '../../../../utils/Constant'
import CardHeaderCommon from '../../CardHeaderCommon/CardHeaderCommon'

const GridColumnCart = () => {
  return (
    <Col sm="12">
      <Card>
        <CardHeaderCommon title={GridForColumn} span={columnData} />
        <CardBody className="grid-showcase">
          <Row>
            <Col md="1" className="text-center">
              <span>col-md-1</span>
            </Col>
            {gridColumnDetails.map(({ size, item }, index) => (
              <Col md={size} className={`${item} text-center`} key={index}>
                <span>{item}</span>
              </Col>
            ))}
          </Row>
        </CardBody>
      </Card>
    </Col>
  )
}

export default GridColumnCart
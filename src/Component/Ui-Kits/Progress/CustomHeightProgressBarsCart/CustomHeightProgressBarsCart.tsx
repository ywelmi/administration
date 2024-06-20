import { Card, CardBody, Col, Row } from 'reactstrap'
import { CustomHeightProgressBars } from '../../../../utils/Constant'
import { heightProgressData, heightProgressList } from '../../../../Data/Ui-Kits/Progress/Progress'
import { Progressbar } from '../../../../AbstractElements'
import CardHeaderCommon from '../../CardHeaderCommon/CardHeaderCommon'

const CustomHeightProgressBarsCart = () => {
  return (
    <Card>
      <CardHeaderCommon title={CustomHeightProgressBars} span={heightProgressData} />
      <CardBody className="progress-showcase">
        <Row>
          <Col>
            <Progressbar color="primary" value="25" style={{ height: "1px" }} />
            {heightProgressList.map(({ color, value, height }, index) => (
              <Progressbar color={color} value={value} style={{ height: `${height}` }} key={index} />
            ))}
          </Col>
        </Row>
      </CardBody>
    </Card>
  )
}

export default CustomHeightProgressBarsCart
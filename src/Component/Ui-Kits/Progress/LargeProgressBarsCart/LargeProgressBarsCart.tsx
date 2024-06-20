import { Card, CardBody, Col, Row } from 'reactstrap'
import { largeProgressData, largeProgressList } from '../../../../Data/Ui-Kits/Progress/Progress'
import { LargeProgressBars } from '../../../../utils/Constant'
import { Progressbar } from '../../../../AbstractElements'
import CardHeaderCommon from '../../CardHeaderCommon/CardHeaderCommon'

const LargeProgressBarsCart = () => {
  return (
    <Col xl="6">
      <Card className="height-equal">
        <CardHeaderCommon title={LargeProgressBars} span={largeProgressData} />
        <CardBody className="progress-showcase mb-3">
          <Row>
            <Col>
              <Progressbar color="primary" value="25" className="lg-progress-bar">25%</Progressbar>
              {largeProgressList.map(({ color, value, text }, index) => (
                <Progressbar color={color} value={value} className="lg-progress-bar" key={index}>
                  {text}
                </Progressbar>
              ))}
            </Col>
          </Row>
        </CardBody>
      </Card>
    </Col>
  )
}

export default LargeProgressBarsCart
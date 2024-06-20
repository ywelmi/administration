import { Card, CardBody, Col, Row } from 'reactstrap'
import { ProgressBarsStriped } from '../../../../utils/Constant'
import { progressStripData, progressStripList } from '../../../../Data/Ui-Kits/Progress/Progress'
import { Progressbar } from '../../../../AbstractElements'
import CardHeaderCommon from '../../CardHeaderCommon/CardHeaderCommon'

const ProgressBarsStripedCart = () => {
  return (
    <Col xl="6">
      <Card>
        <CardHeaderCommon title={ProgressBarsStriped} span={progressStripData} />
        <CardBody className="progress-showcase">
          <Row>
            <Col>
              <Progressbar color="primary" striped value="10" />
              {progressStripList.map(({ color, value }, index) => (
                <Progressbar color={color} striped value={value} key={index} />
              ))}
            </Col>
          </Row>
        </CardBody>
      </Card>
    </Col>
  )
}

export default ProgressBarsStripedCart
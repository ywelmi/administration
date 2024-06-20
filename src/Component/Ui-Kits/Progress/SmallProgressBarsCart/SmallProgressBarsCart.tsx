import { Card, CardBody, Col, Row } from 'reactstrap'
import { SmallProgressBars } from '../../../../utils/Constant'
import { smallProgressData, smallProgressList } from '../../../../Data/Ui-Kits/Progress/Progress'
import { Progressbar } from '../../../../AbstractElements'
import CardHeaderCommon from '../../CardHeaderCommon/CardHeaderCommon'

const SmallProgressBarsCart = () => {
  return (
    <Col xl="6">
      <Card className="height-equal">
        <CardHeaderCommon title={SmallProgressBars} span={smallProgressData} />
        <CardBody className="progress-showcase progress-b-space">
          <Row>
            <Col>
              <Progressbar color="primary" animated striped bar value="30" max={100} className="small-progressbar rounded-pill sm-progress-bar overflow-visible mt-4">
                <span className="txt-primary progress-label">30 MB Data</span>
                <span className="animate-circle"></span>
              </Progressbar>
              {smallProgressList.map(({ value, title }, index) => (
                <Progressbar color="primary" animated striped bar value={value} className="small-progressbar rounded-pill sm-progress-bar overflow-visible mt-4" key={index}>
                  <span className="txt-primary progress-label">{title}</span>
                  <span className="animate-circle"></span>
                </Progressbar>
              ))}
            </Col>
          </Row>
        </CardBody>
      </Card>
    </Col>
  )
}

export default SmallProgressBarsCart
import { Card, CardBody, Col, Row } from 'reactstrap'
import { BasicProgressBars } from '../../../../utils/Constant'
import { basicProgressData, basicProgressList } from '../../../../Data/Ui-Kits/Progress/Progress'
import { Progressbar } from '../../../../AbstractElements'
import CardHeaderCommon from '../../CardHeaderCommon/CardHeaderCommon'

const BasicProgressBarsCart = () => {
  return (
    <Card>
      <CardHeaderCommon title={BasicProgressBars} span={basicProgressData} />
      <CardBody className="progress-showcase">
        <Row>
          <Col>
            <Progressbar value="0" />
            {basicProgressList.map(({ color, value, text }, index) => (
              <Progressbar color={color} value={value} key={index}>
                {text && text}
              </Progressbar>
            ))}
          </Col>
        </Row>
      </CardBody>
    </Card>
  )
}

export default BasicProgressBarsCart
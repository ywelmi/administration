import { Card, CardBody, Col, Row } from 'reactstrap'
import { MultipleBars } from '../../../../utils/Constant'
import { multipleDta, multipleList } from '../../../../Data/Ui-Kits/Progress/Progress'
import { Progressbar } from '../../../../AbstractElements'
import CardHeaderCommon from '../../CardHeaderCommon/CardHeaderCommon'

const MultipleBarsCart = () => {
  return (
    <Col xl="6">
      <Card>
        <CardHeaderCommon title={MultipleBars} span={multipleDta} />
        <CardBody className="progress-showcase">
          <Row>
            <Col>
              <Progressbar multi>
                <Progressbar color="primary" bar value="30" />
                <Progressbar color="secondary" bar value="20" />
                <Progressbar color="success" bar value="15" />
              </Progressbar>
              <Progressbar multi>
                {multipleList.map(({ color, value }, index) => (
                  <Progressbar color={color} bar value={value} key={index} style={{ width: "10%" }} />
                ))}
              </Progressbar>
            </Col>
          </Row>
        </CardBody>
      </Card>
    </Col>
  )
}

export default MultipleBarsCart
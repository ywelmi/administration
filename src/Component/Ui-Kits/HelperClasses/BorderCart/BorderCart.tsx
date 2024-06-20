import { Card, CardBody, Col, Row } from 'reactstrap'
import AdditiveBorders from './AdditiveBorders'
import SubtractiveBorders from './SubtractiveBorders'
import AdditiveRadius from './AdditiveRadius'
import { BordersAndDisplays } from '../../../../utils/Constant'
import CardHeaderCommon from '../../CardHeaderCommon/CardHeaderCommon'
import { borderData } from '../../../../Data/Ui-Kits/HelperClasses/HelperClassesData'

const BorderCart = () => {
  return (
    <Col xs="12">
      <Card>
        <CardHeaderCommon title={BordersAndDisplays} span={borderData}/>
        <CardBody>
          <Row className="g-3">
            <AdditiveBorders />
            <SubtractiveBorders />
            <AdditiveRadius />
          </Row>
        </CardBody>
      </Card>
    </Col>
  )
}

export default BorderCart
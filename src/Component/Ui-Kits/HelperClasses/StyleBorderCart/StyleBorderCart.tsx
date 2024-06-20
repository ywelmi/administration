import { Card, CardBody, Col, Row } from 'reactstrap'
import { StylerBorders } from '../../../../utils/Constant'
import BorderRadius from './BorderRadius'
import BorderColors from './BorderColors'
import BorderWidths from './BorderWidths'
import TextColor from './TextColor'
import { styleData } from '../../../../Data/Ui-Kits/HelperClasses/HelperClassesData'
import CardHeaderCommon from '../../CardHeaderCommon/CardHeaderCommon'

const StyleBorderCart = () => {
  return (
    <Col xs="12">
      <Card>
        <CardHeaderCommon title={StylerBorders} span={styleData} />
        <CardBody>
          <Row className="g-3">
            <BorderRadius />
            <BorderColors />
            <BorderWidths />
            <TextColor />
          </Row>
        </CardBody>
      </Card>
    </Col>
  )
}

export default StyleBorderCart
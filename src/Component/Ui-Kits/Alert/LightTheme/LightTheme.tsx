import { Card, CardBody, Col, Row } from 'reactstrap'
import { LinkColorLightTheme } from '../../../../utils/Constant'
import { linkColorData } from '../../../../Data/Ui-Kits/Alert/AlertData'
import LightThemeLeftSection from './LightThemeLeftSection'
import LightThemeRightSection from './LightThemeRightSection'
import CardHeaderCommon from '../../CardHeaderCommon/CardHeaderCommon'

const LightTheme = () => {
  return (
    <Col xl="12">
      <Card>
        <CardHeaderCommon title={LinkColorLightTheme} span={linkColorData} />
        <CardBody>
          <Row>
            <LightThemeLeftSection />
            <LightThemeRightSection />
          </Row>
        </CardBody>
      </Card>
    </Col>
  )
}

export default LightTheme
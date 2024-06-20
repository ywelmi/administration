import { Card, Col } from 'reactstrap'
import CommonTagAndPillsCardBody from '../Common/CommonTagAndPillsCardBody'
import { PillsContextualVariations } from '../../../../utils/Constant'
import { pillsContext, pillsData } from '../../../../Data/Ui-Kits/TagAndPills/TagAndPills'
import CardHeaderCommon from '../../CardHeaderCommon/CardHeaderCommon'

const PillsContextualVariationsCart = () => {
  return (
    <Col sm="12" xl="6">
      <Card>
        <CardHeaderCommon title={PillsContextualVariations} span={pillsData} />
        <CommonTagAndPillsCardBody data={pillsContext} pill />
      </Card>
    </Col>
  )
}

export default PillsContextualVariationsCart
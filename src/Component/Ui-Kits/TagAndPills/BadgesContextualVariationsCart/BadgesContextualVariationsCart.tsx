import { Card, Col } from 'reactstrap'
import { badgesContext, badgeData } from '../../../../Data/Ui-Kits/TagAndPills/TagAndPills'
import CommonTagAndPillsCardBody from '../Common/CommonTagAndPillsCardBody'
import CardHeaderCommon from '../../CardHeaderCommon/CardHeaderCommon'
import { BadgesContextualVariations } from '../../../../utils/Constant'

const BadgesContextualVariationsCart = () => {
  return (
    <Col sm="12" xl="6">
      <Card>
        <CardHeaderCommon title={BadgesContextualVariations} span={badgeData} />
        <CommonTagAndPillsCardBody data={badgesContext} />
      </Card>
    </Col>
  )
}

export default BadgesContextualVariationsCart
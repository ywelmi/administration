import { Card, Col } from 'reactstrap'
import { RoundedPillsWithIcons } from '../../../../utils/Constant'
import CommonTagAndPillsCardBody from '../Common/CommonTagAndPillsCardBody'
import { roundedPillContext, roundedPillData } from '../../../../Data/Ui-Kits/TagAndPills/TagAndPills'
import CardHeaderCommon from '../../CardHeaderCommon/CardHeaderCommon'

const RoundedPillsWithIconsCart = () => {
  return (
    <Col sm="12" xl="6">
      <Card>
        <CardHeaderCommon title={RoundedPillsWithIcons} span={roundedPillData} />
        <CommonTagAndPillsCardBody number={roundedPillContext} />
      </Card>
    </Col>
  )
}

export default RoundedPillsWithIconsCart
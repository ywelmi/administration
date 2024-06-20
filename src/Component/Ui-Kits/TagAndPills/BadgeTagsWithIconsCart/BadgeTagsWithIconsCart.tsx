import { Card, Col } from 'reactstrap'
import { BadgeTagsWithIcons } from '../../../../utils/Constant'
import CommonTagAndPillsCardBody from '../Common/CommonTagAndPillsCardBody'
import { iconContext, iconData } from '../../../../Data/Ui-Kits/TagAndPills/TagAndPills'
import CardHeaderCommon from '../../CardHeaderCommon/CardHeaderCommon'

const BadgeTagsWithIconsCart = () => {
  return (
    <Col sm="12" xl="6">
      <Card>
        <CardHeaderCommon title={BadgeTagsWithIcons} span={iconData} />
        <CommonTagAndPillsCardBody number={iconContext} />
      </Card>
    </Col>
  )
}

export default BadgeTagsWithIconsCart
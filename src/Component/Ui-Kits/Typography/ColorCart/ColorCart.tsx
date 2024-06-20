import { Card, Col } from 'reactstrap'
import { ColoredHeadings } from '../../../../utils/Constant'
import { headingData } from '../../../../Data/Ui-Kits/Typography/Typography'
import ColorHeadingBody from './ColorHeadingBody'
import CardHeaderCommon from '../../CardHeaderCommon'

const ColorHeading = () => {
  return (
    <Col xxl="6">
      <Card className="height-equal">
        <CardHeaderCommon title={ColoredHeadings} span={headingData} />
        <ColorHeadingBody />
      </Card>
    </Col>
  )
}

export default ColorHeading
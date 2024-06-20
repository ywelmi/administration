import { Card, Col } from 'reactstrap'
import { Headings } from '../../../../utils/Constant'
import { headingData } from '../../../../Data/Ui-Kits/Typography/Typography'
import HeadingsBody from './HeadingsBody'
import CardHeaderCommon from '../../CardHeaderCommon'

const HeadingCart = () => {
  return (
    <Col xxl="6">
      <Card className="height-equal">
        <CardHeaderCommon title={Headings} span={headingData} />
        <HeadingsBody />
      </Card>
    </Col>
  )
}

export default HeadingCart
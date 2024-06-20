import { Card, Col } from 'reactstrap'
import { NumberOfPillsTags } from '../../../../utils/Constant'
import { roundedContext, roundedData } from '../../../../Data/Ui-Kits/TagAndPills/TagAndPills'
import CommonTagAndPillsCardBody from '../Common/CommonTagAndPillsCardBody'
import CardHeaderCommon from '../../CardHeaderCommon/CardHeaderCommon'

const NumberOfPillsTagCart = () => {
  return (
    <Col sm="12" xl="6">
      <Card>
        <CardHeaderCommon title={NumberOfPillsTags} span={roundedData} />
        <CommonTagAndPillsCardBody data={roundedContext} />
      </Card>
    </Col>
  )
}

export default NumberOfPillsTagCart
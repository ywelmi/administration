import { Card, CardBody, Col } from 'reactstrap'
import { Grouping } from '../../../../utils/Constant'
import { groupingData } from '../../../../Data/Ui-Kits/Avtar/Avtar'
import GroupingFirst from './GroupingFirst'
import GroupingSecond from './GroupingSecond'
import GroupInThird from './GroupinThird'
import CardHeaderCommon from '../../CardHeaderCommon'

const GroupingCart = () => {
  return (
    <Col xl="6">
      <Card className="height-equal">
        <CardHeaderCommon title={Grouping} span={groupingData} />
        <CardBody>
          <div className="avatar-showcase">
            <div className="avatars">
              <GroupingFirst />
              <GroupingSecond />
              <GroupInThird />
            </div>
          </div>
        </CardBody>
      </Card>
    </Col>
  )
}

export default GroupingCart
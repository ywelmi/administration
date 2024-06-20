import { Card, CardBody } from 'reactstrap'
import CommonCardHeading from '../../CommonButtons/CommonCardHeading'
import { CustomButtons } from '../../../../utils/Constant'
import { customButtonsSpan, customStateDataList } from '../../../../Data/Buttons/DefaultStyle'
import RaisedCustomStateButtonBody from './RaisedCustomStateButtonBody'

const RaisedCustomStateButton = () => {
  return (
    <Card>
      <CommonCardHeading smallHeading={CustomButtons} span={customButtonsSpan} />
      <CardBody className="btn-showcase">
        {customStateDataList.map((item, index) => (
          <RaisedCustomStateButtonBody data={item} key={index} />
        ))}
      </CardBody>
    </Card>
  )
}

export default RaisedCustomStateButton
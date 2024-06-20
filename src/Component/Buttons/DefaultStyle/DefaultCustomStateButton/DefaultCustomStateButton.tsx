import { Card, CardBody } from 'reactstrap'
import CommonCardHeading from '../../CommonButtons/CommonCardHeading'
import { CustomButtons } from '../../../../utils/Constant'
import { customButtonsSpan, customStateDataList } from '../../../../Data/Buttons/DefaultStyle'
import DefaultCustomStateButtonBody from './DefaultCustomStateButtonBody'

const DefaultCustomStateButton = () => {
  return (
    <Card>
      <CommonCardHeading smallHeading={CustomButtons} span={customButtonsSpan} />
      <CardBody className="btn-showcase">
        {customStateDataList.map((item, index) => (
          <DefaultCustomStateButtonBody data={item} key={index} />
        ))}
      </CardBody>
    </Card>
  )
}

export default DefaultCustomStateButton
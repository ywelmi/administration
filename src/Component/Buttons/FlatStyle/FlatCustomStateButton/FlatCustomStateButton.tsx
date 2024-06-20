import { Card, CardBody } from 'reactstrap'
import CommonCardHeading from '../../CommonButtons/CommonCardHeading'
import { CustomButtons } from '../../../../utils/Constant'
import { customButtonsSpan, customStateDataList } from '../../../../Data/Buttons/DefaultStyle'
import FlateCustomStateButtons from './FlateCustomStateButtons'

const FlatCustomStateButton = () => {
  return (
    <Card>
      <CommonCardHeading smallHeading={CustomButtons} span={customButtonsSpan} />
      <CardBody className="btn-showcase">
        {customStateDataList.map((item, index) => (
          <FlateCustomStateButtons data={item} key={index} />
        ))}
      </CardBody>
    </Card>
  )
}

export default FlatCustomStateButton
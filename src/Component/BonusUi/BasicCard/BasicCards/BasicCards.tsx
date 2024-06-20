import { Card, CardBody, Col } from 'reactstrap'
import { BasicCardHeading } from '../../../../utils/Constant'
import { P } from '../../../../AbstractElements'
import { basicCardData } from '../../../../Data/BonusUi/BasicCard/BasicCard'
import CardHeaderCommon from '../../CardHeaderCommon/CardHeaderCommon'

const BasicCards = () => {
  const BasicCardText1 = "Tabs have long been used to show alternative views of the same group of information tabs in software. Known as";
  const BasicCardText2 = " , these are still used today in web sites. For instance, airline companies such as Ryanair, easyJet and AirMalta use module tabs to enable the user to switch between bookings for flights, hotels and car hire.";
  return (
    <Col sm="12" xl="6">
      <Card>
        <CardHeaderCommon title={BasicCardHeading} span={basicCardData} />
        <CardBody>
          <P className="mb-0">
            {BasicCardText1}<em className="txt-danger">“module tabs”</em>{BasicCardText2}
          </P>
        </CardBody>
      </Card>
    </Col>
  )
}

export default BasicCards
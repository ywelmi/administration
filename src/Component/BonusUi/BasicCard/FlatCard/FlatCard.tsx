import { Card, CardBody, Col } from 'reactstrap'
import { P } from '../../../../AbstractElements'
import { FlatCards } from '../../../../utils/Constant'
import { flatCardData } from '../../../../Data/BonusUi/BasicCard/BasicCard'
import CardHeaderCommon from '../../CardHeaderCommon/CardHeaderCommon'

const FlatCard = () => {
    const FlatCardText1 = "A navigation bar is a particularly important feature because it allows visitors to quickly and easily find";
    const FlatCardTextEm = " important pages on your website";
    const FlatCardText2 = " , like your blog, product pages, pricing, contact info, and documentation. This improves the chances of visitors browsing your site longer, which can boost your page views and reduce your bounce rate.";
  
  return (
    <Col sm="12" xl="6">
      <Card className="b-r-0">
        <CardHeaderCommon title={FlatCards} span={flatCardData}/>
        <CardBody>
          <P className="mb-0">
            {FlatCardText1}<em className="txt-danger">{FlatCardTextEm}</em>{FlatCardText2}
          </P>
        </CardBody>
      </Card>
    </Col>
  )
}

export default FlatCard
import { Card, CardBody, Col, ListGroup, ListGroupItem } from 'reactstrap'
import { BryanOwens, GloriaAcheson, Href, PrimaryBorderState, TeresaMosteller } from '../../../../utils/Constant'
import { Image } from '../../../../AbstractElements'
import { dynamicImage } from '../../../../Service'
import { borderPrimaryData } from '../../../../Data/BonusUi/CreativeCard/CreativeCard'
import CardHeaderCommon from '../../CardHeaderCommon/CardHeaderCommon'

const BorderPrimaryState = () => {
  return (
    <Col xxl="4" md="6">
      <Card className="height-equal border-primary-state">
        <CardHeaderCommon headClass="border-l-primary" title={PrimaryBorderState} span={borderPrimaryData} />
        <CardBody>
          <ListGroup>
            <ListGroupItem className="list-group-item-action active" href={Href}>
                <Image className="rounded-circle" src={dynamicImage(`user/1.jpg`)} alt="user" />{TeresaMosteller}
            </ListGroupItem>
            <ListGroupItem className="list-group-item-action" href={Href}>
                <Image className="rounded-circle" src={dynamicImage(`user/3.png`)} alt="user" />{GloriaAcheson}
            </ListGroupItem>
            <ListGroupItem className="list-group-item-action" href={Href}>
                <Image className="rounded-circle" src={dynamicImage(`user/5.jpg`)} alt="user" />{BryanOwens}
            </ListGroupItem>
          </ListGroup>
        </CardBody>
      </Card>
    </Col>
  )
}

export default BorderPrimaryState
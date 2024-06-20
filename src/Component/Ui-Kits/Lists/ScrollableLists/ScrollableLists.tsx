import { Card, CardBody, Col, ListGroup, ListGroupItem } from 'reactstrap'
import { Href, MollyBoake, ScrollableList } from '../../../../utils/Constant'
import { H6, Image, P } from '../../../../AbstractElements'
import { dynamicImage } from '../../../../Service'
import { scrollableData } from '../../../../Data/Ui-Kits/Lists/Lists'
import DynamicScrollableLists from './DynamicScrollableLists'
import CardHeaderCommon from '../../CardHeaderCommon/CardHeaderCommon'

const ScrollableLists = () => {
  return (
    <Col xxl="4">
      <Card>
        <CardHeaderCommon title={ScrollableList} span={scrollableData} />
        <CardBody> 
          <ListGroup className="main-lists-content scrollbar-wrapper theme-scrollbar custom-scrollbar">
            <ListGroupItem className="list-group-item-action active list-hover-primary" href={Href}>
              <div className="list-wrapper gap-0">
                <Image className="list-img" src={dynamicImage(`user/9.jpg`)} alt="profile" />
                <div className="list-content">
                  <H6>{MollyBoake}</H6>
                  <P>MollyBoake@rhyta.com</P>
                  <small>5 days ago</small>
                </div>
              </div>
            </ListGroupItem>
            <DynamicScrollableLists />
          </ListGroup>
        </CardBody>
      </Card>
    </Col>
  )
}

export default ScrollableLists
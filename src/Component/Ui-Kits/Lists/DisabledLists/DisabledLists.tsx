import { Card, CardBody, Col } from 'reactstrap'
import { DisabledList, Href } from '../../../../utils/Constant'
import { Image, LI, UL } from '../../../../AbstractElements'
import { disableList, disableListData } from '../../../../Data/Ui-Kits/Lists/Lists'
import { dynamicImage } from '../../../../Service'
import CardHeaderCommon from '../../CardHeaderCommon/CardHeaderCommon'

const DisabledLists = () => {
  return (
    <Col xxl="4" md="6">
      <Card>
        <CardHeaderCommon title={DisabledList} span={disableListData} />
        <CardBody>
          <UL> 
            <LI className="list-group-item-action list-hover-primary active d-flex align-items-center" href={Href}>
              <Image className="rounded-circle" src={dynamicImage(`user/1.jpg`)} alt="user" />Teresa J. Mosteller
            </LI>
            {disableList.map(({ text, className,src }, index) => (
              <LI className={`list-group-item-action d-flex align-items-center ${className ? className : ""}`} key={index} href={Href}>
                <Image className="rounded-circle" src={dynamicImage(src)} alt="user" />{text}
              </LI> 
            ))}
          </UL>
        </CardBody>
      </Card>
    </Col>
  )
}

export default DisabledLists
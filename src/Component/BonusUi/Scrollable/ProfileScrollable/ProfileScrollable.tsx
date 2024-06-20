import { Card, CardBody, Col } from 'reactstrap'
import { Href, ProfileScrollables } from '../../../../utils/Constant'
import ScrollBar from 'react-perfect-scrollbar'
import { Image, LI, UL } from '../../../../AbstractElements'
import { dynamicImage } from '../../../../Service'
import { profileScroll, profileScrollList } from '../../../../Data/BonusUi/Scrollable/Scrollable'
import CardHeaderCommon from '../../CardHeaderCommon/CardHeaderCommon'

const ProfileScrollable = () => {
  return (
    <Col xxl="4" md="6">
      <Card>
        <CardHeaderCommon title={ProfileScrollables} span={profileScroll} />
        <CardBody>
          <ScrollBar className="scroll-demo scroll-b-none profile-scrollable" style={{ width: "100%", height: "300px" }}>
            <UL>
              <LI href={Href} className="list-group-item-action list-hover-primary">
                <Image className="rounded-circle" src={dynamicImage(`user/3.png`)} alt="user" />
                Gloria D. Acheson
              </LI>
              {profileScrollList.map(({ text, src }, index) => (
                <LI href={Href} className="list-group-item-action list-hover-primary" key={index}>
                  <Image className="rounded-circle" src={dynamicImage(src)} alt="user" />
                  {text}
                </LI>
              ))}
            </UL>
          </ScrollBar>
        </CardBody>
      </Card>
    </Col>
  )
}

export default ProfileScrollable
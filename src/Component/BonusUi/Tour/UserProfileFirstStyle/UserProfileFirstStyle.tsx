import { Card, Col } from 'reactstrap'
import { Image } from '../../../../AbstractElements'
import { dynamicImage } from '../../../../Service'
import InfoSection from './InfoSection'
import FollowSection from './FollowSection'
import CommonTourSocialMedia from '../Common/CommonTourSocialMedia'

const UserProfileFirstStyle = () => {
  return (
    <Col sm="12">
      <Card className="hovercard text-center">
        <div className="cardheader"></div>
        <div className="user-image">
          <div className="avatar">
            <Image alt="user" src={dynamicImage(`user/7.jpg`)} className="step1" />
          </div>
          <div className="icon-wrapper">
            <i className="icofont icofont-pencil-alt-5 step2"></i>
          </div>
        </div>
        <div className="info">
          <InfoSection />
          <hr />
          <CommonTourSocialMedia className="step4" />
          <FollowSection />
        </div>
      </Card>
    </Col>
  )
}

export default UserProfileFirstStyle
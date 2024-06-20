import { Card, Col, Row } from 'reactstrap'
import SocialMediaSection from './SocialMediaSection'
import SecondStyleAboutSection from './SecondStyleAboutSection'
import CommonTourHeader from '../Common/CommonTourHeader'
import CommonTourFooter from '../Common/CommonTourFooter'

const UserProfileSecondStyle = () => {
  return (
    <Col sm="12" className="step5">
      <Card>
        <div className="profile-img-style profile-user-img">
          <Row className="g-2 align-items-center">
            <CommonTourHeader date="25 Jan" time="6 min read" />
            <SocialMediaSection />
          </Row>
          <hr />
          <SecondStyleAboutSection />
          <CommonTourFooter />
        </div>
      </Card>
    </Col>
  )
}

export default UserProfileSecondStyle
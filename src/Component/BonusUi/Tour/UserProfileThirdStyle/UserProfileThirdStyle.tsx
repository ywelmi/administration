import { Card, Col, Row } from 'reactstrap'
import CommonTourHeader from '../Common/CommonTourHeader'
import CommonTourFooter from '../Common/CommonTourFooter'
import ThirdStyleSocialMedia from './ThirdStyleSocialMedia'
import ThirdStyleAboutSection from './ThirdStyleAboutSection'

const UserProfileThirdStyle = () => {
  return (
    <Col sm="12">
      <Card>
        <div className="profile-img-style profile-user-img">
          <Row className="g-2">
            <CommonTourHeader date="25 Jan" time="1 min read" />
            <ThirdStyleSocialMedia />
          </Row>
          <hr />
          <ThirdStyleAboutSection />
          <CommonTourFooter />
        </div>
      </Card>
    </Col>
  )
}

export default UserProfileThirdStyle
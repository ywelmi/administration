import { Col, Row } from 'reactstrap'
import LeftSideBar from '../TimelineTab/LeftSideBar/LeftSideBar'
import { PeopleKnow, ViewedYourProfile } from '../../../../utils/Constant'
import RightSideBar from '../TimelineTab/RightSideBar/RightSideBar'
import PeopleYouMayKnow from './PeopleYouMayKnow/PeopleYouMayKnow'
import HobbiesAndInterests from './HobbiesAndInterests/HobbiesAndInterests'
import EducationAndEmployment from './EducationAndEmployment/EducationAndEmployment'
import ActivityLog from './ActivityLog/ActivityLog'

const AboutTab = () => {
  return (
    <Row>
      <Col xl="3" className="xl-40 box-col-30" lg="12" md="5">
        <div className="default-according style-1 faq-accordion job-accordion">
          <LeftSideBar />
        </div>
      </Col>
      <Col xl="6" className="xl-60 box-col-40" lg="12" md="7">
        <Row>
          <PeopleYouMayKnow Heading={PeopleKnow} />
          <HobbiesAndInterests />
          <EducationAndEmployment />
          <PeopleYouMayKnow Heading={ViewedYourProfile} />
          <ActivityLog />
        </Row>
      </Col>
      <Col xl="3" className="xl-100 box-col-30">
        <div className="default-according style-1 faq-accordion job-accordion">
          <Row>
            <RightSideBar />
          </Row>
        </div>
      </Col>
    </Row>
  )
}

export default AboutTab
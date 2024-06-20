import { Col, Row } from 'reactstrap'
import LeftSideBar from './LeftSideBar/LeftSideBar'
import NewUserClass from './NewUserClass/NewUserClass'
import RightSideBar from './RightSideBar/RightSideBar'

const TimelineTab = () => {
  return (
    <Row>
      <Col className="xl-40 box-col-4" lg="12" md="5" xl="3">
        <div className="default-according style-1 faq-accordion">
          <LeftSideBar />
        </div>
      </Col>
      <Col className="xl-60 box-col-8-end" lg="12" md="7" xl="6">
        <NewUserClass /> 
      </Col>
      <Col className="xl-100 box-col-12" xl="3">
        <div className="default-according style-1 faq-accordion job-accordion" >
          <RightSideBar /> 
        </div>
      </Col>
    </Row>
  )
}

export default TimelineTab
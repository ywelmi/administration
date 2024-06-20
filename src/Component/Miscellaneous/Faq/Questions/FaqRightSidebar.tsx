import { Col, Row } from 'reactstrap'
import SearchArticle from './SearchArticle'
import AskQuestions from './AskQuestions'
import LatestUpdate from './LatestUpdate'

const FaqRightSidebar = () => {
  return (
    <Col xl="4"  lg="6" md="5" className="xl-40">
      <Row>
        <SearchArticle />
        <AskQuestions />
        <LatestUpdate />
      </Row>
    </Col>
  )
}

export default FaqRightSidebar
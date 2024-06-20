import { Col, Container, Row } from 'reactstrap'
import CourseFilter from '../LearningList/CourseFilter/CourseFilter'
import BlogSingle from './BlogSingle/BlogSingle'
import Breadcrumbs from '../../../../CommonElements/Breadcrumbs/Breadcrumbs'
import { DetailedCourse, Learning } from '../../../../utils/Constant'

const DetailsCourseContainer = () => {
  return (
    <>
      <Breadcrumbs mainTitle={DetailedCourse} parent={Learning} />
      <Container fluid>
        <Row>
          <Col xl="9" className="xl-60 order-xl-0 order-1 box-col-12">
            <BlogSingle />
          </Col>
          <Col xl="3" className="xl-40 box-col-12 learning-filter">
            <CourseFilter />
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default DetailsCourseContainer
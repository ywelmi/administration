import { Col, Container, Row } from 'reactstrap'
import CardViewSidebar from '../Common/CardViewSidebar/CardViewSidebar'
import JobApplyForms from './JobApplyForms/JobApplyForms'
import Breadcrumbs from '../../../../CommonElements/Breadcrumbs/Breadcrumbs'
import { JobApply, JobSearch } from '../../../../utils/Constant'

const JobApplyContainer = () => {
  return (
    <>
      <Breadcrumbs mainTitle={JobApply} parent={JobSearch} />
      <Container fluid>
        <Row>
          <Col xl="3" className="xl-40 box-col-12">
            <div className="md-sidebar">
              <CardViewSidebar />
            </div>
          </Col>
          <Col xl="9" className="xl-60 box-col-12">
            <JobApplyForms />
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default JobApplyContainer
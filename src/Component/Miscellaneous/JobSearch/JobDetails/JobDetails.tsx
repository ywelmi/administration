import { Col, Container, Row } from 'reactstrap'
import CardViewSidebar from '../Common/CardViewSidebar/CardViewSidebar'
import MainCard from './MainCard/MainCard'
import Breadcrumbs from '../../../../CommonElements/Breadcrumbs/Breadcrumbs'
import { JobDetails, JobSearch } from '../../../../utils/Constant'

const JobDetailsContainer = () => {
  return (
    <>
      <Breadcrumbs mainTitle={JobDetails} parent={JobSearch} />
      <Container fluid>
        <Row>
          <Col xl="3" className="xl-40 box-col-12">
            <div className="md-sidebar">
              <CardViewSidebar />
            </div>
          </Col>
          <Col xl="9" className="xl-60 box-col-12">
            <MainCard />
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default JobDetailsContainer
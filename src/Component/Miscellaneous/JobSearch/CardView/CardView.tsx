import { Col, Container, Row } from 'reactstrap'
import CardViewSidebar from '../Common/CardViewSidebar/CardViewSidebar'
import CardsClass from './CardsClass/CardsClass'
import CardsPagination from '../Common/CardViewSidebar/CardsPagination/CardsPagination'
import Breadcrumbs from '../../../../CommonElements/Breadcrumbs/Breadcrumbs'
import { CardsView, JobSearch } from '../../../../utils/Constant'

const CardViewContainer = () => {
  return (
    <>
      <Breadcrumbs mainTitle={CardsView} parent={JobSearch} />
      <Container fluid>
        <Row>
          <Col xxl="3" xl="4" className="box-col-12">
            <div className="md-sidebar">
              <CardViewSidebar />
            </div>
          </Col>
          <Col xxl="9" xl="8" className="box-col-12">
            <Row>
              <CardsClass />
              <CardsPagination />
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default CardViewContainer
import { Card, Col, Container, Row } from 'reactstrap'
import BookmarkSideBar from './BookmarkSideBar/BookmarkSideBar'
import BookmarksTabs from './BookmarksTabs/BookmarksTabs'
import Breadcrumbs from '../../../CommonElements/Breadcrumbs/Breadcrumbs'
import { Apps, Bookmark } from '../../../utils/Constant'

const BookmarkContainer = () => {
  return (
    <>  
      <Breadcrumbs mainTitle={Bookmark} parent={Apps} />
      <Container fluid>
        <div className="email-wrap bookmark-wrap">
          <Row>
            <BookmarkSideBar />
            <Col xl="9" md="12" className="box-col-12">
              <div className="email-right-aside bookmark-tabcontent">
                <Card className="email-body radius-left">
                  <div className="ps-0">
                    <BookmarksTabs />
                  </div>
                </Card>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </>
  )
}

export default BookmarkContainer
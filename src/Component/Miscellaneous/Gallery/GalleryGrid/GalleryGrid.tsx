import { Card, CardBody, Col, Container, Row } from 'reactstrap'
import { Gallery, ImageGallery } from '../../../../utils/Constant'
import MyGallery from './MyGallery'
import CardHeaderCommon from '../../../../CommonElements/CommonCardHeader/CardHeaderCommon'
import Breadcrumbs from '../../../../CommonElements/Breadcrumbs/Breadcrumbs'

const GalleryGridContainer = () => {
  return (
    <>
      <Breadcrumbs mainTitle={Gallery} parent={Gallery} />
      <Container fluid>
        <Row>
          <Col sm="12">
            <Card>
              <CardHeaderCommon title={ImageGallery} borderClass={true} />
              <CardBody className="gallery my-gallery">
                <Row>
                  <MyGallery />
                </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default GalleryGridContainer
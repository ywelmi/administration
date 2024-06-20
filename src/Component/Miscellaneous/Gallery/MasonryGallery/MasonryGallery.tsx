import { Card, Col, Container, Row } from 'reactstrap'
import { Gallery, MasonryGalleryCap } from '../../../../utils/Constant'
import MasonryGalleryBody from './MasonryGalleryBody'
import CardHeaderCommon from '../../../../CommonElements/CommonCardHeader/CardHeaderCommon'
import Breadcrumbs from '../../../../CommonElements/Breadcrumbs/Breadcrumbs'

const MasonryGalleryContainer = () => {
  return (
    <>
      <Breadcrumbs mainTitle={MasonryGalleryCap} parent={Gallery} />
      <Container fluid>
        <Row>
          <Col sm="12" className="box-col-12">
            <Card className="pb-5">
              <CardHeaderCommon title={MasonryGalleryCap} borderClass={true} />
              <MasonryGalleryBody />
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default MasonryGalleryContainer
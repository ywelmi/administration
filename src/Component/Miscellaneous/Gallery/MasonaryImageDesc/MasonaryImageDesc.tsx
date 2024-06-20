import { Card, Col, Container, Row } from 'reactstrap'
import { Gallery, MasonryGalleryDescriptionCap } from '../../../../utils/Constant'
import MasonryGalleryWithDescCardBody from './MasonryGalleryWithDescCardBody'
import CardHeaderCommon from '../../../../CommonElements/CommonCardHeader/CardHeaderCommon'
import Breadcrumbs from '../../../../CommonElements/Breadcrumbs/Breadcrumbs'

const MasonryImageDescContainer = () => {
  return (
    <>
      <Breadcrumbs mainTitle={MasonryGalleryDescriptionCap} parent={Gallery} />
      <Container fluid>
        <Row>
          <Col sm="12" className="box-col-12">
            <Card>
              <CardHeaderCommon title={MasonryGalleryDescriptionCap} borderClass={true} />
              <MasonryGalleryWithDescCardBody />
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default MasonryImageDescContainer
import { Card, CardBody, Col, Container, Row } from 'reactstrap'
import { AddPost, Blog, BlogDiscardButton, BlogPostButton, PostEdit } from '../../../../utils/Constant'
import { Btn } from '../../../../AbstractElements'
import FormPost from './FormPost'
import DropzoneFile from './DropzoneFile'
import CardHeaderCommon from '../../../../CommonElements/CommonCardHeader/CardHeaderCommon'
import Breadcrumbs from '../../../../CommonElements/Breadcrumbs/Breadcrumbs'

const AddPostContainer = () => {
  return (
    <>
      <Breadcrumbs mainTitle={AddPost} parent={Blog} />
      <Container fluid>
        <Row>
          <Col sm="12">
            <Card>
              <CardHeaderCommon title={PostEdit} borderClass={true} />
              <CardBody className="add-post">
                <FormPost />
                <DropzoneFile />
                <div className="btn-showcase text-end">
                  <Btn color="primary">{BlogPostButton}</Btn>
                  <Btn color="light" type="reset">{BlogDiscardButton}</Btn>
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default AddPostContainer
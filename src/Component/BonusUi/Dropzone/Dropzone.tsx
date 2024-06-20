import { Container, Row } from 'reactstrap'
import DefaultDropzone from './DefaultDropzone/DefaultDropzone'
import ImagePreview from './ImagePreview/ImagePreview'
import SingleFileUpload from './SingleFileUpload/SingleFileUpload'
import MultiFileUpload from './MultiFileUpload/MultiFileUpload'
import Breadcrumbs from '../../../CommonElements/Breadcrumbs/Breadcrumbs'
import { BonusUi, Dropzone } from '../../../utils/Constant'

const DropzoneContainer = () => {
  return (
    <>
      <Breadcrumbs mainTitle={Dropzone} parent={BonusUi} />
      <Container fluid>
        <Row>
          <DefaultDropzone />
          <ImagePreview/>
          <SingleFileUpload/>
          <MultiFileUpload/>
        </Row>
      </Container>
    </>
  )
}

export default DropzoneContainer
import { Container, Row } from 'reactstrap'
import Editor from './Editor'
import Breadcrumbs from '../../../../CommonElements/Breadcrumbs/Breadcrumbs'
import { CkEditor, Editors } from '../../../../utils/Constant'

const CkEditorContainer = () => {
  return (
    <>
      <Breadcrumbs mainTitle={CkEditor} parent={Editors} />
      <Container fluid>
        <Row>
          <Editor />
        </Row>
      </Container>
    </>
  )
}

export default CkEditorContainer
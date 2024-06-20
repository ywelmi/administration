import { Container, Row } from 'reactstrap'
import JavascriptMode from './JavascriptMode'
import HtmlMode from './HtmlMode'
import CssMode from './CssMode'
import JavaMode from './JavaMode'
import Breadcrumbs from '../../../../CommonElements/Breadcrumbs/Breadcrumbs'
import { AceEditor, Editors } from '../../../../utils/Constant'

const AceEditorContainer = () => {
  return (
    <>
      <Breadcrumbs mainTitle={AceEditor} parent={Editors} />
      <Container fluid>
        <Row>
          <JavascriptMode />
          <HtmlMode />
          <CssMode />
          <JavaMode />
        </Row>
      </Container>
    </>
  )
}

export default AceEditorContainer
import { Container } from 'reactstrap'
import MdeExampleOne from './MdeExampleOne'
import MdeExampleTwo from './MdeExampleTwo'
import Breadcrumbs from '../../../../CommonElements/Breadcrumbs/Breadcrumbs'
import { Editors, MDEEditor } from '../../../../utils/Constant'

const MdeEditorContainer = () => {
  return (
    <>
      <Breadcrumbs mainTitle={MDEEditor} parent={Editors} />
      <Container fluid>
        <MdeExampleOne />
        <MdeExampleTwo />
      </Container>
    </>
  )
}

export default MdeEditorContainer
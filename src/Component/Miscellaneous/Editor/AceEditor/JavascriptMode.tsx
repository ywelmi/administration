import { Card, CardBody, Col } from 'reactstrap'
import { JavascriptModeTitle } from '../../../../utils/Constant'
import AceEditor from 'react-ace';
import 'ace-builds/src-noconflict/mode-java';
import 'ace-builds/src-noconflict/theme-monokai';
import 'ace-builds/src-noconflict/ext-language_tools';
import { javaData } from '../../../../Data/Miscellaneous/Editor/Editor';
import CardHeaderCommon from '../../../../CommonElements/CommonCardHeader/CardHeaderCommon';

const JavascriptMode = () => {
  return (
    <Col xl='6'>
        <Card>
          <CardHeaderCommon title={JavascriptModeTitle} />
          <CardBody>
          <AceEditor
            className="aceEditor w-auto"
            mode="java"
            theme="monokai"
            value={javaData}
            name="blah2"
            setOptions={{ useWorker: false }}
            fontSize={14}
            showPrintMargin={true}
            showGutter={true}
            editorProps={{ $blockScrolling: true }}
            highlightActiveLine={true}
          />
          </CardBody>
        </Card>
    </Col>
  )
}

export default JavascriptMode
import SimpleMdeReact from "react-simplemde-editor";
import { Col } from "reactstrap";
import { P } from "../../../../../../AbstractElements";

const FormEditors = () => {
  const mdeEditorText = `Enter your messages...`;
  return (
    <Col xs="12">
      <div id="editor2">
        <SimpleMdeReact id="editor_container" value={mdeEditorText} options={{ autofocus: false, spellChecker: true }}/>
      </div>
      <P className="f-light detail-note">
        {"Improve product visibility by adding a compelling description."}
      </P>
    </Col>
  );
};

export default FormEditors;

import SimpleMdeReact from "react-simplemde-editor";
import { Image, P, SVG } from "../../../../../AbstractElements";
import { dynamicImage } from "../../../../../Service";
import DownloadLink from "react-download-link";

const UserFooter = () => {
  const mdeEditorText = `Enter text in the area on the left. For more info, click the ? (help) icon in the menu.`;
  return (
    <div className="user-footer">
      <div>
        <SVG iconId="attchment" />
        <span className="f-light">{"Attachments"}</span>
      </div>
      <div className="d-inline-block">
        <div className="attchment-file common-flex">
          <div className="common-flex align-items-center">
            <Image src={dynamicImage("email-template/pdfs.png")} alt="pdf" />
            <div className="d-block">
              <P>Offer_Letter.pdf</P>
              <P>200KB</P>
            </div>
          </div>
          <DownloadLink filename="myfile.txt" label={<i className="fa fa-download f-light"></i>} />
        </div>
      </div>
      <div className="toolbar-box">
        <div id="editor">
          <SimpleMdeReact id="editor_container" value={mdeEditorText} options={{ autofocus: true, spellChecker: false }} />
        </div>
      </div>
    </div>
  );
};

export default UserFooter;

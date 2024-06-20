// @ts-nocheck
import { Container, Input, Label, Row } from 'reactstrap';
import { Btn } from '../../AbstractElements';
import { CopyToClipboard } from "react-copy-to-clipboard";
import { toast } from "react-toastify";
import { Class, CopyText, Markup } from '../../utils/Constant';

const IconMarkUp = ({ icons, iTag }) => {
    const featherIcons = require("feather-icons");
    const closeIcon = document.getElementsByClassName("icon-hover-bottom") as HTMLCollectionOf<HTMLElement>;
  
    const closeIconContainer = () => closeIcon[0].style.display = "none";
    if (iTag !== "" && icons !== "") closeIcon[0].style.display = "block";
  
    return (
      <div className="icon-hover-bottom p-fixed fa-fa-icon-show-div">
        <Container fluid>
          <Row>
            <div className="icon-popup">
              <div className="close-icon" onClick={() => closeIconContainer()}>
                <i className="icofont icofont-close"></i>
              </div>
              <div className="icon-first">{icons.featherIcon ? <div dangerouslySetInnerHTML={{ __html: featherIcons.icons[icons.featherIcon].toSvg(icons.featherIcon) }} /> : <i id="icon_main" className={icons.icon}></i>}</div>
              <div className="icon-class">
                <Label className="icon-title mb-2">{Class}</Label>
                <span id="fclass1" className="">
                  {icons.featherIcon ? iTag.iTag.slice(17, iTag.iTag.indexOf('"></i>')) : iTag.iTag && iTag.iTag.slice(14, iTag.iTag.indexOf('"></i>'))}                
                </span>
              </div>
              <div className="icon-last icon-last">
                <Label className="icon-title">{Markup}</Label>
                <div className="form-inline">
                  <div className="form-group m-0">
                    <Input className="inp-val m-r-10" id="input_copy" type="text" defaultValue={iTag.iTag} />
                    <CopyToClipboard text={iTag.iTag}>
                      <Btn color="primary" className="notification" onClick={() => toast.info("Code Copied to clipboard !", { position: toast.POSITION.BOTTOM_RIGHT, theme: "colored" })}>
                        {CopyText}
                      </Btn>
                    </CopyToClipboard>
                  </div>
                </div>
              </div>
            </div>
          </Row>
        </Container>
      </div>
    );
}

export default IconMarkUp
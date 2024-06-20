import { Col } from "reactstrap";
import { Btn } from "../../../../AbstractElements";
import { EmailFilter, Href } from "../../../../utils/Constant";
import { useState } from "react";
import EmailLeftSidebar from "./EmailLeftSidebar";
import { LetterBoxNavType } from "../../../../Types/Application/LetterBox/LetterBox";

const EmailSidebar: React.FC<LetterBoxNavType> = ({ navId, setNavId }) => {
  const [open,setOpen] = useState(false)
  return (
    <Col xxl="3" xl="4" className="box-col-12">
      <div className="md-sidebar">
        <Btn color="primary" className="md-sidebar-toggle" href={Href} onClick={()=>setOpen(!open)}>
          {EmailFilter}
        </Btn>
        <div className={`md-sidebar-aside job-left-aside custom-scrollbar ${open ? "open" : ""}`}>
          <EmailLeftSidebar navId={navId} setNavId={setNavId}  />
        </div>
      </div>
    </Col>
  );
};

export default EmailSidebar;

import { Container, Row } from "reactstrap";
import EmailSidebar from "./EmailSidebar/EmailSidebar";
import EmailRightSide from "./EmailRightSide/EmailRightSide";
import { useState } from "react";
import Breadcrumbs from "../../../CommonElements/Breadcrumbs/Breadcrumbs";
import { Email, LetterBox } from "../../../utils/Constant";

const LetterBoxContainer = () => {
  const [navId, setNavId]= useState("1");
  return (
    <>
      <Breadcrumbs mainTitle={LetterBox} parent={Email} />
      <Container fluid>
        <div className="email-wrap email-main-wrapper">
          <Row>
            <EmailSidebar navId={navId} setNavId={setNavId} />
            <EmailRightSide navId={navId} />
          </Row>
        </div>
      </Container>
    </>
  );
};

export default LetterBoxContainer;

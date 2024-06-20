import React, { LegacyRef } from "react";
import { Btn, FeatherIcons, Image, P } from "../../../../../AbstractElements";
import { dynamicImage } from "../../../../../Service";
import { Send } from "../../../../../utils/Constant";
import InboxOption from "./InboxOption";
import UserFooter from "./UserFooter";
import UserMailBody from "./UserMailBody";
import { MailPropsType } from "../../../../../Types/Application/LetterBox/LetterBox";

const InterviewMailBody = React.forwardRef(({handlePrint}:MailPropsType, ref:LegacyRef<HTMLDivElement> | undefined) => {
  return (
    <div ref={ref} >
      <div className="mail-body-wrapper">
        <div className="user-mail-wrapper">
          <div className="user-title">
            <div>
              <div className="rounded-border">
                <Image className="img-fluid" src={dynamicImage("user/12.png")} alt="user"/>
              </div>
              <div className="dropdown-subtitle">
                <P>Ronald Richards</P>
                <div className="onhover-dropdown">
                  <Btn className="btn p-0 dropdown-button">
                    To me <FeatherIcons iconName="ChevronDown" />
                  </Btn>
                  <div className="inbox-security onhover-show-div">
                    <P>
                      From: <span>pixelstrap &lt;pixelstrap3@gmail.com&gt;</span>
                    </P>
                    <P>
                      to: <span>donut.horry@gmail.com</span>
                    </P>
                    <P>
                      reply-to:
                      <span>&lt;pixelstrap3@gmail.com&gt;</span>
                    </P>
                    <P>
                      date: <span>Jun 13, 2024, 7:10 AM</span>
                    </P>
                    <P>
                      subject: <span>Important Account Security Update</span>
                    </P>
                    <P>
                      security: <span>standard encryption (TLS)</span>
                    </P>
                  </div>
                </div>
              </div>
            </div>
            <InboxOption handlePrint={handlePrint}  />
          </div>
          <UserMailBody />
          <UserFooter />
          <div className="send-btn">
            <Btn color="primary">{Send}
              <i className="fa fa-paper-plane" />
            </Btn>
          </div>
        </div>
      </div>
    </div>
  );
});

export default InterviewMailBody;

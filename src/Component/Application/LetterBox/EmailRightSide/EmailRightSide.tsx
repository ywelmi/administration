import { Card, Col, TabContent } from "reactstrap";
import EmailHeader from "./EmailHeader/EmailHeader";
import ComposeEmailModal from "./ComposeEmailModal/ComposeEmailModal";
import SentContent from "./SentContent/SentContent";
import InboxContent from "./InboxContent/InboxContent";
import StarredContent from "./StarredContent/StarredContent";
import DraftContent from "./DraftContent/DraftContent";
import TrashContent from "./TrashContent/TrashContent";
import WorkContent from "./WorkContent/WorkContent";
import PrivateContent from "./PrivateContent/PrivateContent";
import SupportContent from "./SupportContent/SupportContent";
import AddLabelModal from "./AddLabelModal/AddLabelModal";
import InterviewMail from "./InterviewMail/InterviewMail";
import { useAppSelector } from "../../../../ReduxToolkit/Hooks";
import { LetterBoxNavContentType } from "../../../../Types/Application/LetterBox/LetterBox";

const EmailRightSide: React.FC<LetterBoxNavContentType> = ({navId}) => {
  const {interviewEmail} = useAppSelector((state)=>state.letterBox)
  return (
    <Col xxl="9" xl="8" className="box-col-12">
      <div className="email-right-aside">
        <Card className={`email-body email-list ${interviewEmail ? "hide" : "show"}`}>
          <ComposeEmailModal />
          <EmailHeader />
          <TabContent id="email-pills-tabContent" activeTab={navId}>
            <InboxContent />
            <SentContent />
            <StarredContent />
            <DraftContent />
            <TrashContent />
            <WorkContent />
            <PrivateContent />
            <SupportContent />
            <AddLabelModal />
          </TabContent>
        </Card>
        <InterviewMail />
      </div>
    </Col>
  );
};

export default EmailRightSide;

import { TabPane } from "reactstrap";
import { LI, UL } from "../../../../../AbstractElements";
import { useAppSelector } from "../../../../../ReduxToolkit/Hooks";
import InboxEmailContent from "./InboxEmailContent";
import MailPagination from "./MailPagination";

const InboxContent = () => {
  const {page, inboxEmail } = useAppSelector((state) => state.letterBox);
  return (
    <TabPane tabId="1" >
      <div className="mail-body-wrapper">
        <UL className="simple-list">
          {inboxEmail.map((data,i)=>(
            <LI className={`inbox-data ${page ? i < 7 ? "hidden" : "" : i < 7 ? "" : "hidden" }`}  key={i}>
              <InboxEmailContent data={data} i={i}/> 
            </LI>
          ))}
        </UL>
      </div>
      <MailPagination />
    </TabPane>
  );
};

export default InboxContent;

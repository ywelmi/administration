import { LI, UL } from "../../../../../AbstractElements";
import { supportEmailData } from "../../../../../Data/Application/LetterBox/LetterBox";
import UserEmailContent from "./UserEmailContent";
import { TabPane } from "reactstrap";

const SupportContent = () => {
  return (
    <TabPane tabId="8" >
      <div className="mail-body-wrapper">
        <UL className="simple-list">
          {supportEmailData.map((data, i) => (
            <LI className="inbox-data" key={i}>
              <UserEmailContent data={data} i={i}/> 
            </LI>
          ))}
        </UL>
      </div>
    </TabPane>
  );
};

export default SupportContent;

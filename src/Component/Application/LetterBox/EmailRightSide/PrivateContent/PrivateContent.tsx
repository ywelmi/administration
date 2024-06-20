import { LI, UL } from "../../../../../AbstractElements";
import { privateEmailData } from "../../../../../Data/Application/LetterBox/LetterBox";
import PrivateEmailContent from "./PrivateEmailContent";
import { TabPane } from "reactstrap";

const PrivateContent = () => {
  return (
    <TabPane tabId="7">
      <div className="mail-body-wrapper">
        <UL className="simple-list">
          {privateEmailData.map((data,i)=>(
            <LI className="inbox-data" key={i}>
              <PrivateEmailContent data={data} i={i}/> 
            </LI>
          ))}
        </UL>
      </div>
    </TabPane>
  );
};

export default PrivateContent;

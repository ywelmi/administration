import { TabPane } from "reactstrap";
import { LI, UL } from "../../../../../AbstractElements";
import { trashEmailData } from "../../../../../Data/Application/LetterBox/LetterBox";
import TrashEmailContent from "./TrashEmailContent";

const TrashContent = () => {
  return (
    <TabPane tabId="5">
      <div className="mail-body-wrapper">
        <UL className="simple-list">
          {trashEmailData.map((data,i)=>(
            <LI className="inbox-data" key={i}>
              <TrashEmailContent data={data} i={i}/> 
            </LI>
          ))}
        </UL>
      </div>
    </TabPane>
  );
};

export default TrashContent;

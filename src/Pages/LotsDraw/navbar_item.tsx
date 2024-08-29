import { TabContent, TabContentProps, TabPane } from "reactstrap";

import { PageLotsDraw } from "./ListLotsDraw";
import { PageMartialArtMilitia } from "../MartialArtMilitia/MartialArtMilitia";
import { PageUpdateLotsDrawUnit } from "./UpdateLotsdrawUnit";
import { PageUpdateLotsdrawTicket } from "./UpdateLotsdrawTicket";
import { PageUpdateAtheleTicket } from "./UpdateAtheleTicket";
import { LotsDrawSubmitResultForm } from "../LotsDrawSubmit/LotsDrawSubmitResultAtheleForm";
import { PageUpdateResult } from "./UpdateResult";
import { PageExportContentReport } from "./ExportContentReport";

const LotsdrawTabs: React.FC<TabContentProps> = ({ basicTab, setActiveTab }) => {
    return (
        <TabContent activeTab={basicTab} className="tab-content">
            <TabPane tabId="1">
                <PageUpdateLotsDrawUnit />
            </TabPane>
            <TabPane tabId="2">
                <PageUpdateLotsdrawTicket />
            </TabPane>
            <TabPane tabId="3">
                <PageUpdateAtheleTicket />
            </TabPane>
            <TabPane tabId="4">
                <PageExportContentReport />
            </TabPane>
            <TabPane tabId="5">
                <PageUpdateResult />
            </TabPane>
        </TabContent>
    );
};

export default LotsdrawTabs;

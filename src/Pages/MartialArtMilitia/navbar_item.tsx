import { TabContent, TabContentProps, TabPane } from "reactstrap";

import { PageUpdateResult } from "./UpdateResult";
import { PageUpdateLotsDrawUnit } from "./UpdateLotsdrawUnit";
import { MartialArtMilitia } from "./MartialArtMilitia";

const LotsdrawTabs: React.FC<TabContentProps> = ({ basicTab, setActiveTab }) => {
    return (
        <TabContent activeTab={basicTab} className="tab-content">
            <TabPane tabId="1">
                <PageUpdateLotsDrawUnit />
            </TabPane>
            <TabPane tabId="2">
                <MartialArtMilitia />
            </TabPane>
            <TabPane tabId="5">
                <PageUpdateResult />
            </TabPane>
        </TabContent>
    );
};

export default LotsdrawTabs;

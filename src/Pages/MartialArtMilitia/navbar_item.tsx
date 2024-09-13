import { TabContent, TabContentProps, TabPane } from "reactstrap";

import { PageUpdateLotsDrawUnit } from "./UpdateLotsdrawUnit";
import { MartialArtMilitia } from "./MartialArtMilitia";
import { PageUpdateResultMartial } from "./UpdateResultMartial";

const LotsdrawTabs: React.FC<TabContentProps> = ({ basicTab, setActiveTab }) => {
    return (
        <TabContent activeTab={basicTab} className="tab-content">
            <TabPane tabId="1">
                <MartialArtMilitia />
            </TabPane>
            <TabPane tabId="2">
                <PageUpdateLotsDrawUnit />
            </TabPane>
            <TabPane tabId="5">
                <PageUpdateResultMartial />
            </TabPane>
        </TabContent>
    );
};

export default LotsdrawTabs;

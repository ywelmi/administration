import { useState } from "react";
import {Card,CardBody,CardHeader,Col,Nav,NavItem,NavLink} from "reactstrap";
import {Href,IOTDeveloper,JustifyTab,UxDesigner,WebDesigner} from "../../../../utils/Constant";
import { justifyTabsData } from "../../../../Data/Ui-Kits/BootstrapTabs/BootstrapTabs";
import { P } from "../../../../AbstractElements";
import JustifyTabContent from "./JustifyTabContent";
import CardHeaderCommon from "../../CardHeaderCommon/CardHeaderCommon";

const JustifyTabs = () => {
  const [basicTab, setBasicTab] = useState<string>("2");
  return (
    <Col xxl="6">
      <Card>
        <CardHeaderCommon title={JustifyTab} span={justifyTabsData} />
        <CardBody>
          <CardHeader className="d-flex justify-content-between align-items-center flex-wrap gap-2 pb-2 p-0">
            <P>
              <em className="txt-danger">{"Riho Profiles For New Employees:"}</em>
            </P>
            <Nav pills className="nav-warning">
              <NavItem>
                <NavLink
                  href={Href}
                  className={basicTab === "1" ? "active" : ""}
                  onClick={() => setBasicTab("1")}
                >
                  {WebDesigner}
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  href={Href}
                  className={basicTab === "2" ? "active" : ""}
                  onClick={() => setBasicTab("2")}
                >
                  {UxDesigner}
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  href={Href}
                  className={basicTab === "3" ? "active" : ""}
                  onClick={() => setBasicTab("3")}
                >
                  {IOTDeveloper}
                </NavLink>
              </NavItem>
            </Nav>
          </CardHeader>
          <JustifyTabContent basicTab={basicTab} />
        </CardBody>
      </Card>
    </Col>
  );
};

export default JustifyTabs;

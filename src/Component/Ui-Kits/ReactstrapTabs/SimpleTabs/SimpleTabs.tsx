import { useState } from "react";
import { Card, CardBody, Col, Nav, NavItem, NavLink } from "reactstrap";
import {Contact, Home,Href,Profile,SimpleTab} from "../../../../utils/Constant";
import { tabsData } from "../../../../Data/Ui-Kits/BootstrapTabs/BootstrapTabs";
import SimpleTabContent from "./SimpleTabContent";
import CardHeaderCommon from "../../CardHeaderCommon/CardHeaderCommon";

const SimpleTabs = () => {
  const [basicTab, setBasicTab] = useState<string>("2");
  return (
    <Col sm="12" xl="6">
      <Card>
        <CardHeaderCommon title={SimpleTab} span={tabsData} />
        <CardBody>
          <Nav tabs className="simple-wrapper">
            <NavItem>
              <NavLink
                href={Href}
                className={`txt-primary ${basicTab === "1" ? "active" : ""}`}
                onClick={() => setBasicTab("1")}
              >
                {Home}
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                href={Href}
                className={`txt-primary ${basicTab === "2" ? "active" : ""}`}
                onClick={() => setBasicTab("2")}
              >
                {Profile}
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                href={Href}
                className={`txt-primary ${basicTab === "3" ? "active" : ""}`}
                onClick={() => setBasicTab("3")}
              >
                {Contact}
              </NavLink>
            </NavItem>
          </Nav>
          <SimpleTabContent basicTab={basicTab} />
        </CardBody>
      </Card>
    </Col>
  );
};

export default SimpleTabs;
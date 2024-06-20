import { useState } from "react";
import { Card, CardBody, Col, Nav, NavItem, NavLink } from "reactstrap";
import { BorderTab, Contact, Home, Href, Inbox } from "../../../../utils/Constant";
import { borderTabData } from "../../../../Data/Ui-Kits/BootstrapTabs/BootstrapTabs";
import BorderTabContent from "./BorderTabContent";
import CardHeaderCommon from "../../CardHeaderCommon/CardHeaderCommon";

const BorderTabs = () => {
  const [basicTab, setBasicTab] = useState<string>("2");
  return (
    <Col xxl="6">
      <Card>
        <CardHeaderCommon title={BorderTab} span={borderTabData} />
        <CardBody>
          <Nav tabs className="border-tab mb-0" id="bottom-tab">
            <NavItem>
              <NavLink
                href={Href}
                className={`nav-border txt-info tab-info pt-0 ${basicTab === "1" ? "active" : ""}`}
                onClick={() => setBasicTab("1")}
              >
                <i className="icofont icofont-ui-home"></i>
                {Home}
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                href={Href}
                className={`nav-border txt-info tab-info ${basicTab === "2" ? "active" : ""}`}
                onClick={() => setBasicTab("2")}
              >
                <i className="icofont icofont-ui-message"></i>
                {Inbox}
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                href={Href}
                className={`nav-border txt-info tab-info ${basicTab === "3" ? "active" : ""}`}
                onClick={() => setBasicTab("3")}
              >
                <i className="icofont icofont-man-in-glasses"></i>
                {Contact}
              </NavLink>
            </NavItem>
          </Nav>
          <BorderTabContent basicTab={basicTab} />
        </CardBody>
      </Card>
    </Col>
  );
};

export default BorderTabs;
import { useState } from "react";
import { Card, CardBody, Col, Nav, NavLink, Row } from "reactstrap";
import {Components,Home,Href,PageTab,Settings,VerticalTab} from "../../../../utils/Constant";
import { verticalTabData } from "../../../../Data/Ui-Kits/BootstrapTabs/BootstrapTabs";
import VerticalTabContent from "./VerticalTabContent";
import CardHeaderCommon from "../../CardHeaderCommon/CardHeaderCommon";

const VerticalTabs = () => {
  const [basicTab, setBasicTab] = useState<string>("2");
  return (
    <Col sm="12" xxl="6">
      <Card className="height-equal">
        <CardHeaderCommon title={VerticalTab} span={verticalTabData} />
        <CardBody>
          <Row>
            <Col md="4" xs="12">
              <Nav pills className="flex-column nav-success">
                <NavLink
                  href={Href}
                  className={basicTab === "1" ? "active" : ""}
                  onClick={() => setBasicTab("1")}
                >
                  {Home}
                </NavLink>
                <NavLink
                  hre={Href}
                  className={basicTab === "2" ? "active" : ""}
                  onClick={() => setBasicTab("2")}
                >
                  {Components}
                </NavLink>
                <NavLink
                  hre={Href}
                  className={basicTab === "3" ? "active" : ""}
                  onClick={() => setBasicTab("3")}
                >
                  {PageTab}
                </NavLink>
                <NavLink
                  hre={Href}
                  className={basicTab === "4" ? "active" : ""}
                  onClick={() => setBasicTab("4")}
                >
                  {Settings}
                </NavLink>
              </Nav>
            </Col>
            <VerticalTabContent basicTab={basicTab} />
          </Row>
        </CardBody>
      </Card>
    </Col>
  );
};

export default VerticalTabs;

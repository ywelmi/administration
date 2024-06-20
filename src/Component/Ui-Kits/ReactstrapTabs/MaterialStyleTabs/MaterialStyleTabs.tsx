import { useState } from "react";
import { Card, CardBody, Col, Nav, NavItem, NavLink } from "reactstrap";
import {Description,Href,MaterialStyleTab,Review,User} from "../../../../utils/Constant";
import MaterialTabContent from "./MaterialTabContent";
import { materialStyleData } from "../../../../Data/Ui-Kits/BootstrapTabs/BootstrapTabs";
import CardHeaderCommon from "../../CardHeaderCommon/CardHeaderCommon";

const MaterialStyleTabs = () => {
  const [basicTab, setBasicTab] = useState<string>("1");
  return (
    <Col xxl="6">
      <Card>
        <CardHeaderCommon title={MaterialStyleTab} span={materialStyleData} />
        <CardBody>
          <Nav tabs className="border-tab border-0 mb-0 nav-danger" >
            <NavItem>
              <NavLink
                href={Href}
                className={`nav-border pt-0 txt-danger nav-danger ${
                  basicTab === "1" ? "active" : ""
                }`}
                onClick={() => setBasicTab("1")}
              >
                <i className="icofont icofont-man-in-glasses"></i>
                {User}
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                href={Href}
                className={`nav-border txt-danger nav-danger ${
                  basicTab === "2" ? "active" : ""
                }`}
                onClick={() => setBasicTab("2")}
              >
                <i className="icofont icofont-file-document"></i>
                {Description}
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                href={Href}
                className={`nav-border txt-danger nav-danger ${
                  basicTab === "3" ? "active" : ""
                }`}
                onClick={() => setBasicTab("3")}
              >
                <i className="icofont icofont-star"></i>
                {Review}
              </NavLink>
            </NavItem>
          </Nav>
          <MaterialTabContent basicTab={basicTab} />
        </CardBody>
      </Card>
    </Col>
  );
};

export default MaterialStyleTabs;
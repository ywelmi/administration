import { CardFooter, Nav, NavItem, NavLink, TabContent, TabPane } from "reactstrap";
import { CheckAll, Href } from "../../../../utils/Constant";
import { notificationTab } from "../../../../Data/Layout/Header";
import { useState } from "react";
import FirstTabContent from "./FirstTabContent";
import SecondTabContent from "./SecondTabContent";
import ThirdTabContent from "./ThirdTabContent";
import { Link } from "react-router-dom";
import { Btn } from "../../../../AbstractElements";

const NotificationContent = () => {
  const [tabIs,setTabId] = useState("1")
  return (
    <div className="notitications-bar">
      <Nav pills color="primary" className="p-0" tabs>
        {notificationTab.map((data,i)=>(
          <NavItem className="p-0" key={i}>
            <NavLink className={data.id === tabIs ?"active" : "" }  id={data.id} href={Href} onClick={()=>setTabId(data.id)}>
              {data.title}
            </NavLink>
          </NavItem>
        ))}
      </Nav>
      <TabContent activeTab={tabIs} >
        <TabPane tabId={"1"}>
          <FirstTabContent />
        </TabPane>
        <TabPane tabId={"2"}>
          <SecondTabContent />
        </TabPane>
        <TabPane tabId={"3"}>
          <ThirdTabContent />
        </TabPane>
        <CardFooter className="pb-0 pr-0 pl-0">
          <div className="text-center">
            <Link className="f-w-700" to={Href}>
              <Btn color="primary">{CheckAll}</Btn>
            </Link>
          </div>
        </CardFooter>
      </TabContent>
    </div>
  );
};

export default NotificationContent;

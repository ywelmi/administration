import { Nav, NavItem, NavLink, TabContent, TabPane } from "reactstrap";
import { ChatsHeading, ContactsHeading, Href, RecentChats } from "../../../../../utils/Constant";
import ChatUserProfile from "./ChatUserProfile";
import PlusButton from "./PlusButton";
import SearchContacts from "./SearchContacts";
import ContactWrapper from "./ContactWrapper";
import { useState } from "react";

const ChatOptionTab = () => {
  const [tabNumber , setTabNumber] = useState<string>("1")
  return (
    <div className="advance-options">
      <Nav className="border-tab" tabs>
        <NavItem>
          <NavLink active={tabNumber === "1" ? true : false} onClick={()=>setTabNumber("1")} className="f-w-600" href={Href}>
            {ChatsHeading}
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink active={tabNumber === "2" ? true : false} onClick={()=>setTabNumber("2")} className="f-w-600" href={Href}>
            {ContactsHeading}
          </NavLink>
        </NavItem>
      </Nav>
      <TabContent activeTab={tabNumber}>
        <TabPane tabId="1">
          <PlusButton title={RecentChats} />
          <ChatUserProfile />
        </TabPane>
        <TabPane tabId="2">
          <PlusButton title={ContactsHeading} /> 
          <SearchContacts />
          <ContactWrapper />
        </TabPane>
      </TabContent>
    </div>
  );
};

export default ChatOptionTab;

import { Nav, NavItem, NavLink } from "reactstrap";
import { emailNavTab } from "../../../../../Data/Application/LetterBox/LetterBox";
import { Href } from "../../../../../utils/Constant";
import { SVG } from "../../../../../AbstractElements";
import { useState } from "react";

const EmailNavTab = () => {
  const [navId,setNavId] = useState("pills-important-tab")
  return (
    <Nav className="email-tabs" id="email-content-tab">
      {emailNavTab.map((data, i) => (
        <NavItem key={i}>
          <NavLink className={navId === data.id ? "active" : ""} id={data.id} href={Href} onClick={()=>setNavId(data.id)} >
            <SVG className="" iconId={data.icon} />
            <span>{data.title} </span>
          </NavLink>
        </NavItem>
      ))}
    </Nav>
  );
};

export default EmailNavTab;

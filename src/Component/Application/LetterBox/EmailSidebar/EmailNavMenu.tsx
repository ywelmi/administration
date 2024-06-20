import { Nav, NavItem, NavLink } from "reactstrap";
import { Badges, SVG } from "../../../../AbstractElements";
import { letterBoxSidebar } from "../../../../Data/Application/LetterBox/LetterBox";
import { useAppDispatch, useAppSelector } from "../../../../ReduxToolkit/Hooks";
import AddLabel from "./AddLabel";
import { Href, Inbox } from "../../../../utils/Constant";
import { LetterBoxNavType } from "../../../../Types/Application/LetterBox/LetterBox";

const EmailNavMenu: React.FC<LetterBoxNavType> = ({ navId, setNavId }) => {
  const {inboxEmail} = useAppSelector((state)=>state.letterBox)
  let starBadges = inboxEmail.filter((data)=> data.star === true && 1)
  const dispatch = useAppDispatch()
  return (
    <Nav pills tabs className="main-menu email-category border-bottom-0">
      {letterBoxSidebar.map((data, i) => (
        <NavItem key={i}>
          <NavLink className={navId === data.id ? "active" : ""} id={data.id} onClick={()=>setNavId(data.id)} href={Href}>
            <SVG className={`stroke-icon ${data.color ? `stroke-${data.color}` : ""}`} iconId={data.icon} />
            <div>
              {data.title}
              {data.badge && <Badges color="">{data.title === Inbox ? inboxEmail.length : starBadges.length}</Badges>}
            </div>
          </NavLink>
        </NavItem>
      ))}
      <AddLabel />
    </Nav>
  );
};

export default EmailNavMenu;

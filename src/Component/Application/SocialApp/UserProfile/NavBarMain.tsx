import { Fragment, useState } from 'react'
import { Link } from 'react-router-dom';
import { Nav, NavItem, NavLink } from 'reactstrap';
import { Href } from '../../../../utils/Constant';
import { PropsType } from '../../../../Types/Application/SocialApp/SocialApp';
import { navBarData } from '../../../../Data/Application/SocialApp/SocialApp';

const NavBarMain = ({ callback }: PropsType) => {
  const [activeTab, setActiveTab] = useState(1);
  return (
    <Nav tabs className="border-tab tabs-scoial">
      {navBarData.map((data, index) => (
        <Fragment key={index}>
          {data.userProfile ? (
          <NavItem>
            <div className="user-designation" />
            <div className="title">
              <Link to={Href}>ElANA</Link>
            </div>
            <div className="desc mt-2">general manager</div>
          </NavItem>
          ) : (
          <NavItem>
            <NavLink
              className={activeTab === data.id ? "active" : ""}
              onClick={() => {
                setActiveTab(data.id);
                callback(data.id);
              }}
              href={Href}
            >
              {data.tittle}
            </NavLink>
          </NavItem>
          )}
        </Fragment>
      ))}
    </Nav>
  )
}

export default NavBarMain
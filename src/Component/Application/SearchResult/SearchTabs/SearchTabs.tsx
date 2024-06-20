import { useState } from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap'
import { navData } from '../../../../Data/Application/SearchResult/SearchResult';
import { SearchTabsPropsType } from '../../../../Types/Application/SearchResult/SearchResult';
import { Href } from '../../../../utils/Constant';

const SearchTabs = ({callbackActive, activeTabValue}: SearchTabsPropsType) => {
  const [activeTab, setActiveTab] = useState(activeTabValue);
  const handleTab = (id: number | undefined) => {
    if (id !== undefined) {
      setActiveTab(id);
      callbackActive(id);
    }
  };
  return (
    <div className="text-center">
      <Nav tabs className="search-list">
        {navData.map((data, index) => (
          <NavItem key={index} className={data.color !== "" ? `bg-light-${data.color}` : "" }>
            <NavLink
              className={`${activeTab === index + 1 ? "active" : ""} ${data.color !== "" ? `txt-${data.color}` : "" }`}
              onClick={() => handleTab(data.id)}
              href={Href}
            >
              {data.icon && <i className={`icon-${data.icon}`} />}    
              {data.tittle}
            </NavLink>
          </NavItem>
        ))}
      </Nav>
    </div>
  )
}

export default SearchTabs
import React from 'react'
import { BusinessFormCommonProps } from '../../../../../Types/Forms/FormsLayout/FormsWizardTwo';
import { Nav, NavItem, NavLink } from 'reactstrap';
import { H6 } from '../../../../../AbstractElements';
import { businessVerticalData } from '../../../../../Data/Forms/FormsLayout/FormsWizardTwo/FormsWizardTwo';
import { Href } from '../../../../../utils/Constant';

const NavComponent:React.FC<BusinessFormCommonProps> = ({ callbackActive, activeTab }) => {
  const handleTab = (id: number | undefined) => {
    if (id !== undefined) callbackActive(id);
  };

  return (
    <Nav className="nav-pills horizontal-options">
      {businessVerticalData.map((data, index) => (
        <NavItem key={index}>
          <NavLink className={`${activeTab === index + 1 ? "active" : ""}`} onClick={() => handleTab(data.activeTab)} href={Href}>
            <div className="horizontal-wizard">
              <div className="stroke-icon-wizard">
                <span>{index + 1}</span>
              </div>
              <div className="horizontal-wizard-content business-wizard">
                <H6>{data.tittle}</H6>
              </div>
            </div>
          </NavLink>
        </NavItem>
      ))}
    </Nav>
  );
};

export default NavComponent
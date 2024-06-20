import { Nav, NavItem, NavLink } from 'reactstrap'
import { shippingNavData } from '../../../../../Data/Forms/FormsLayout/FormWizardOne/FormWizardOne'
import { H6 } from '../../../../../AbstractElements'
import { NavComponentProp } from '../../../../../Types/Forms/FormsLayout/FormWizardOne';
import { Href } from '../../../../../utils/Constant';

const NavComponent:React.FC<NavComponentProp> = ({ callbackActive, activeTab })  => {
    const handleTab = (id: number | undefined) => {
      if (id !== undefined) {
        callbackActive(id);
      }
    };
  return (
    <Nav className="nav-pills horizontal-options shipping-options">
      {shippingNavData.map((data, index) => (
        <NavItem className="w-100" key={index}>
          <NavLink
            className={`b-r-0 ${activeTab === index + 1 ? "active" : ""}`}
            onClick={() => handleTab(data.activeTab)}
            href={Href}
          >
            <div className="cart-options">
              <div className="stroke-icon-wizard">
                <i className={`fa ${data.iconClassName}`} />
              </div>
              <div className="cart-options-content">
                <H6>{data.tittle}</H6>
              </div>
            </div>
          </NavLink>
        </NavItem>
      ))}
    </Nav>
  )
}

export default NavComponent
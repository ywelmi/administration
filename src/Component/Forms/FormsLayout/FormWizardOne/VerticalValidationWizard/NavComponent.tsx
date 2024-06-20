import { Nav, NavItem, NavLink } from 'reactstrap'
import { verticalWizardTabData } from '../../../../../Data/Forms/FormsLayout/FormWizardOne/FormWizardOne'
import { H6, P } from '../../../../../AbstractElements'
import { VerticalFormPropsType } from '../../../../../Types/Forms/FormsLayout/FormWizardOne'
import { Href } from '../../../../../utils/Constant'

const NavComponent:React.FC<VerticalFormPropsType> = ({ callbackActive,activeTab }) => {
  return (
    <Nav className="flex-column header-vertical-wizard">
      {verticalWizardTabData.map((data, index) => (
        <NavItem key={index}>
          <NavLink className={activeTab === index+1 ? "active" : ""} onClick={() => {callbackActive(index + 1)}} href={Href}>
            <div className="vertical-wizard">
              <div className="stroke-icon-wizard">
                <i className={`fa ${data.iconClassName}`} />
              </div>
              <div className="vertical-wizard-content">
                <H6>{data.tittle}</H6>
                <P>{data.tittleInforMation}</P>
              </div>
            </div>
          </NavLink>
      </NavItem>
      ))}
    </Nav>
  )
}

export default NavComponent
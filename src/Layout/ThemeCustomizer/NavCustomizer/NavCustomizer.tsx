import { Nav, NavLink } from 'reactstrap'
import { Href, QuickOption } from '../../../utils/Constant'
import NavLinks from './NavLinks'
import { Image } from '../../../AbstractElements'
import { dynamicImage } from '../../../Service'
import { NavCustomizerType } from '../../../Types/Layout/ThemeCustomizerTypes'

const NavCustomizer = ({ callbackNav, selected }: NavCustomizerType) => {
  return (
    <Nav className="flex-column nac-pills">
      <NavLink
        className={`${selected === "sidebar-type" ? "active" : ""}` }
        onClick={() => callbackNav("sidebar-type", true)}
        href={Href}>
        <div className="settings">
          <Image src={dynamicImage(`customizer/1.png`)} alt="icons" />
        </div>
        <span>{QuickOption}</span>
      </NavLink>
      <NavLinks />
    </Nav>
  )
}

export default NavCustomizer
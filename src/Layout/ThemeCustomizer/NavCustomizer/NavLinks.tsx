import { Image } from '../../../AbstractElements'
import { navLinkList } from '../../../Data/Layout/ThemeCustomizerData'
import { dynamicImage } from '../../../Service'
import { NavLink } from 'reactstrap'

const NavLinks = () => {
  return (
    <>
      {navLinkList &&
        navLinkList.map((item, index) => (
          <NavLink key={index} href={item.path} target="_blank">
            <div>
              <Image src={dynamicImage(`customizer/${item.image}`)} className={`img-fluid ${item.class}`} alt="icons" />
            </div>
            <span>{item.name}</span>
          </NavLink>
        ))}
    </>
  )
}

export default NavLinks
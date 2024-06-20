import { Link } from "react-router-dom";
import { dynamicImage } from "../../../Service";
import { FeatherIcons, Image } from "../../../AbstractElements";
import { useAppDispatch, useAppSelector } from "../../../ReduxToolkit/Hooks";
import { setToggleSidebar } from "../../../ReduxToolkit/Reducer/LayoutSlice";

const HeaderLogo = () => {
  const dispatch = useAppDispatch();
  const {toggleSidebar} = useAppSelector((state)=>state.layout)
  return (
    <div className="header-logo-wrapper col-auto p-0">
      <div className="logo-wrapper">
        <Link to={`${process.env.PUBLIC_URL}/dashboard/default`}>
          <Image className="img-fluid for-dark" src={dynamicImage("logo/logo.png")} alt="logoLight" />
          <Image className="img-fluid for-light" src={dynamicImage("logo/logo_dark.png")} alt="logoLight" />
        </Link>
      </div>
      <div className="toggle-sidebar">
        <FeatherIcons className="status_toggle middle sidebar-toggle" iconName="AlignCenter"  onClick={()=>dispatch(setToggleSidebar(!toggleSidebar))} />
      </div>
    </div>
  );
};

export default HeaderLogo;

import { Link } from "react-router-dom";
import { Image } from "../../AbstractElements";
import { dynamicImage } from "../../Service";
import { useLayoutStore } from "../../store/layout";
import { useThemeStore } from "../../store/theme";

const LogoWrapper = () => {
  const { toggleSidebar, setToggleSidebar, handleResponsiveToggle } =
    useLayoutStore();
  const { sidebarIconType } = useThemeStore();

  return (
    <>
      <div className="logo-wrapper m-b-30 p-0 d-flex justify-content-center">
        <Link to={`/sport/list`} className="d-inline-block ">
          <Image
            className="img-fluid "
            src={dynamicImage("/assets/images/logo_trang.png")}
            height={70}
            width={140}
            alt="logo"
          />
        </Link>
        <div className="back-btn" onClick={() => handleResponsiveToggle()}>
          <i className="fa fa-angle-left"></i>
        </div>
        {/* <div className="toggle-sidebar" onClick={() => setToggleSidebar(!toggleSidebar)}>
                    <FeatherIcons className="status_toggle middle sidebar-toggle" iconName="Grid" />
                </div> */}
      </div>
      <div className="logo-icon-wrapper">
        <Link to={`/dashboard`}>
          <Image
            className="img-fluid"
            src={dynamicImage("logo/logo-icon.png")}
            alt="logo"
          />
        </Link>
      </div>
    </>
  );
};

export default LogoWrapper;

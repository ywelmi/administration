import { Link } from "react-router-dom";
import { FeatherIcons, Image, SVG } from "../../AbstractElements";
import { dynamicImage } from "../../Service";
import { useThemeStore } from "../../store/theme";
import { useLayoutStore } from "../../store/layout";

const LogoWrapper = () => {
  const { toggleSidebar, setToggleSidebar, handleResponsiveToggle } =
    useLayoutStore();
  const { sidebarIconType } = useThemeStore();

  return (
    <>
      <div className="logo-wrapper">
        <Link
          to={`/dashboard`}
          className="d-inline-block"
        >
          <Image
            className="img-fluid"
            src={dynamicImage("logo/logo.png")}
            alt="logo"
          />
        </Link>
        <div
          className="back-btn"
          onClick={() => (handleResponsiveToggle())}
        >
          <i className="fa fa-angle-left"></i>
        </div>
        <div
          className="toggle-sidebar"
          onClick={() => (setToggleSidebar(!toggleSidebar))}
        >
          <FeatherIcons
            className="status_toggle middle sidebar-toggle"
            iconName="Grid"
          />
        </div>
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


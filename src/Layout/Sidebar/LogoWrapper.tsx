import { Link } from "react-router-dom";
import { dynamicImage } from "../../Service";
import { useLayoutStore } from "../../store/layout";

const LogoWrapper = () => {
  const { handleResponsiveToggle } = useLayoutStore();
  // const { sidebarIconType } = useThemeStore();

  return (
    <>
      <div className="logo-wrapper m-b-30 p-0 d-flex justify-content-center">
        <Link to={`/sport/list`} className="d-inline-block ">
          <img
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
      </div>
      <div className="logo-icon-wrapper">
        <Link to={`/dashboard`}>
          <img
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

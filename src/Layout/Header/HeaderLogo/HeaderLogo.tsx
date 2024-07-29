import { Link } from "react-router-dom";
import { dynamicImage } from "../../../Service";
import { FeatherIcons, Image } from "../../../AbstractElements";
import { useLayoutStore } from "../../../store/layout";

const HeaderLogo = () => {
    const { setToggleSidebar, toggleSidebar } = useLayoutStore();
    return (
        <div className="header-logo-wrapper col-auto p-0">
            <div className="logo-wrapper">
                <Link to={`${import.meta.env.VITE_PUBLIC_URL}/dashboard`}>
                    <Image
                        className="img-fluid for-dark"
                        src={dynamicImage("assets/images/logo.png")}
                        alt="logoLight"
                    />
                    <Image className="img-fluid for-light" src={dynamicImage("logo/logo_dark.png")} alt="logoLight" />
                </Link>
            </div>
            <div className="toggle-sidebar">
                <FeatherIcons
                    className="status_toggle middle sidebar-toggle"
                    iconName="AlignCenter"
                    onClick={() => setToggleSidebar(!toggleSidebar)}
                />
            </div>
        </div>
    );
};

export default HeaderLogo;

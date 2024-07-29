import { Link } from "react-router-dom";
import { H6, Image, LI, UL } from "../../AbstractElements";
import { dynamicImage } from "../../Service";
import { Back, Pinned } from "../../utils/Constant";
import SimpleBar from "simplebar-react";
import LogoWrapper from "./LogoWrapper";
import SidebarMenuList from "./SidebarMenuList";
import { ArrowLeft, ArrowRight } from "react-feather";
import { useLayoutStore } from "../../store/layout";
import { useThemeStore } from "../../store/theme";

const Sidebar = () => {
    const { pinedMenus, margin, toggleSidebar, scrollToLeft, scrollToRight } = useLayoutStore();
    const { layout } = useThemeStore();
    return (
        <div className={`sidebar-wrapper ${toggleSidebar ? "close_icon" : ""}`} id="sidebarwrappers">
            <LogoWrapper />
            <nav className="sidebar-main">
                <div className={`left-arrow ${margin === 0 ? "disabled" : ""}`} onClick={() => scrollToLeft()}>
                    <ArrowLeft />
                </div>
                <div
                    id="sidebar-menu"
                    style={{
                        marginLeft: layout === "horizontal-wrapper" ? `${margin}px` : "0px",
                    }}
                >
                    <UL className="sidebar-links simple-list" id="simple-bar">
                        <SimpleBar style={{ width: "80px", height: "350px" }}>
                            <LI className="back-btn">
                                <Link to={"/dashboard"}>
                                    <Image
                                        className="img-fluid"
                                        src={dynamicImage("/assets/images/logo.png")}
                                        alt="logo"
                                    />
                                </Link>
                                <div className="mobile-back text-end ">
                                    <span>{Back}</span>
                                    <i className="fa fa-angle-right ps-2" aria-hidden="true"></i>
                                </div>
                            </LI>
                            <LI className={`pin-title sidebar-main-title ${pinedMenus.length > 1 ? "show" : ""} `}>
                                <div>
                                    <H6>{Pinned}</H6>
                                </div>
                            </LI>
                            <SidebarMenuList />
                        </SimpleBar>
                    </UL>
                </div>
                <div className={`right-arrow ${margin === -3500 ? "disabled" : ""}`} onClick={() => scrollToRight()}>
                    <ArrowRight />
                </div>
            </nav>
        </div>
    );
};

export default Sidebar;

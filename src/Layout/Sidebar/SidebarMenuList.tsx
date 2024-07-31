import { Fragment, useState } from "react";
import { H6, LI } from "../../AbstractElements";
import { useMenuList } from "../../Data/Layout/Sidebar";
import { MenuItem } from "../../Types/Layout/Sidebar";
import MenuLists from "./MenuLists";
import { useLayoutStore } from "../../store/layout";

const SidebarMenuList = () => {
    const [activeMenu, setActiveMenu] = useState<string[]>([]);
    const { pinedMenus } = useLayoutStore();
    const shouldHideMenu = (mainMenu: MenuItem) => {
        return mainMenu?.Items?.map((data) => data.title).every((titles) => pinedMenus.includes(titles || ""));
    };

    const { menuList } = useMenuList();

    return (
        <>
            {menuList &&
                menuList.map((mainMenu: MenuItem, index) => (
                    <Fragment key={index}>
                        <LI className={`sidebar-main-title m-t-30 ${shouldHideMenu(mainMenu) ? "d-none" : ""}`}>
                            <div>
                                <H6 className={mainMenu.lanClass && mainMenu.lanClass}>{mainMenu.title}</H6>
                            </div>
                        </LI>
                        <MenuLists
                            menu={mainMenu.Items}
                            activeMenu={activeMenu}
                            setActiveMenu={setActiveMenu}
                            level={0}
                        />
                    </Fragment>
                ))}
        </>
    );
};

export default SidebarMenuList;

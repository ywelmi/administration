import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../ReduxToolkit/Hooks";
import { Link, useLocation } from "react-router-dom";
import { LI, SVG, UL } from "../../AbstractElements";
import { Href } from "../../utils/Constant";
import { MenuListType, SidebarItemTypes } from "../../Types/Layout/Sidebar";
import { handlePined } from "../../ReduxToolkit/Reducer/LayoutSlice";
import { useTranslation } from "react-i18next";

const MenuLists: React.FC<MenuListType> = ({ menu,setActiveMenu,activeMenu,level,className}) => {
  const { pinedMenu } = useAppSelector((state) => state.layout);
  const { sidebarIconType } = useAppSelector((state) => state.themeCustomizer)
  const location = useLocation();
  const dispatch = useAppDispatch();
  const { t } = useTranslation();
  const ActiveNavLinkUrl = (path?: string) => {
    return location.pathname === path ?  true : "";
  };
  const shouldSetActive = ({ item }: SidebarItemTypes) => {
    var returnValue = false;
    if (item?.path === location.pathname) returnValue = true;
    if (!returnValue && item?.children) {
      item?.children.every((subItem) => {
        returnValue = shouldSetActive({ item: subItem });
        return !returnValue;
      });
    }
    return returnValue;
  };
  const handleClick = ((item: string) => {
    const temp = activeMenu;
    temp[level] = item !== temp[level] ? item : "";
    setActiveMenu([...temp]);
  })
  useEffect(() => {
    menu?.forEach((item: any) => {
      let gotValue = shouldSetActive({ item });
      if (gotValue) {
        let temp = [...activeMenu];
        temp[level] = item.title;
        setActiveMenu(temp);
      }
    });
  }, []);

  return (
    <>
      {menu?.map((item, index) => (
        <LI key={index} className={`${level === 0 ? "sidebar-list" : ""} ${ pinedMenu.includes(item.title || "") ? "pined" : ""}  
          ${(item.children
              ? item.children.map((innerItem) => ActiveNavLinkUrl(innerItem.path)).includes(true)
              : ActiveNavLinkUrl(item.path)) || activeMenu[level] === item.title
              ? "active"
              : ""
          } `}
        >
          {level === 0 && (<i className="fa fa-thumb-tack" onClick={() => dispatch(handlePined(item.title))} ></i>)}
          <Link
            className={`${!className && level !== 2 ? "sidebar-link sidebar-title" : ""} 
            ${(item.children
                ? item.children.map((innerItem) => ActiveNavLinkUrl(innerItem.path)).includes(true)
                : ActiveNavLinkUrl(item.path)) || activeMenu[level] === item.title ? "active" : ""
            }`}
            to={item.path ? item.path : Href }
            onClick={() => handleClick(item.title)}
          >
            {item.icon && ( <SVG className={`${sidebarIconType}-icon`} iconId={`${sidebarIconType}-${item.icon}`} /> )}
            <span className={item.lanClass && item.lanClass}>{t(item.title)}</span>
            {item.children && (activeMenu[level] === item.title ? (
              <div className="according-menu">
                <i className="fa fa-angle-down" />
              </div>
            ) : (
              <div className="according-menu">
                <i className="fa fa-angle-right" />
              </div>
            ))}
          </Link>
          {item.children && (
            <UL className={`simple-list ${ level !== 0 ? "nav-sub-childmenu submenu-content" : "sidebar-submenu " }`}
              style={{
                display: `${
                  (item.children
                    ? item.children.map((innerItem) => ActiveNavLinkUrl(innerItem.path)).includes(true) : ActiveNavLinkUrl(item.path)) || activeMenu[level] === item.title ? "block" : "none"
                }`
              }}
            >
              <MenuLists menu={item.children} activeMenu={activeMenu} setActiveMenu={setActiveMenu} level={level + 1} className="sidebar-submenu" />
            </UL>
          )}
        </LI>
      ))}
    </>
  );
};

export default MenuLists;
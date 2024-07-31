import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { LI, SVG, UL } from "../../AbstractElements";
import { Href } from "../../utils/Constant";
import { MenuListType, SidebarItemTypes } from "../../Types/Layout/Sidebar";
import { useTranslation } from "react-i18next";
import { useLayoutStore } from "../../store/layout";
import { DUnit, DUnitType } from "../../type/enum";
import { useSportStore } from "../../store/sport";

const MenuLists: React.FC<MenuListType> = (
  { menu, setActiveMenu, activeMenu, level, className },
) => {
  const { pinedMenus } = useLayoutStore();
  const location = useLocation();
  const { t } = useTranslation();
  const { updateSportByUnitType } = useSportStore();
  const ActiveNavLinkUrl = (path?: string, title?: string) => {
    return location.pathname === path && title === activeMenu[level]
      ? true
      : "";
  };

  const shouldSetActive = ({ item }: SidebarItemTypes) => {
    const temp = activeMenu;
    var returnValue = false;
    if (item?.path === location.pathname && item.title === temp[level]) {
      returnValue = true;
    }
    if (!returnValue && item?.children) {
      item?.children.every((subItem) => {
        returnValue = shouldSetActive({ item: subItem });
        return !returnValue;
      });
    }
    return returnValue;
  };

  const handleClick = (item: string, unitType?: DUnitType) => {
    const temp = activeMenu;
    temp[level] = item !== temp[level] ? item : "";
    setActiveMenu([...temp]);
    if (unitType) {
      updateSportByUnitType(unitType);
    }
  };

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
        <LI
          key={index}
          className={`${level === 0 ? "sidebar-list" : ""} ${
            pinedMenus.includes(item.title || "") ? "pined" : ""
          }  
          ${
            (item.children
                ? item.children.map((innerItem) =>
                  ActiveNavLinkUrl(innerItem.path, innerItem.title)
                ).includes(true)
                : ActiveNavLinkUrl(item.path, item.title)) ||
              activeMenu[level] === item.title
              ? "active"
              : ""
          } `}
        >
          {/* {level === 0 && <i className="fa fa-thumb-tack" onClick={() => item.title && handlePined(item.title)}></i>} */}
          <Link
            className={`${
              !className && level !== 2 ? "sidebar-link sidebar-title" : ""
            } 
            ${
              (item.children
                  ? item.children.map((innerItem) =>
                    ActiveNavLinkUrl(innerItem.path, innerItem.title)
                  ).includes(true)
                  : ActiveNavLinkUrl(item.path, item.title)) ||
                activeMenu[level] === item.title
                ? "active"
                : ""
            }`}
            to={item.path ? item.path : Href}
            onClick={() =>
              item.title && handleClick(item.title, item?.unitType)}
          >
            {item.icon && (
              // <SVG className={`${sidebarIconType}-icon`} iconId={`${sidebarIconType}-${item.icon}`} />
              <i className={item.icon} style={{ color: "white" }}></i>
            )}
            <span className={item.lanClass && item.lanClass}>
              {item.title && t(item.title)}
            </span>
            <div className="ml-1">
              {item.children &&
                (activeMenu[level] === item.title
                  ? (
                    <div className="according-menu">
                      <i className="fa fa-angle-down" />
                    </div>
                  )
                  : (
                    <div className="according-menu">
                      <i className="fa fa-angle-right" />
                    </div>
                  ))}
            </div>
          </Link>
          {item.children && (
            <UL
              className={`simple-list ${
                level !== 0
                  ? "nav-sub-childmenu submenu-content"
                  : "sidebar-submenu "
              }`}
              style={{
                display: `${
                  (item.children
                      ? item.children
                        .map((innerItem) =>
                          ActiveNavLinkUrl(innerItem.path, innerItem.title)
                        )
                        .includes(true)
                      : ActiveNavLinkUrl(item.path, item.title)) ||
                    activeMenu[level] === item.title
                    ? "block"
                    : "none"
                }`,
              }}
            >
              <MenuLists
                menu={item.children}
                activeMenu={activeMenu}
                setActiveMenu={setActiveMenu}
                level={level + 1}
                className="sidebar-submenu"
              />
            </UL>
          )}
        </LI>
      ))}
    </>
  );
};

export default MenuLists;

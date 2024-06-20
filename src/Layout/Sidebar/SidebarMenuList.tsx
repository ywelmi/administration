import { Fragment, useState } from 'react'
import { useAppSelector } from '../../ReduxToolkit/Hooks';
import { H6, LI } from '../../AbstractElements';
import { MenuList } from '../../Data/Layout/Sidebar';
import { MenuItem } from '../../Types/Layout/Sidebar';
import MenuLists from './MenuLists';
import { useTranslation } from 'react-i18next';

const SidebarMenuList = () => {
    const [activeMenu, setActiveMenu] = useState<string[]>([]);
    const { t } = useTranslation(); 
    const { pinedMenu } = useAppSelector((state) => state.layout);
    const shouldHideMenu = (mainMenu: MenuItem) => {return mainMenu?.Items?.map((data) => data.title).every((titles) =>pinedMenu.includes(titles || ""));};
  
    return (
      <>
        {MenuList &&
          MenuList.map((mainMenu: MenuItem, index) => (
            <Fragment key={index}>
              <LI className={`sidebar-main-title ${shouldHideMenu(mainMenu) ? "d-none" : ""}`}>
                <div>
                  <H6 className={mainMenu.lanClass && mainMenu.lanClass}>{t(mainMenu.title)}</H6>
                </div>
              </LI>
              <MenuLists menu={mainMenu.Items} activeMenu={activeMenu} setActiveMenu={setActiveMenu}  level={0}/>
            </Fragment>
          ))}
      </>
    );
}

export default SidebarMenuList
import StrokeIcon from './StrokeIcon';
import FillIcon from './FillIcon';
import { H5, UL } from '../../../../AbstractElements';
import { useAppDispatch } from '../../../../ReduxToolkit/Hooks';
import { Sidebar_Icon } from '../../../../utils/Constant';
import ConfigDB from '../../../../Config/ThemeConfig';
import { addSidebarIconType } from '../../../../ReduxToolkit/Reducer/ThemeCustomizerSlice';

const SidebarIconType = () => {
  const dispatch = useAppDispatch();
  const sideBarIconType = ConfigDB.data.settings.sidebar.iconType;
  const handleSideBarIconType = (type: string) => {
    dispatch(addSidebarIconType(type));
  };
  return (
    <div>
      <H5>{Sidebar_Icon}</H5>
      <UL className="sidebar-type layout-grid flex-row simple-list">
        <StrokeIcon handleSideBarIconType={handleSideBarIconType} sideBarIconType={sideBarIconType}/>
        <FillIcon handleSideBarIconType={handleSideBarIconType} sideBarIconType={sideBarIconType}/>
      </UL>
    </div>
  );
}

export default SidebarIconType
import ColorComponent from './ColorComponent/ColorComponent'
import ColorDarkLayout from './ColorDarkLayout/ColorDarkLayout'
import ColorLightLayout from './ColorLightLayout/ColorLightLayout'
import LayoutType from './LayoutType/LayoutType'
import MixLayoutComponent from './MixLayoutComponent/MixLayoutComponent'
import SidebarIconType from './SidebarIconType/SidebarIconType'
import SidebarType from './SidebarType/SidebarType'

const SidebarCustomizer = () => {
  return (
    <>
      <LayoutType />
      <SidebarType />
      <SidebarIconType />
      <ColorComponent />
      <ColorLightLayout />
      <ColorDarkLayout />
      <MixLayoutComponent />
    </>
  )
}

export default SidebarCustomizer
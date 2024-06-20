import { TabContent, TabPane } from 'reactstrap'
import TabHeader from './TabHeader'
import SidebarCustomizer from './SidebarCustomizer'
import { TabCustomizerType } from '../../../Types/Layout/ThemeCustomizerTypes'

const TabCustomizer = ({ callbackNav, selected }: TabCustomizerType) => {
  return (
    <TabContent activeTab={selected}>
      <TabHeader callbackNav={callbackNav} />
      <div className="customizer-body custom-scrollbar">
        <TabPane tabId="sidebar-type">
          <SidebarCustomizer />
        </TabPane>
      </div>
    </TabContent>
  )
}

export default TabCustomizer
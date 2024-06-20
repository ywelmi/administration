import { Card, TabContent, TabPane } from 'reactstrap'
import PersonalTab from './PersonalTab/PersonalTab'
import { useAppSelector } from '../../../../ReduxToolkit/Hooks'
import OrganizationTab from './OrganizationTab/OrganizationTab'
import NoDataFoundClass from './Common/NoDataFoundClass'
import { Business, Favorites, FollowUp, Holidays, Ideas, Important } from '../../../../utils/Constant'
import HistoryClass from './HistoryClass/HistoryClass'
import { ContactNavProps } from '../../../../Types/Application/Contacts/Contacts'

const TabComponent: React.FunctionComponent<ContactNavProps> = ({ activeTab }): React.ReactElement => {
  const {users} = useAppSelector((state)=>state.contact)
  return (
    <div className="email-right-aside bookmark-tabcontent contacts-tabs">
      <Card className="email-body radius-left dark-contact">
        <div className="ps-0">
          <TabContent activeTab={activeTab}>
            <TabPane tabId="1">
              <PersonalTab users={users} />
            </TabPane>
            <TabPane tabId="2">
              <OrganizationTab />
            </TabPane>
            <TabPane tabId="3">
              <NoDataFoundClass title={FollowUp} />
            </TabPane>
            <TabPane tabId="4">
              <NoDataFoundClass title={Favorites} />
            </TabPane>
            <TabPane tabId="5">
              <NoDataFoundClass title={Ideas} />
            </TabPane>
            <TabPane tabId="6">
              <NoDataFoundClass title={Important} />
            </TabPane>
            <TabPane tabId="7">
              <NoDataFoundClass title={Business} />
            </TabPane>
            <TabPane tabId="8">
              <NoDataFoundClass title={Holidays} />
            </TabPane>
            <HistoryClass />
          </TabContent>
        </div>
      </Card>
    </div>
  )
}

export default TabComponent
import { useCallback, useState } from 'react'
import { Container, Row, TabContent, TabPane } from 'reactstrap'
import UserProfile from './UserProfile/UserProfile';
import TimelineTab from './TimelineTab/TimelineTab';
import AboutTab from './AboutTab/AboutTab';
import FriendsCard from './FriendsCard/FriendsCard';
import PhotosTab from './PhotosTab/PhotosTab';
import Breadcrumbs from '../../../CommonElements/Breadcrumbs/Breadcrumbs';
import { Apps, SocialApp } from '../../../utils/Constant';

const SocialAppContainer = () => {
  const [activeTab, setActiveTab] = useState(1);
  const callback = useCallback((tab: number) => {
    setActiveTab(tab);
  }, []);
  return (
    <>
      <Breadcrumbs mainTitle={SocialApp} parent={Apps} />
      <Container fluid>
        <div className="user-profile social-app-profile">
          <UserProfile callback={callback} />
          <TabContent activeTab={activeTab}>
            <TabPane tabId={1}>
              <TimelineTab />
            </TabPane>
            <TabPane tabId={2}>
              <AboutTab />
            </TabPane>
            <TabPane tabId={3}>
              <Row>
                <FriendsCard />
              </Row>
            </TabPane>
            <TabPane tabId={4}>
              <>
                <PhotosTab />
              </>
            </TabPane>
          </TabContent>
        </div>
      </Container>
    </>
  )
}

export default SocialAppContainer
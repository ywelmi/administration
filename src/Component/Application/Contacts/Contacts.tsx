import { Col, Container, Row } from 'reactstrap'
import ContactSideBar from './ContactSideBar/ContactSideBar'
import { useCallback, useState } from 'react';
import TabComponent from './TabComponent/TabComponent';
import Breadcrumbs from '../../../CommonElements/Breadcrumbs/Breadcrumbs';
import { Apps, Contacts } from '../../../utils/Constant';

const ContactsContainer = () => {
  const [activeTab, setActiveTab] = useState("2");
  const callback = useCallback((tab: string) => {
    setActiveTab(tab);
  }, []);
  return (
    <>
      <Breadcrumbs mainTitle={Contacts} parent={Apps} />
      <Container fluid>
        <div className="email-wrap bookmark-wrap">
          <Row>
            <Col xl="3" className="box-col-6">
              <ContactSideBar callback={callback} />
            </Col>
            <Col xl="9" md="12" className="box-col-12">
              <TabComponent activeTab={activeTab} />
            </Col>
          </Row>
        </div>
      </Container>
    </>
  )
}

export default ContactsContainer
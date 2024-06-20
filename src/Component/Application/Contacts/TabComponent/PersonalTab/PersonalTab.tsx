import { Card, CardBody, CardHeader, Col, Row, TabContent, TabPane } from 'reactstrap'
import { H5 } from '../../../../../AbstractElements'
import { Contacts, Personal } from '../../../../../utils/Constant'
import { useCallback, useState } from 'react';
import ListNewContact from './ListNewContact';
import UpdateUser from './UpdateUser';
import ContactDetailsClass from './ContactDetailsClass';
import { PersonalTabPropsType, UserCallbackUser, UserUpdateType } from '../../../../../Types/Application/Contacts/Contacts';

const PersonalTab = ({ users }: PersonalTabPropsType) => {
  const [selectedUser, setSelectedUser] = useState<undefined | UserCallbackUser | UserUpdateType >();
  const [editing, setEditing] = useState(false);
  const [editData, setEditData] = useState({});
  const userCallback = useCallback((user: UserCallbackUser) => {
    setSelectedUser(user);
  }, []);
  const userEditCallback = useCallback(
    (edit: boolean, usersData: UserCallbackUser) => {
      setEditData(usersData);
      setSelectedUser(usersData);
      setEditing(edit);
    },[]);
  return (
    <Card>
      <CardHeader className="d-flex">
        <H5 className='f-w-600'>{Personal}</H5>
        <span className="f-14 pull-right mt-0">
          {users.length} {Contacts}
        </span>
      </CardHeader>
      <CardBody className="p-0">
        <Row className="list-persons" id="addIcon">
          <ListNewContact users={users} userCallback={userCallback} />
          <Col xl="8" md="7" className="xl-50">
            {editing ? (
              <UpdateUser editData={editData} userEditCallback={userEditCallback}/>
            ) : (
              <TabContent activeTab={0}>
                <TabPane tabId={0}>
                  <ContactDetailsClass
                    selectedUser={selectedUser ? selectedUser : users[0]}
                    userEditCallback={userEditCallback}  
                    setSelectedUser = {setSelectedUser}
                  />
                </TabPane>
              </TabContent>
            )}
          </Col>
        </Row>
      </CardBody>
    </Card>
  )
}

export default PersonalTab
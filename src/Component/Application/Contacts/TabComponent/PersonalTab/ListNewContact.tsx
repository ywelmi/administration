import { Col, Media, Nav, NavLink } from 'reactstrap';
import { H6, Image, P } from '../../../../../AbstractElements';
import { useState } from 'react';
import SearchNotFoundClass from './SearchNotFoundClass';
import { ListNewContactPropsType, UserCallbackUser } from '../../../../../Types/Application/Contacts/Contacts';
import { Href } from '../../../../../utils/Constant';

const ListNewContact = ({ users, userCallback }:ListNewContactPropsType) => {
  const [dynamicTab, setDynamicTab] = useState(0);
  const ContactDetails = (user:UserCallbackUser) => {
    userCallback({ id: user.id, name: user.name, sureName: user.sureName, avatar: user.avatar, mobile: user.mobile });
  };
  return (
    <Col xl="4" md="5" className='xl-50'>
      <Nav className="flex-column nav-pills">
        {users.length > 0 ?
          users.map((user:UserCallbackUser, index:number) => {
            return (
              <NavLink className={dynamicTab === index ? 'active' : ''} onClick={() => setDynamicTab(index)} key={index} href={Href}>
                <Media onClick={() => ContactDetails(user)}>
                  <Image className= 'p-0 img-fluid img-50 m-r-20 rounded-circle update_img_0' src= {user.avatar} alt= 'userImage'  />
                  <Media body>
                    <H6>
                      <span className="first_name_0">{user.name}</span>
                      <span className="last_name_0">{user.sureName}</span>
                    </H6>
                    <P className= 'email_add_0' >{user.name}{'@gmail.com'}</P>
                  </Media>
                </Media>
              </NavLink>
            );
          })
          :
          <SearchNotFoundClass />
        }
      </Nav>
    </Col>
  )
}

export default ListNewContact
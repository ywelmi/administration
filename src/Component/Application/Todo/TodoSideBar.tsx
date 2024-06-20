import { useState } from 'react'
import { Badges, Btn } from '../../../AbstractElements';
import { Card, CardBody, Nav, NavItem } from 'reactstrap';
import { CheckCircle } from 'react-feather';
import { Href, ToDoList, ToDoFilter } from '../../../utils/Constant';
import { Link } from 'react-router-dom';
import { sideBartList } from '../../../Data/Application/Todo/Todo';
import UserDetail from './UserDetail';

const TodoSideBar = () => {
    const [showSideBar, setShowSideBar] = useState(false);
    return (
      <div className="email-sidebar md-sidebar">
        <Btn color='primary' className="email-aside-toggle md-sidebar-toggle" onClick={()=>setShowSideBar(!showSideBar)}>{ToDoFilter}</Btn>
        <div className={`email-left-aside md-sidebar-aside ${showSideBar ?"open":""}`}>
          <Card>
            <CardBody>
              <div className="email-app-sidebar left-bookmark custom-scrollbar">
                <UserDetail />
                <Nav className="main-menu">
                  <NavItem>
                    <Btn color="primary" block className="badge-light btn-mail w-100 txt-light">
                      <CheckCircle className="me-2" /> {ToDoList}
                    </Btn>
                  </NavItem>
                  {sideBartList.map((data, index) =>
                    <NavItem key={index}>
                      <Link to={Href}>
                        <span className={`iconbg badge-light-${data.color}`}>{data.icon}</span>
                        <span className="title ms-2">{data.tittle}</span>
                        {data.badge && (
                          <Badges pill color={data.tittle === "In Process"? "primary": data.color}>{data.badge}</Badges>
                        )}
                      </Link>
                    </NavItem>
                  )}
                </Nav>
              </div>
            </CardBody>
          </Card>
        </div>
      </div>
    )
}

export default TodoSideBar
import { Card, CardBody, Nav, NavItem } from "reactstrap";
import { Href, Views } from "../../../../utils/Constant";
import { taskData } from "../../../../Data/Application/Tasks/Tasks";
import { Link } from "react-router-dom";
import { useAppSelector } from "../../../../ReduxToolkit/Hooks";
import HeaderProfile from "./HeaderProfile";
import NewTaskClass from "./NewTaskClass";
import TagsLeftSidebar from "./TagsLeftSidebar";
import { TasksPropsTypes } from "../../../../Types/Application/Tasks/Tasks";

const ViewsLeftSidebar = ({ activeToggle }: TasksPropsTypes) => {
  const { activeTab } = useAppSelector((state) => state.tasks);
  return (
    <Card>
      <CardBody>
        <div className="email-app-sidebar left-bookmark task-sidebar">
          <HeaderProfile />
          <Nav className="main-menu">
            <NavItem>
              <NewTaskClass />
            </NavItem>
            <NavItem>
              <span className="main-title">{Views}</span>
            </NavItem>
            {taskData.map((item) => (
              <NavItem key={item.id}>
                <Link
                  to={Href}
                  className={activeTab === item.activeTab ? "active" : ""}
                  onClick={() => {
                    activeToggle(item.activeTab);
                  }}
                >
                  <span className="title"> {item.title}</span>
                </Link>
              </NavItem>
            ))}
            <NavItem>
              <hr />
            </NavItem>
            <TagsLeftSidebar activeTab={activeTab} activeToggle={activeToggle} />
          </Nav>
        </div>
      </CardBody>
    </Card>
  );
};

export default ViewsLeftSidebar;

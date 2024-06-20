import { useState } from 'react'
import { Col } from 'reactstrap'
import { Btn } from '../../../../AbstractElements'
import { TaskFilter } from '../../../../utils/Constant'
import ViewsLeftSidebar from './ViewsLeftSidebar'
import { TasksPropsTypes } from '../../../../Types/Application/Tasks/Tasks'

const NavClass = ({ activeToggle}: TasksPropsTypes) => {
  const [sideBarOpen, setSideBarOpen] = useState(false);
  return (
    <Col xl="3" className="box-col-6">
      <div className="md-sidebar">
        <Btn color="primary" className="md-sidebar-toggle" onClick={() => setSideBarOpen(!sideBarOpen)}>
          {TaskFilter}
        </Btn>
        <div className={`md-sidebar-aside job-left-aside custom-scrollbar ${ sideBarOpen ? "open" : ""}`}>
          <div className="email-left-aside">
            <ViewsLeftSidebar activeToggle={activeToggle} />
          </div>
        </div>
      </div>
    </Col>
  )
}

export default NavClass
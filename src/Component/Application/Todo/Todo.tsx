import { Card, CardBody, Col, Container, Row } from 'reactstrap'
import TodoSideBar from './TodoSideBar'
import TodoHeader from './TodoHeader'
import TodoList from './TodoList'
import Breadcrumbs from '../../../CommonElements/Breadcrumbs/Breadcrumbs'
import { Apps, ToDoHeading } from '../../../utils/Constant'

const TodoContainer = () => {
  return (
    <>
      <Breadcrumbs mainTitle={ToDoHeading} parent={Apps} />
      <Container fluid className="email-wrap bookmark-wrap todo-wrap">
        <Row>
          <Col xxl="3" xl="4">
            <TodoSideBar />
          </Col>
          <Col xxl="9" xl="8" className="box-col-12">
            <Card>
              <TodoHeader/>
              <CardBody>
                <div className="todo">
                  <div className="todo-list-wrapper">
                    <div className="todo-list-container">
                      <TodoList />
                    </div>
                  </div>
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default TodoContainer
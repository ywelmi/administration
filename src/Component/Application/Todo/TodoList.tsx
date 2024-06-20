import { useAppDispatch, useAppSelector } from '../../../ReduxToolkit/Hooks';
import { toast } from 'react-toastify';
import { ToDoProp } from '../../../Types/Application/Todo/Todo';
import { Badges, H4, H5, LI, UL } from '../../../AbstractElements';
import { removeItems } from '../../../ReduxToolkit/Reducer/LetterBoxSlice';
import { updateTodo } from '../../../ReduxToolkit/Reducer/ToDoSlice';

const TodoList = () => {
  const dispatch = useAppDispatch();
  const { todoList } = useAppSelector((state) => state.todo);

  const handleRemoveTodo = (id:number,title:string) => {
    dispatch(removeItems(id));
    toast.success(`${title} deleted`);
  }
  const handleMarkedTodo = (item: ToDoProp) => {
    if (item.status === "completed") {
      dispatch(updateTodo({ id: item.id, status: "pending", badgeClass: "bg-light-danger text-danger"}));
      toast.error(item.title + " as Incomplete");
    } else if (item.status === "pending") {
      dispatch(updateTodo({ id: item.id, status: "completed", badgeClass: "bg-light-success text-success" }));
      toast.success(item.title + " as Complete");
    }
  };
  return (
    <div className="todo-list-body">
      <UL id="todo-list"> 
        {todoList.length > 0
          ?todoList.map((todo, index) => (
            <LI className={`task ${todo.status === "completed" ? "completed" : ""}`}  key={index} >
              <div className="task-container">
                <span onClick={() => handleMarkedTodo(todo)}>
                  <H4 className="task-label">{todo.title}</H4>
                </span>
                <div className="d-flex align-items-center gap-3">
                  <Badges className={`${todo.badgeClass}`} color='transparent' onClick={() => handleMarkedTodo(todo)}>{todo.badge}</Badges>
                  <H5 className="assign-name m-0">{todo.timeLimit}</H5>
                  <span className="task-action-btn">
                    <span className="action-box large delete-btn" onClick={() => handleRemoveTodo(todo.id, todo.title)}>
                      <i className="icon"><i className="icon-trash" /></i>
                    </span>
                  </span>
                </div>
              </div>
            </LI>
        )): ""}
      </UL>
    </div>
  )
}

export default TodoList
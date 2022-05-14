import { Todo } from "../interfaces/Todo.interface";

interface Props {
  todo: Todo,
  changeTodoStatus: (id: string) => void;
  deleteTodoProps: (id: string) => void
}

const TodoItem = ({ todo, changeTodoStatus, deleteTodoProps }: Props): JSX.Element => {
  return (<li><input type="checkbox" checked={todo.isCompleted} onChange={() => { changeTodoStatus(todo.id) }} />{todo.title}
    <button onClick={() => deleteTodoProps(todo.id)}>Delete</button>
  </li>)
}

export default TodoItem;
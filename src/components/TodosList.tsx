import { Todo } from "../interfaces/Todo.interface";
import TodoItem from "./TodoItem";

interface Props {
  todos: Todo[];
  changeTodoStatus: (id: string) => void;
  deleteTodoProps: (id: string) => void;
  editTodoProps: (id: string, title: string) => void;
}

const TodosList = ({ todos, changeTodoStatus, deleteTodoProps, editTodoProps }: Props): JSX.Element => {
  return (<>{todos.map(todo =>
    <TodoItem todo={todo} key={todo.id} changeTodoStatus={changeTodoStatus} deleteTodoProps={deleteTodoProps} editTodoProps={editTodoProps}></TodoItem>
  )}</>)
}

export default TodosList;
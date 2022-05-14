import { Todo } from "../interfaces/Todo.interface";
import TodoItem from "./TodoItem";

interface Props {
    todos: Todo[];
    changeTodoStatus: (id: string) => void
}

const TodosList = ({ todos, changeTodoStatus }: Props): JSX.Element => {
    console.log(todos);
    return (<>{todos.map(todo =>
        <TodoItem todo={todo} key={todo.id} changeTodoStatus={changeTodoStatus}></TodoItem>
    )}</>)
}

export default TodosList;
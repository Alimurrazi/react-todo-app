import { Todo } from "../interfaces/Todo.interface";

interface Props {
    todo: Todo,
    changeTodoStatus: (id: string) => void
}

const TodoItem = ({todo, changeTodoStatus}: Props): JSX.Element =>{
    return ( <li><input type="checkbox" checked={todo.isCompleted} onChange={()=>{changeTodoStatus(todo.id)}}/>{todo.title}</li>)
}

export default TodoItem;
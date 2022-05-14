import { useState } from "react";
import { Todo } from "../interfaces/Todo.interface";
import Header from "./Header";
import TodosList from "./TodosList";

const TodoContainer = (): JSX.Element => {

    const getTodoList = (): Todo[] =>{
        return [{
            id: 'a',
            title: 'walk',
            isCompleted: true
        }, {
            id: 'b',
            title: 'running',
            isCompleted: false
        }]
    }

    const changeTodoStatus = (id: string) => {

        setTodoList(todoList.map(todo=>{
            if(todo.id === id) {
                todo.isCompleted = !todo.isCompleted;
            }
            return todo;
        }))

        const index = todoList.findIndex(todo=>todo.id === id);
        console.log(index,id);
    }

    const [todoList, setTodoList] = useState(getTodoList());

    return (<><Header></Header><TodosList todos={todoList} changeTodoStatus={changeTodoStatus}></TodosList></>)
}

export default TodoContainer;
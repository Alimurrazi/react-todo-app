import { useState } from "react";
import { Todo } from "../interfaces/Todo.interface";
import Header from "./Header";
import InputTodo from "./InputTodo";
import TodosList from "./TodosList";
import { v4 as uuidv4 } from "uuid";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({

  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    maxWidth: '600px',
    margin: '0 auto'
  },
  inner: {
    width: '100%',
    padding: '8rem 10px 4rem'
  }

}), { name: 'TodoContainer' })

const TodoContainer = (): JSX.Element => {

  const classes = useStyles();
  const getTodoList = (): Todo[] => {
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
    setTodoList(todoList.map(todo => {
      if (todo.id === id) {
        return {
          ...todo,
          isCompleted: !todo.isCompleted
        }
      }
      return todo;
    }))
  }

  const deleteTodo = (id: string) => {
    setTodoList([...todoList.filter(todo => {
      return todo.id !== id;
    })])
  }

  const addTodo = (title: string) => {
    const todo: Todo = {
      id: uuidv4(),
      title: title,
      isCompleted: false
    }
    setTodoList([...todoList, todo]);
  }

  const [todoList, setTodoList] = useState(getTodoList());

  return (<>
    <div className={classes.container}>
      <div className={classes.inner}>
        <Header></Header>
        <InputTodo addTodoProps={addTodo}></InputTodo>
        <TodosList todos={todoList} changeTodoStatus={changeTodoStatus} deleteTodoProps={deleteTodo}></TodosList>
      </div>
    </div>

  </>)
}

export default TodoContainer;
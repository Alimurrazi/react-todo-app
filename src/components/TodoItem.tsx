import { makeStyles } from "@material-ui/core";
import { Todo } from "../interfaces/Todo.interface";

interface Props {
  todo: Todo,
  changeTodoStatus: (id: string) => void;
  deleteTodoProps: (id: string) => void
}

const useStyles = makeStyles((theme) => ({

  item: {
    fontSize: '1.2rem',
    listStyleType: 'none',
    padding: '17px 0px',
    borderBottom: '1px solid #eaeaea'
  },

  checkbox: {
    marginRight: '15px'
  },

  itemButton: {
    fontSize: '13px',
    background: '#f1f3f4',
    border: 'none',
    cursor: 'pointer',
    float: 'right',
    outline: 'none',
    borderRadius: '100px',
    height: '50px',
    width: '50px',
    margin: '-10px 0 0 10px',
  },
  completedStyle: {
    fontStyle: 'italic',
    color: '#595959',
    opacity: 0.4,
    textDecoration: 'line-through'
  }

}), { name: 'TodoItem' })

const TodoItem = ({ todo, changeTodoStatus, deleteTodoProps }: Props): JSX.Element => {
  const classes = useStyles();

  return (<li className={classes.item}>
    <input type="checkbox" className={classes.checkbox} checked={todo.isCompleted} onChange={() => { changeTodoStatus(todo.id) }} />
    <span className={todo.isCompleted ? classes.completedStyle : ''}>{todo.title}</span>
    <button className={classes.itemButton} onClick={() => deleteTodoProps(todo.id)}>Delete</button>
  </li>)
}

export default TodoItem;
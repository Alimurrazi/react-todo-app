import { makeStyles } from "@material-ui/core";
import { ChangeEvent, useState } from "react";
import { Todo } from "../interfaces/Todo.interface";

interface Props {
  todo: Todo,
  changeTodoStatus: (id: string) => void;
  deleteTodoProps: (id: string) => void;
  editTodoProps: (id: string, title: string) => void;
}

const useStyles = makeStyles((theme) => ({

  itemContainer: {
    borderBottom: '1px solid #eaeaea'
  },
  item: {
    fontSize: '1.2rem',
    listStyleType: 'none',
    padding: '17px 0px',
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
  },
  formContainer: {
    width: '100%',
    marginBottom: '20px',
    display: 'flex',
    borderRadius: 'calc(0.5 * 100px)',
    boxShadow: '0 1px 6px 0 rgba(0, 0, 0, 0.38)',
    justifyContent: 'space-evenly',
    marginTop: '20px'
  },
  inputText: {
    fontSize: '1rem',
    fontWeight: 400,
    width: '85 %',
    paddingRight: '5px',
    paddingLeft: '10px',
    borderRadius: 'calc(0.5 * 100px)',
    height: '45px',
    outline: 'none',
    border: 'none'
  },
  inputSubmit: {
    background: 'transparent',
    color: '#5b5b5b',
    textTransform: 'capitalize',
    cursor: 'pointer',
    fontWeight: 600,
    marginRight: '10px',
    height: '45px',
    outline: 'none',
    border: 'none'
  },

}), { name: 'TodoItem' })

const TodoItem = ({ todo, changeTodoStatus, deleteTodoProps, editTodoProps }: Props): JSX.Element => {
  const classes = useStyles();
  const [title, setTitle] = useState(todo.title);
  const [isEditShow, setIsEditShow] = useState(false);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  }

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (title.trim()) {
      setIsEditShow(false);
      editTodoProps(todo.id, title);
    }
  };

  return (
    <>

      <div className={classes.itemContainer}>
        <li className={classes.item}>
          <input type="checkbox" className={classes.checkbox} checked={todo.isCompleted} onChange={() => { changeTodoStatus(todo.id) }} />
          <span className={todo.isCompleted ? classes.completedStyle : ''}>{todo.title}</span>
          <button className={classes.itemButton} onClick={() => deleteTodoProps(todo.id)}>Delete</button>
          <button className={classes.itemButton} onClick={() => { setIsEditShow(!isEditShow); setTitle(todo.title) }}>Edit</button>
        </li>

        {isEditShow && (<form className={classes.formContainer} onSubmit={handleSubmit}>
          <input className={classes.inputText} type="text" placeholder="Edit Todo..." onChange={onChange} value={title} />
          <button className={classes.inputSubmit} type="submit">Submit</button>
        </form>)}
      </div>

    </>

  )
}

export default TodoItem;
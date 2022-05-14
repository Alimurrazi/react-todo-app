import { makeStyles } from "@material-ui/core";
import { ChangeEvent, useState } from "react";

interface Props {
  addTodoProps: (title: string) => void
}

const useStyles = makeStyles((theme) => ({

  formContainer: {
    width: '100%',
    marginBottom: '20px',
    display: 'flex',
    borderRadius: 'calc(0.5 * 100px)',
    boxShadow: '0 1px 6px 0 rgba(0, 0, 0, 0.38)',
    justifyContent: 'space-evenly'
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

}), { name: 'inputTodo' });

const InputTodo = ({ addTodoProps }: Props): JSX.Element => {

  const [title, setTitle] = useState('');
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    setTitle(e.target.value);
  }

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (title.trim()) {
      addTodoProps(title);
      setTitle('');
    }
  };

  const classes = useStyles();
  return (<form onSubmit={handleSubmit} className={classes.formContainer}>
    <input className={classes.inputText} type="text" placeholder="Add Todo..." onChange={onChange} value={title} />
    <button className={classes.inputSubmit} type="submit">Submit</button>
  </form>)
}

export default InputTodo;
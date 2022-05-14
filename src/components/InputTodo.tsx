import { ChangeEvent, useState } from "react";

interface Props {
  addTodoProps: (title: string) => void
}

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


  return (<form onSubmit={handleSubmit}>
    <input type="text" placeholder="Add Todo..." onChange={onChange} value={title} />
    <button type="submit">Submit</button>
  </form>)
}

export default InputTodo;
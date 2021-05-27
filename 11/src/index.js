import css from './todos.css';
import { render } from './html-render';
import formInput from './form-input';
const $result = document.querySelector('#result');

const todos = [
  {
    text: 'hihi',
    isDone: false,
  },
];

$result.addEventListener('click', (event) => {
  console.log(event.target.className);
  const className = event.target.className;
  if (className === 'delete') {
    const { index } = event.target.parentElement.dataset;
    todos.splice(index, 1);
    render(todos);
  } else if (className === 'toggle-checked') {
    const { index } = event.target.parentElement.dataset;
    todos[index].isDone = !todos[index].isDone;
    render(todos);
  }
});

formInput.init(todos);
render(todos);

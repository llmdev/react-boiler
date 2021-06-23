import { render } from 'react-dom';
import './styles/global.css';

const App = () => {
  return <h1>Hello my boiler!</h1>
}

render(<App />, document.querySelector('#app'));


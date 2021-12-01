import { render, createElement } from '../index.js';

// need to test with string, like "hello world"
const App = (
  <div>
    <span>"Hello world!!!"</span>
    <br/>
    F00
  </div>
);

render(App, document.getElementById('rootId'))

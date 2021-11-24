import { render, createElement } from '../index.js';

// need to test with string, like "hello world"
const App = <span>"Hello world!!!"</span>;

render(App, document.getElementById('rootId'))

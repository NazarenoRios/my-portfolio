// import ReactDOM from 'react-dom'
// import App from './App'
// import './index.css'

// ReactDOM.render(<App/>, document.querySelector("#root"));

import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';

import App from './App';
import './index.css'

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
    <StrictMode>
      <App />
    </StrictMode>,
);


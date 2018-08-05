import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App timer={1} cardsNum={10} count={5} />, document.getElementById('root'));
registerServiceWorker();

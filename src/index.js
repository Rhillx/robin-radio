import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {applyMiddleware, createStore} from 'redux';
import rootReducers from './Reducers';
import thunk from 'redux-thunk';
import registerServiceWorker from './registerServiceWorker';


const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const store = createStoreWithMiddleware(rootReducers);

ReactDOM.render(<App store={store}/>, document.getElementById('root'));
registerServiceWorker();




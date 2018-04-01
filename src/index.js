import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Home from './containers/Home';
import registerServiceWorker from './registerServiceWorker';

/****REDUX*****/
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import reduxThunk from 'redux-thunk';
import reducers from './reducers';
const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);
const store = createStoreWithMiddleware(reducers,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());


ReactDOM.render(
    <Provider store={store}>
        <Home/>
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();

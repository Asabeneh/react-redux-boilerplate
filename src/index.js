import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {createStore,combineReducers} from 'redux';
import {Provider} from 'react-redux';
import productsReducer from './reducers/products-reducer';
import userReducer from './reducers/user-reducer';


const initialState = {
    products:{name:'iPhone'},
    user:'Michael'
}

const allReducers = combineReducers({
    products:productsReducer,
    user:userReducer

})

const store = createStore(
    allReducers,
    initialState,
    window.devToolsExtension && window.devToolsExtension()
)


console.log(store.getState())









ReactDOM.render(
<Provider store = {store}>
    <App randomProps="Foo"/>
    </Provider>, document.getElementById('root'));


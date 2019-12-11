import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import thunk from 'redux-thunk';
import { applyMiddleware, compose, combineReducers, createStore } from 'redux'
import { Provider } from 'react-redux'
import databaseReducer from './reducers/database-reducer'
import makesReducer from './reducers/makes-reducer'
import modalReducer from './reducers/modal-reducer'
import vehicleReducer from './reducers/vehicle-reducer'

const allReducer = combineReducers({
    car_data: databaseReducer,
    select_make: makesReducer,
    select_vehicle: vehicleReducer,
    select_car: vehicleReducer,
})

const allStoreEnhancers = compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const store = createStore(
    allReducer, {
        car_data: {},
        select_make: {},
        select_vehicle: {},
        select_car: {}
    },
    allStoreEnhancers
)

export default store

ReactDOM.render( <Provider store={store}><App/></Provider>, document.getElementById('root'));


        // If you want your app to work offline and load faster, you can change
        // unregister() to register() below. Note this comes with some pitfalls.
        // Learn more about service workers: https://bit.ly/CRA-PWA
        serviceWorker.unregister();
        // ``
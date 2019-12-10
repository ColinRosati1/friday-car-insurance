import React from 'react';
import './App.css';

import AppBody from './components/AppBody'
import SelectCarModal from './components/SelectCarModal'

import { connect } from 'react-redux'

function App() {
    return ( <
        div className = "App" >
        <
        header className = "App-header" >
        <
        h1 > Friday Car Insurance < /h1> <
        h5 > select your car from database < /h5> <
        /header> <
        AppBody / >
        <
        SelectCarModal / >
        <
        /div>
    );
}

export default connect()(App);
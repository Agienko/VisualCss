import React from "react";
import Left from "./Left/Left";
import Right from "./Right/Right";
import './App.css'
import UppMenuContainer from "./UppMenu/UppMenuContainer";
import { BrowserRouter } from "react-router-dom";

const App = props => (
    <div className="App_wrapper">
        <div className="App_container">
            <BrowserRouter>
                <UppMenuContainer />
                <Left />
                <Right />
            </BrowserRouter>
        </div>
    </div>  
)
export default App
import React from 'react';
import { Route,Routes} from "react-router-dom";
import Header from "./Components/Header";
import Home from "./view/Home";



const App = () => {
    return (
        <div className="app">
            <Header/>
            <Routes>
                <Route exact path='/' component={Home}/>
            </Routes>
        </div>
    )
};

export default App;
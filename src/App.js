import React from 'react';
import { Route,Routes} from "react-router-dom";
import Header from "./Components/Header";
import Home from "./view/Home";
import About from "./view/About";
import Contacts from "./view/Contacts";



const App = () => {
    return (
        <div className="app">
            <Header/>
            <Routes>
                <Route exact path='/' component={Home}/>
                <Route exact path='/about' component={About}/>
                <Route exact path='/contacts' component={Contacts}/>
                <Route exact path='/' component={Home}/>
            </Routes>
        </div>
    )
};

export default App;
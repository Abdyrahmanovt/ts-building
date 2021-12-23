import React from 'react';
import {Route, Routes} from "react-router-dom";
import Header from "./Components/Header";
import Home from "./view/Home";
import About from "./view/About";
import Contacts from "./view/Contacts";
import Projects from "./view/Projects";
// import Progress from "./Components/Progress";
// import End from "./Components/End";


const App = () => {
    return (
        <div className="app">
            <Header/>
           <div className="pages">
               <Routes>
                   <Route exact path='/' element={<Home/>}/>
                   <Route exact path='/about' element={<About/>}/>
                   <Route exact path='/contacts' element={<Contacts/>}/>
                   <Route exact path='/projects' element={<Projects/>}/>
                   {/*<Route exact path='/progress' element={<Progress/>}/>*/}
                   {/*<Route exact path='/end' element={<End/>}/>*/}
               </Routes>
           </div>
        </div>
    )
};

export default App;
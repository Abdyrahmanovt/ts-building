import React from 'react';
import {Route, Routes} from "react-router-dom";
import Header from "./Components/Header";
import Home from "./view/Home";
import About from "./view/About";
import Contacts from "./view/Contacts";
import Projects from "./view/Projects";
import Browse from "./Components/Browse";
import NotFound from "./view/NotFound";


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
                   <Route exact path='/projectInfo' element={<Browse/>}/>
                   <Route exact path='*' element={<NotFound/>}/>
               </Routes>
           </div>
        </div>
    )
};

export default App;
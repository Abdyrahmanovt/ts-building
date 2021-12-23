import React, {useState, useEffect} from 'react';
import axios from "axios";
import './index.css'
// import {Link} from "react-router-dom";

const Projects = ({}) => {
    const [projects, setProjects] = useState([])


    useEffect(() => {
        axios('https://613fef235cb9280017a110a6.mockapi.io/apartaments')
            .then(({data}) => setProjects(data))
    }, [])
    return (
        <div className='projects'>
            {/*<div>*/}
            {/*    <Link to='/progress'>В процессе</Link>*/}
            {/*    <Link to='/end'>Завершено</Link>*/}
            {/*</div>*/}
            <div className='grid card'>
                {
                    projects.map(item => (
                        <div className='box'>
                            <img src={item.image} className='card-img' alt=""/>
                            <p className='card-info'>{item.title}</p>
                            <p className='card-info'>{item.address}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Projects;
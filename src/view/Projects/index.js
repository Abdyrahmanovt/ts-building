import React, {useState, useEffect} from 'react';
import axios from "axios";
import './index.css'
import {Link} from "react-router-dom";

const Projects = ({}) => {
    const [projects, setProjects] = useState([])


    useEffect(() => {
        axios('https://613fef235cb9280017a110a6.mockapi.io/apartaments')
            .then(({data}) => setProjects(data))
    }, [])
    return (
        <div className='projects grid'>
                {
                    projects.map(item => (
                        <Link to='/projectInfo' key={item.id} className='card-info'>
                            <div className="box">
                                <div className="card" >
                                    <img src={item.image} className="card-img-top" alt="..."/>
                                    <div className="card-body">
                                        <h5 className="card-title">{item.title}</h5>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))
                }
        </div>
    );
};

export default Projects;
import React, {useState, useEffect} from 'react';
import axios from "axios";
import './index.css'

const Projects = () => {
    const [projects, setProjects] = useState([])
    const [process,setProcess] = useState(false)

    useEffect(() => {
        axios('https://613fef235cb9280017a110a6.mockapi.io/apartaments')
            .then(({data}) => setProjects(data))
    }, [])
    return (
        <div className='projects'>
            <div>
                <button onClick={()=>setProcess(true)}>В процессе</button>

                <button >Законили</button>
            </div>
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
            {
                projects.map(el =>(
                    <div>{el.status === true}</div>
                )) ?
            }
        </div>
    );
};

export default Projects;
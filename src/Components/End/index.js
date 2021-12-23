import React, {useState, useEffect} from 'react';
import axios from "axios";
import './index.css'

const End = () => {
    const [process, setProcess] = useState([])
    useEffect(() => {
        axios('https://613fef235cb9280017a110a6.mockapi.io/apartaments')
            .then(({data}) => setProcess(data))
    }, [])

    return (
        <div>
            {
                process.map(item => (
                    <div className='box'>
                        <img src={item.image} className='card-img' alt=""/>
                        <p className='card-info'>{item.title}</p>
                        <p className='card-info'>{item.address}</p>
                        <span>{item.status === true}</span>
                    </div>
                ))
            }
        </div>
    );
};

export default End;
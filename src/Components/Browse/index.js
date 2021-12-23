import React from 'react';
import './index.css'
import house from './dom.jpg'

const Browse = () => {
    return (
<div className='browse'>
    <div className='project-info container box'>
        <div>
            <h4 className='info-title'>Жилой комплекс «Южный»</h4>
            <p className="info-desc">В южном районе нашей столицы мы решили расположить уникальный жилой комплекс
                премиум класса «Южный». Данный комплекс - идеальное место для тех, кто всегда находится в центре
                событий, но при этом ценит уединение и комфорт! Гордая архитектура фасадов с ювелирной точностью
                вписана в самобытный район южной части нашего города.</p>
            <ul>
                <li>Общая площадь участка - 2,868 га</li>
                <li>Количество этажей - 14</li>
                <li>Общее количество квартир - 556</li>
                <li>Подземный паркинг на 256 машин</li>
            </ul>
        </div>
        <div className='house-box'>
            <img src={house} className='house' alt=""/>
            <img src={house} className='house' alt=""/>
            <img src={house} className='house' alt=""/>
            <img src={house} className='house' alt=""/>
            <img src={house} className='house' alt=""/>
            <img src={house} className='house' alt=""/>
        </div>
    </div>
</div>
    );
};

export default Browse;
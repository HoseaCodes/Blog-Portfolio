import React from 'react';
import '../Carousel/Carousel.css'
import '../Carousel/Modal.css';
import { useState } from 'react';
import ImgComp from './ImgComp';
import CalorieKitchen from '../../icons/CalorieKitchen.png';
import CaloriesKitchen2 from '../../icons/CaloriesKitchen2.png';
import caloriekitchen2 from '../../icons/caloriekitchen2.png';
import caloriekitchen3 from '../../icons/caloriekitchen3.png';
import caloriekitchen4 from '../../icons/caloriekitchen4.png';
import ZoomInIcon from '@material-ui/icons/ZoomIn';
import Modal from '../Modal/Modal'


function Carousel() {
    let project1 = [
        <ImgComp className='cover' src={CalorieKitchen} />,
        <ImgComp className='cover' src={CaloriesKitchen2} />,
        <ImgComp className='cover' src={caloriekitchen2} />,
        <ImgComp className='cover' src={caloriekitchen3} />,
        <ImgComp className='cover' src={caloriekitchen4} />,

    ];
    const p1 = 'Calorie Kitchen';
    const [x, setX] = useState(0)
    const goLeft = () => {
        x === 0 ? setX(-100 * (project1.length - 1)) : setX(x + 100);
    };
    const goRight = () => {
        x === -100 * (project1.length - 1) ? setX(0) : setX(x - 100);

    };
    return (
        <div className='carousel-container' >
            <div className='p-details'>
                <h2 className='p-h2'>{p1}</h2>
                <div className='c-carousel'>
                    {project1.map((item, index) => {
                        return (
                            <div key={index} className='slide' style={{ transform: `translateX(${x}%)` }}>
                                {item}
                            </div>
                        )
                    })}
                    <button className='btn-left' onClick={goLeft}> ‹ </button>
                    <button className='btn-right' onClick={goRight}> › </button>
                </div>

                <ul className='main-tag-container' style={{ display: 'flex', justifyContent: 'center', listStyle: 'none' }}>
                    <li><a href="#" className="main-tag">JavaScript</a></li>
                    <li><a href="#" className="main-tag">JQuery</a></li>
                    <li><a href="#" className="main-tag">AJAX</a></li>
                </ul>
                <ZoomInIcon fontSize='large' style={{ color: '#206a5d' }} />
                <Modal />
                <p>Solo Project: Calorie Kitchen API - JavaScript, CSS, HTML - Created a single page application with client side rending with API and AJAX capabilities. The API accessed Spoonacular DB JSON data.</p>
                <div style={{ display: 'flex', marginTop: '30px' }}>
                    <a className='link' href="https://hoseacodes.github.io/Calorie-Kitchen/" target="_blank" rel="noopener noreferrer">View Live Site</a>
                    <a className='link github' href="https://github.com/HoseaCodes/Calorie-Kitchen" target="_blank" rel="noopener noreferrer">View Github</a>
                </div>
            </div>
        </div>
    )
}


export default
    Carousel;
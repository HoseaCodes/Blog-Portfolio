import React from 'react'
import '../Carousel/Carousel.css'
import '../Carousel/Modal.css'
import { useState } from 'react';
import ImgComp from './ImgComp';
import DevCenter from '../../icons/DevCenter.png'
import DevCenter2 from '../../icons/DevCenter2.png'
import DevCenter3 from '../../icons/DevCenter3.png'
import DevCenter4 from '../../icons/DevCenter4.png'


function CarouselDevCenter() {
    let example = [
        <ImgComp className='cover' src={DevCenter} />,
        <ImgComp className='cover' src={DevCenter2} />,
        <ImgComp className='cover' src={DevCenter3} />,
        <ImgComp className='cover' src={DevCenter4} />,

    ];
    const [x, setX] = useState(0)
    const goLeft = () => {
        x === 0 ? setX(-100 * (example.length - 1)) : setX(x + 100);
    };
    const goRight = () => {
        x === -100 * (example.length - 1) ? setX(0) : setX(x - 100);

    };
    return (
        <div className='carousel-container'>
            <div className='carousel'>
                {example.map((item, index) => {
                    return (
                        <div key={index} className='slide' style={{ transform: `translateX(${x}%)` }}>
                            {item}
                        </div>
                    )
                })}
                <button className='btn-left' onClick={goLeft}> ‹ </button>
                <button className='btn-right' onClick={goRight}> › </button>
            </div>
        </div>
    )
}


export default
    CarouselDevCenter
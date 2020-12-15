import React from 'react';
import CarouselCalorieKitchen from '../Carousel/CarouselCalorieKitchen';
import CarouselCareerconnect from '../Carousel/CarouselCareerConnect';
import CarouselSneakerAPI from './CarouselSneakerAPI';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function Projects() {

    window.addEventListener(
        "scroll",
        () => {
            document.body.style.setProperty(
                "--scroll",
                window.pageYOffset / (document.body.offsetHeight - window.innerHeight)
            );
        },
        false
    );
    AOS.init();
    return (
        <div style={{ background: '#1A1E23' }}>
            <div className='p-container'>
                <div className='p-content' data-aos="fade-right" data-aos-duration="3000" data-aos-offset="500"
                >
                    <CarouselCalorieKitchen />
                </div>
                <div className='p-content' data-aos="fade-down" data-aos-duration="3000" data-aos-offset="500"
                    data-aos-delay="300">
                    <CarouselSneakerAPI />
                </div>

                <div className='p-content' data-aos="fade-left" data-aos-duration="3000" data-aos-offset="500">
                    <CarouselCareerconnect />

                </div>
            </div>
            <div className="portfolio-group">
                <h2 className='p-h2'>Visit my portfolio for more</h2>
                <a className="link portfolio" href="http://www.dominiquehosea.com" target="_blank">My Portfolio</a>
            </div>
        </div>
    )
}

export default Projects;
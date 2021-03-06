import React from 'react';
import '../Home/Home.css';
import NavBar2 from '../../Components/NavBar/NavBar2';
import Scramble from '../../Components/Scramble/Scramble';
import SocialMedia from '../../Pages/SocialMedia/SocialMedia';
import Projects from '../../Components/Carousel/Carousel';
import PersonalBrand from '../../Components/PersonalBrand/PersonalBrand';
import SocialMediaTags from '../../Components/SocialMediaTags/SocialMediaTags';
import Footer from '../../Components/Footer/Footer';
import Testomonials from '../Testimonials/Testimonials';
import Tech from '../../Components/Technologies/Tech';
import EmailIcon from '@material-ui/icons/Email';

class Home extends React.Component {
    render() {
        return (
            <>
                <main className='home-page'>
                    <NavBar2 id='top' />
                    <div className='header'>
                        <div className='header-logo' id='header-logo'>
                            <h1 className='heading-primary'>
                                <span className="header-username">Hosea</span>
                                <span className="header-username2">Codes</span>
                                {/*
                                <div style={{ width: "50%", margin: "0 auto" }}>

                                    <a href='#aboutme' className='header-button'
                                        data-aos="fade-right"
                                        data-aos-offset="200"
                                        data-aos-duration="3000"
                                        data-aos-easing="ease-in"
                                    >Find Out More</a>
                                </div> */}

                                <div>
                                    <Scramble />
                                </div>
                            </h1>
                        </div>
                    </div>
                    <hr className="header-hr" style={{ background: 'rgb(235,183,65)', width: '100%' }} />
                    <PersonalBrand />
                    <hr style={{ background: 'rgb(235,183,65)', width: '100%' }} />
                    <Tech />
                    <hr style={{ background: 'rgb(235,183,65)', width: '100%' }} />
                    <div className='projects'>
                        <Projects />
                    </div>
                    <div className='testimonies-group'>
                        <hr style={{ background: 'rgb(235,183,65)', width: '100%' }} />

                        <h2 className="subTitle" >
                            Testimonies
                        </h2>
                    </div>

                    <hr style={{ background: 'rgb(235,183,65)', width: '100%' }} />

                    <br />
                    <br />
                    <div className='homepage-combo'>
                        <div className='socialmedia'>
                            <SocialMedia />
                        </div>
                        <div className='testomonies mobile'>
                            <Testomonials />
                        </div>
                    </div>
                    <div className='contact'>
                        <hr style={{ background: 'rgb(235,183,65)', width: '100%' }} />
                        <div className='contact-group'>
                            <h2 style={{
                                fontSize: '5rem', textAlign: 'center',
                                color: 'white', opacity: '.8', textTransform: 'uppercase',
                                textShadow: '2px 2px 2px #206a5d', letterSpacing: '1rem'
                            }}
                            >
                                Send Me A Message
                            </h2>
                            <a className='social' href="https://mail.google.com/mail/u/0/#inbox?compose=new" target="_blank" rel="noopener noreferrer">
                                <EmailIcon className='email' fontSize='large' style={{ color: '#206a5d', width: '15rem !important' }} />
                            </a>

                        </div>
                        <hr style={{ background: 'rgb(235,183,65)', width: '100%' }} />
                        <br />
                        <div style={{ width: '10%', margin: '0 auto' }}>
                            <a href='#top' className='footer-button'
                                data-aos="fade-right"
                                data-aos-offset="200"
                                data-aos-duration="3000"
                                data-aos-easing="ease-in"
                            >Back to Top</a>
                        </div>
                    </div>
                    <Footer />
                </main>
            </>
        )
    }
}


export default Home;
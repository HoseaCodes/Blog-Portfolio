//Include an “About Me” section in your website. T
//he “About Me” section is an opportunity to expand 
//on the introduction that you offer to your audience 
//when they arrive on your homepage. In this section 
//you show some of your personality and let your audience 
//connect with the person behind the work. Tap into your 
//professional story and your value proposition, and highlight 
//what you do, why you do it, and how you do it. 
//You can communicate how you became motivated to start a career 
//in your desired industry, what drives you currently, 
//the problems that you solve, and your current industry-related
//passions. There is no need to include extensive details or your 
//whole life story in the “About Me” section. Stick to the what, 
//why, and how of your professional story, and any personal 
//information that impacted or informed your professional story.
//You can include some additional, brief details about your 
//personal life in the “About Me” section, after you’ve detailed 
//your professional story. You can include information about your 
//interests, hobbies, pets, kids, partner, and geographic location. 
//Including this information can help your audience connect with 
//the person behind the work. It is important, however, to keep 
//the personal details brief and not too personal. Remember that 
//we want to cast the widest net when job searching. Use your 
//judgement and avoid including any personal details that could 
//be interpreted as less than positive by anyone in your audience.
//If you have another passion, particularly if that passion 
//compliments the work that you will be doing in your desired 
//industry, it’s also acceptable to include this information in 
//your “About Me” section. For example, if you’re a UX designer, 
//who also has a passion and talent for graphic design, you can 
//include information about your graphic design skills, and 
//include a link to your graphic design website. If you do 
//include information about a secondary passion, be sure that your 
//messaging around this interest is brief and doesn’t distract 
//from your primary messaging around your career interest.
//You can consider including a photo of yourself in the “About Me” 
//section. Adding a photo can help your audience connect with you. 
//Some job seekers include professional headshots, while others 
//opt for action photos that show them engaging in the work that 
//they are interested in doing professionally. Whichever type of 
//photo you include, it should be high-quality and represent your 
//personal brand.
//Make sure to include a downloadable PDF version of your resume in 
//your “About Me” section as well.

import React from 'react';
import './About.css';
import ccLogo from '../../icons/ccLogo.png';
import MA from '../../icons/MA.mp4';
import MA1 from '../../icons/MA1.png';
import CK from '../../icons/CK.png';
import MI from '../../icons/MI.png';
import MI2 from '../../icons/MI2.png';
import CB from '../../icons/CB.jpeg';
import AD from '../../icons/AD.jpeg';
import ST from '../../icons/ST.jpeg';
import hosea from '../../icons/hosea.jpeg';
import NavBar2 from '../../Components/NavBar/NavBar2';


const About = () => {
    return (
        <div>
            <NavBar2 />
            <div className='aHeader'></div>
            <div className="quote">
                <q>
                    What you think, you become. What you feel, you attract. What you imagine, you create.
                </q>
                <p className="pQuote">-Budda</p>
            </div>
            <div className="imageHiglights">
                <div className="leftHighlights">
                    <img src={ccLogo} width="300" alt="Career Connect Logo"></img>
                    <img src={CK} width="300" alt="Calorie Kitchen Logo"></img>
                    <img src={MI2} width="300" alt="Merge Immersive Logo"></img>
                    <img src={MI} width="300" alt="Merge Immersive Logo"></img>
                </div>
                <div className="middleHightlights">
                    <h2 className='a-content'>Hosea Codes Software Engineering Views</h2>
                    <p className="breakdown a-content">I’m a website designer working on multiple platforms. My favorite projects are developing websites for small business owners. It’s an honor to partner with these entrepreneurs and bring life to their web presence without breaking the bank. I’ll listen to your needs, come up with a plan, and create a product that gives you the best possible return on your investment.
                    When I create your website, rest assured that you will be my main focus. I’ll incorporate both design and SEO best practices while showcasing the amazing work you do.
                    Strategy: We’ll start with a strategy session to talk about your business and your vision. In this session, we will determine the goals for your site’s style and function, map out your website pages and discuss content development and image curation.
                    Build: Next, I’ll use your provided branding, content, and images to create a website you’ll be proud to share. This is a two-week process for The Professional Package and a four-week process for The Executive Package. During the website build, we’ll be in touch every day through emails and have at least 3 scheduled video calls.
                    Support: When your site is complete, I’ll teach you how to update your website yourself. You’ll never have to pay monthly maintenance fees to a web designer again. You’ll also receive two weeks of included email support after your site launches.
                    </p>
                </div>
                <div className="rightHighlights">
                    <video src={MA} width="300" playsinline="playsinline" autoplay="" muted="muted" loop="loop"></video>
                    <img src={ST} width="300" alt="Supreme Tailor Assets Logo"></img>
                    <img src={MA1} width="300" alt="Mordenized Assets Logo"></img>
                    <img src={CB} width="300" alt="Chasing Binji Logo"></img>
                    <img src={AD} width="300" alt="American Dream Logo"></img>
                </div>
            </div>
            {/* <!-- Quote/Highlight End  --> */}

            {/* <!-- Timeline  -->  */}
            <div className="timeline">
                <div id="timeline" className="container left">
                    <div className="content">
                        <h2>2020</h2>
                        <p className="timelineP a-content">I enrolled as a full stack software engineer student at General Assembly, where I was exposed to the MERN stack. In the program I was able to turn my MIS knowledge into applicable real-world solutions. I developed several full stack web apps, and worked on dynamic team projects. The projects allowed me to hone my skills in frontend development, client-servers and routing, Node.js, Express.js, MongoDB, OAuth, SPA Architecture, React, Python, JavaScript and Django web framework.</p>
                    </div>
                </div>
                <div className="container right">
                    <div className="content">
                        <h2>2017</h2>
                        <p className="timelineP a-content">My attention to detail and love for technology lead me to seek a deep understanding in Management of Information Systems and dive back into software engineering. I received my Master of Science in Management Information Systems where I got a sound understanding of relational database, SQL, C#/C++, and business processes.</p>
                    </div>
                </div>
                <div className="container left">
                    <div className="content">
                        <h2>2014</h2>
                        <p className="timelineP a-content">After I received my Bachelor of Business Administration in Management with focus in supply chain, I got a job as an Operations Manager at J.B. Hunt. During this time identified underlying problems, analyzing potential solutions and implementing resolutions.</p>
                    </div>
                </div>
                <div className="container right">
                    <div className="content">
                        <h2>2010</h2>
                        <p className="timelineP a-content">In my junior year I decided to take Java and C++ as my elective course and my interest was peaked. I new I wanted to continue but I did not know how I wanted to proceed. </p>
                    </div>
                </div>
            </div>
            {/* <!-- Timeline End  --> */}
            {/* <!-- About --> */}
            <div id="about" className="about">
                <div className="leftAbout">
                    <h2 className="aboutHeader">About Dominique Hosea</h2>
                    <p className="aboutP a-content">A driven, focused, and knowledgeable professional with several years of experience in high-stress environments in addition to a strong background in engagement and team leadership. Recent, graduate of the Software Engineering program where I had intensive training, and used JavaScript, Python, React, and Django in projects that solve business’ problems. In my graduate program I studied MIS where I leveraged C++, Java, database management, web-design, E-commerce, SAP, system analysis and project management. I also enjoy create mobile apps with Machine Learning IOS, Cloud Based Backend and SwiftUI.</p>
                </div>
                <div className="rightAbout">
                    <img className="aboutImage" width="400px" height="600px" src={hosea} alt="Dominique"></img>
                </div>
            </div>
            {/* <!-- About End --> */}
        </div>
    )
}

export default About;
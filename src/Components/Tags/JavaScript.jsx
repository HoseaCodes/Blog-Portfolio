import React from 'react';
import JS from '../../icons/JS.png'



const JavaScript = () => {
    return (
        <div className='tag-group'>
            <div className="tag-logo">
                <img src={JS} width='200' height='150' alt="JavaScript" />
            </div>
            <div className="tag-info">
                <h2 className='tag-header'>JavaScript</h2>
                <p>JavaScript is an object-oriented programming language used alongside HTML and CSS to give functionality to web pages.</p>
                <label>1 Project</label>
            </div>
        </div>

    )
}

export default JavaScript;
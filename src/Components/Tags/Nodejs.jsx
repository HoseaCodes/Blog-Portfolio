import React from 'react';
import Node from '../../icons/Node.png'


const Nodejs = () => {
    return (
        <div className='tag-group'>
            <div className="tag-logo">
                <img src={Node} width='200' height='150' alt="" />
            </div>
            <div className="tag-info">
                <h2 className='tag-header'>Node.JS</h2>
                <p>Node.js is a tool for executing JavaScript in a variety of environments.</p>
                <label>1 Project</label>
            </div>
        </div>
    )
}

export default Nodejs;
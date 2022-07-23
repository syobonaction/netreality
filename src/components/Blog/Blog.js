import React from 'react';
import GUIWindow from '../GUIWindow/GUIWindow';
import './Blog.scss';

function Blog(props) {
    return (
        <GUIWindow
            width="400"
            height="600"
            top="150px"
            left="20px"
            onClose={props.onClose}
        >
            <div className="blog_container">
                <h1>{props.header}</h1>
                <div className="image_container">
                    <img src={props.image.src} alt={props.image.alt}/>
                </div>
                <p>{props.text}</p>
            </div>
        </GUIWindow>
    );
}

export default Blog;
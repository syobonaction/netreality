import React from 'react';
import './Icon.scss';

function Icon(props) {
    return (
        <div className="icon_container">
            <div className="icon">
                <img src={props.imageUrl}></img>
            </div>
            <div className="icon_text">{props.name}</div>
        </div>
    );
}

export default Icon;
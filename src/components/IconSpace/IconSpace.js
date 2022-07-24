import React from 'react';
import GUIWindow from '../GUIWindow/GUIWindow';
import './IconSpace.scss';

function IconSpace(props) {
    return (
        <GUIWindow 
            width="600"
            height="400"
            top="150px"
            left="200px"
            onClose={props.onClose}>
            <div className="icons_container">
                {props.children}
            </div>
        </GUIWindow>
    );
}

export default IconSpace;
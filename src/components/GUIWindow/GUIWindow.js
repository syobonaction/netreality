import React from 'react';
import './GUIWindow.scss';

function GUIWindow(props) {
    const styles = {
        left: props.left,
        top: props.top,
        backgroundColor: props.bgcolor
    }

    const handleWindowResize = () => {
        //const resizeHook = document.getElementsByClassName()
    }
    
    const handleWindowClose = () => {
        
    }

    const handleWindowDrag = () => {

    }

    return (
        <div className="gui_window" style={{...styles}}>    
            <div className="window_header">
                <div className='close_container'>
                    <div className="close_button" onMouseUp={handleWindowClose}></div>
                </div>
                <div className="bar_container">
                    <div className="bar" onMouseDown={handleWindowDrag}></div>
                </div>
            </div>
            <div className="window_content">
                {props.content}
            </div>
            <div className="window_resize" onMouseDown={handleWindowResize}></div>
        </div>
    );
}

export default GUIWindow;
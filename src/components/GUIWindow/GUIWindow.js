import React, { useState }  from 'react';
import './GUIWindow.scss';

function GUIWindow(props) {
    const minWidth = parseInt(props.width);
    const minHeight = parseInt(props.height);

    const [dimensions, setDimensions] = useState({
        width: minWidth,
        height: minHeight
    });

    const [resizing, setResizing] = useState(false);

    const [resizeStyles, setResizeStyles] = useState({
        width: "12px",
        height: "12px",
        bottom: "-5px",
        right: "-5px"
    });

    const [mousePosition, setMousePosition] = useState({
        x: 0,
        y: 0
    });

    const guiStyles = {
        left: props.left,
        top: props.top,
        width: dimensions.width,
        height: dimensions.height,
        backgroundColor: props.bgcolor,
        zIndex: 2
    }

    const handleResizeClick = e => {
        setResizing(true);
        setMousePosition({
            x: e.clientX,
            y: e.clientY
        });
        setResizeStyles({
            width: "100vw",
            height: "100vw",
            bottom: "-400px",
            right: "-400px"
        });
    };
    
    const handleWindowResize = e => {
        if(resizing) {
            const newWidth = dimensions.width += (e.clientX - mousePosition.x);
            const newHeight = dimensions.height += (e.clientY - mousePosition.y);
            setDimensions({
                width: newWidth <= minWidth ? minWidth : newWidth,
                height: newHeight <= minHeight ? minHeight : newHeight
            });
            setMousePosition({
                x: e.clientX,
                y: e.clientY
            });
        }
    };

    const handleResizeMouseUpOut = () => {
        setResizing(false);
        setResizeStyles({
            width: "12px",
            height: "12px",
            bottom: "-5px",
            right: "-5px"
        });
    };

    const handleWindowClick = () => {
        
    };
    
    const handleWindowClose = () => {
        
    };

    const handleWindowDrag = () => {

    };

    return (
        <div className="gui_window" style={{...guiStyles}} onClick={handleWindowClick} onMouseUp={handleResizeMouseUpOut} onMouseOut={handleResizeMouseUpOut}>    
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
            <div className="window_resize" style={{...resizeStyles}} onMouseDown={handleResizeClick} onMouseMove={handleWindowResize}></div>
        </div>
    );
}

export default GUIWindow;
import React, { useState }  from 'react';
import './GUIWindow.scss';

function GUIWindow(props) {
    const [dimensions, setDimensions] = useState({
        width: parseInt(props.width),
        height: parseInt(props.height)
    });

    const [resizing, setResizing] = useState(false);

    const [resizeBoxDimensions, setResizeBoxDimensions] = useState({
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
        zIndex: 1
    }

    const resizeStyles = {
        width: resizeBoxDimensions.width,
        height: resizeBoxDimensions.height,
        bottom: resizeBoxDimensions.bottom,
        right: resizeBoxDimensions.right
    }

    const handleResizeClick = e => {
        setResizing(true);
        setMousePosition({
            x: e.clientX,
            y: e.clientY
        });
        setResizeBoxDimensions({
            width: "200px",
            height: "200px",
            bottom: "-100px",
            right: "-100px"
        });
    };
    
    const handleWindowResize = e => {
        if(resizing) {
            setDimensions({
                width: dimensions.width += (e.clientX - mousePosition.x),
                height: dimensions.height += (e.clientY - mousePosition.y)
            });
            setMousePosition({
                x: e.clientX,
                y: e.clientY
            });
        }
    };

    const handleResizeMouseUpOut = () => {
        setResizing(false);
        setResizeBoxDimensions({
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
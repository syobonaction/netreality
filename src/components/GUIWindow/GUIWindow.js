import React, { useState, useRef, useEffect }  from 'react';
import './GUIWindow.scss';

function GUIWindow(props) {
    const minWidth = parseInt(props.width);
    const minHeight = parseInt(props.height);

    const guiWindow = useRef(null);

    useEffect(() => {
        if (guiWindow && guiWindow.current) {
            console.log('adding');
            document.addEventListener('mousedown', handleWindowClickOutisde);
      
            return () => {
                console.log('removed the listener');
                document.removeEventListener('mousedown', handleWindowClickOutisde);
            }
          }
    }, []);

    const [dimensions, setDimensions] = useState({
        width: minWidth,
        height: minHeight
    });

    const [zIndex, setZIndex] = useState(3);

    const [position, setPosition] = useState({
        x: parseInt(props.left),
        y: parseInt(props.top)
    });

    const [isResizing, setIsResizing] = useState(false);
    const [isMoving, setIsMoving] = useState(false);

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
        left: position.x,
        top: position.y,
        width: dimensions.width,
        height: dimensions.height,
        backgroundColor: props.bgcolor,
        userSelect: (isResizing || isMoving) ? "none" : "initial",
        zIndex: zIndex
    };

    const handleWindowClickOutisde = e => {
        if(guiWindow.current) {
            if(!guiWindow.current.contains(e.target)) {
                setZIndex(2);
            } else {
                setZIndex(3);
            } 
        } 
    };

    const handleResizeClick = e => {
        setIsResizing(true);
        setMousePosition({
            x: e.clientX,
            y: e.clientY
        });
        setResizeStyles({
            width: "100vw",
            height: "100vh",
            bottom: "-400px",
            right: "-400px"
        });
    };
    
    const handleWindowResize = e => {
        if(isResizing) {
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

    const handleMouseUpOut = () => {
        setIsResizing(false);
        setIsMoving(false);
        setResizeStyles({
            width: "12px",
            height: "12px",
            bottom: "-5px",
            right: "-5px"
        });
    };

    const handleDragBarClick = e => {
        setIsMoving(true);
        setMousePosition({
            x: e.clientX,
            y: e.clientY
        });
    };

    const handleWindowMove = e => {
        if(isMoving) {
            const newPositionX = position.x += (e.clientX - mousePosition.x);
            const newPositionY = position.y += (e.clientY - mousePosition.y);
            setPosition({
                x: newPositionX,
                y: newPositionY
            });
            setMousePosition({
                x: e.clientX,
                y: e.clientY
            });
        }
    };
    
    return (
        <div className="gui_window" ref={guiWindow} style={{...guiStyles}} onMouseUp={handleMouseUpOut} onMouseOut={handleMouseUpOut}>    
            <div className="window_header">
                <div className='close_container'>
                    <div className="close_button" onMouseUp={props.onClose}></div>
                </div>
                <div className="bar_container" onMouseDown={handleDragBarClick} onMouseMove={handleWindowMove}>
                    <div className="bar_grabber_hook" onMouseDown={handleDragBarClick}></div>
                    <div className="bar"></div>
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
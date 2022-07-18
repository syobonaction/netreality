import React from 'react';
import './GUIWindow.sass';

function GUIWindow(props) {
  return (
    <div id={props.id}>
        <div class="window_header"></div>
        <div class="Window_content"></div>
    </div>
  );
}

export default GUIWindow;
import React from 'react';
import GUIWindow from '../GUIWindow/GUIWindow';
import Icon from '../Icon/Icon';
import Audio from '../Audio/Audio';
import './App.css';

function App() {
  return (
    <div>
        <p>Test</p>
        <GUIWindow 
            width="500"
            height="800"
            top="150px"
            left="20px"
            content={
            <div>
                <h1>I'm here. I'm glad you're there.</h1>
                <div className="image_container">
                    <img src="img/birds.gif"/>
                </div>
                <div className="window_text">
                    Birds
                </div>
            </div>
            }
        />
        <Icon 
            imageUrl="./img/icons/blog.png"
            name="Sismondi's Blog"
        />
        <GUIWindow 
            width="300"
            top="120px"
            left="600px"
            bgcolor="lightgray"
            content={
            <Audio 
                songTitle="GOLDEN LIVING ROOM - Breaking the Mirror of Self Reflection"
                song="./sounds/reflection.mp3"
            />}>
        </GUIWindow>
        
    </div>
  );
}

export default App;
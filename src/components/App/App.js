import React, { useEffect, useState } from 'react';
import GUIWindow from '../GUIWindow/GUIWindow';
import Icon from '../Icon/Icon';
import Audio from '../Audio/Audio';
import * as musicList from '../../data/musicList.json';
import './App.css';

function App() {
    const handleAppClose = callback => {
        callback(null);
    };

    const [ testApp, setTestApp ] = useState(<GUIWindow 
        key="test_app_01"
        width="400"
        height="600"
        top="150px"
        left="20px"
        content={
        <div>
            <h1>I'm here. I'm glad you're there.</h1>
            <div className="image_container">
                <img src="img/birds.gif"/>
            </div>
            <div className="window_text">
                I hear the bird's singing in the courtyard. Suddenly, I want to go outside.
            </div>
        </div>
        }
        onClose={() => handleAppClose(setTestApp)}
    />);

    const [ audioApp, setAudioApp ] = useState(<GUIWindow 
            key="audio_app_01"
            width="300"
            height="100"
            top="120px"
            left="600px"
            bgcolor="lightgray"
            content={
            <Audio 
                musicList={musicList}
            />}
            onClose={() => handleAppClose(setAudioApp)}>
        </GUIWindow>);

    const [apps, setApps] = useState([]);

    useEffect(() => {
        setApps([testApp, audioApp]);
    }, [audioApp, testApp]);

    return (
        <div>
            <Icon 
                imageUrl="./img/icons/blog.png"
                name="Sismondi's Blog"
            />
            {apps}
        </div>
    );
}

export default App;
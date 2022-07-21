import React from 'react';
import GUIWindow from '../GUIWindow/GUIWindow';
import Icon from '../Icon/Icon';
import Audio from '../Audio/Audio';
import './App.css';

const musicList = [
    {
        index: 0,
        title: "GOLDEN LIVING ROOM - Breaking the Mirror of Self Reflection",
        url: "./sounds/reflection.mp3"
    },
    {
        index: 1,
        title: "Peter Pearson - Green Peace",
        url: "./sounds/greenpeace.mp3" 
    },
    {
        index: 2,
        title: "松枝 賀子 - Space",
        url: "./sounds/space.mp3"
    },
    {
        index: 3,
        title: "Placid Angles - Ocean",
        url: "./sounds/ocean.mp3"
    },
    {
        index: 4,
        title: "glaciære - Sitting in the Shadow to Escape the Heat",
        url: "./sounds/sittinginshadow.mp3"
    },
    {
        index: 5,
        title: "Windows96 - Kylin Forest",
        url: "./sounds/kylinforest.mp3"
    }
];

function App() {
  return (
    <div>
        <GUIWindow 
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
        />
        <Icon 
            imageUrl="./img/icons/blog.png"
            name="Sismondi's Blog"
        />
        <GUIWindow 
            width="300"
            height="100"
            top="120px"
            left="600px"
            bgcolor="lightgray"
            content={
            <Audio 
                musicList={musicList}
            />}>
        </GUIWindow>
    </div>
  );
}

export default App;
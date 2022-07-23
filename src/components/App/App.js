import React, { useEffect, useState, useRef} from 'react';
import Icon from '../Icon/Icon';
import Audio from '../Audio/Audio';
import Blog from '../Blog/Blog';
import * as musicList from '../../data/musicList.json';
import './App.css';

function App() {
    const blogApp = <Blog 
        key="blog_app_01"
        header="I'm here. I'm glad you're there."
        image={{
            alt: "birds flying in the sunset",
            src: "img/birds.gif"
        }}
        text="I hear the birds singing in the courtyard. Suddenly, I want to go outside."
        onClose={() => handleAppClose("blogApp")}
    />;
    const musicApp = <Audio 
        key="music_app_01" 
        musicList={musicList} 
        onClose={() => handleAppClose("musicApp")}
    />;

    let appList = {
        blogApp,
        musicApp
    };
    const [apps, setApps] = useState([]);
    const [runningApps, setRunningApps] = useState([]);

    const handleAppClose = app => {
        if(runningApps.indexOf(app) >= 0) {
            if(runningApps.length <= 1) {
                setRunningApps([]);
            } else {
                const index = runningApps.indexOf(app) - 1;
                let runningAppsRef = runningApps.splice(index, 1);
                setRunningApps(runningAppsRef);
            }
        }
    };

    const handleIconDoubleClick = app => {
        if(runningApps.indexOf(app) < 0) {
            setRunningApps([...runningApps, app]);
        }
    };

    useEffect(() => {
        const newAppList = runningApps.map(app => {
            return appList[app];
        });
        setApps(newAppList);
    }, [runningApps]);

    return (
        <div>
            <Icon 
                imageUrl="./img/icons/blog.png"
                name="Sismondi's Blog"
                onDoubleClick={() => handleIconDoubleClick("blogApp")}
            />
            <Icon 
                imageUrl="./img/icons/audio.png"
                name="Music Player"
                onDoubleClick={() => handleIconDoubleClick("musicApp")}
            />
            {apps}
        </div>
    );
}

export default App;
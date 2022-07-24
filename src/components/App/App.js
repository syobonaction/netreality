import React, { useEffect, useState, useRef} from 'react';
import Icon from '../Icon/Icon';
import Audio from '../Audio/Audio';
import Blog from '../Blog/Blog';
import * as musicList from '../../data/musicList.json';
import './App.scss';
import IconSpace from '../IconSpace/IconSpace';

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
    const myFiles = <IconSpace 
        key="my_files_01"
        onClose={() => handleAppClose("myFiles")}>
        <Icon 
            imageUrl="./img/icons/folder.png"
            name="Don't Click This"
            onDoubleClick={() => {}}
        />
    </IconSpace>;

    let appList = {
        blogApp,
        musicApp,
        myFiles
    };

    const [apps, setApps] = useState([]);
    const [runningApps, setRunningApps] = useState([]);

    const handleAppClose = app => {
        if(runningApps.indexOf(app) >= 0) {
            if(runningApps.length <= 1) {
                setRunningApps([]);
            } else {
                let runningAppsRef = [...runningApps];
                const index = runningAppsRef.indexOf(app);
                runningAppsRef.splice(index, 1);
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
        <div className="app_container">
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
            <Icon 
                imageUrl="./img/icons/folder.png"
                name="My Files"
                onDoubleClick={() => handleIconDoubleClick("myFiles")}
            />
            {apps}
        </div>
    );
}

export default App;
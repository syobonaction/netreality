import React, { useState, useRef }  from 'react';
import GUIWindow from '../GUIWindow/GUIWindow';
import './Audio.scss';

function Audio(props) {
    const audioPlayer = useRef(null);
    const musicList = props.musicList;

    const getSong = (musicList) => {
        const index = Math.floor(Math.random() * musicList.length);

        return musicList[index];
    };

    const [currentSong, setCurrentSong] = useState(getSong(musicList));
    
    const handlePlayClick = () => {
        audioPlayer.current.play();
    };

    const handlePauseClick = () => {
        audioPlayer.current.pause();
    };

    const handleNextClick = () => {
        if(currentSong.index === musicList.length - 1) {
            setCurrentSong(musicList[0]);
        } else {
            setCurrentSong(musicList[currentSong.index + 1]);
        }
        audioPlayer.current.load();
    };

    const handleBackClick = () => {
        if(currentSong.index === 0) {
            setCurrentSong(musicList[musicList.length - 1]);
        } else {
            setCurrentSong(musicList[0]);
        }
        audioPlayer.current.load();
    };

    const handleVolumeIncreaseClick = () => {
        if(audioPlayer.current.volume < 1) {
            audioPlayer.current.volume += 0.1;
        }
    };

    const handleVolumeDecreaseClick = () => {
        if(audioPlayer.current.volume > 0.1) {
            audioPlayer.current.volume -= 0.1;
        }
    };

    return (
        <GUIWindow
            width="300"
            height="100"
            top="120px"
            left="600px"
            bgcolor="lightgray"
            onClose={props.onClose}
        >
            <div className="audio_container">
                <div className="audio_title">
                    <marquee>{currentSong.title}</marquee>
                </div>
                <audio ref={audioPlayer} autoPlay loop>
                    <source 
                        src={currentSong.url}
                        type="audio/mpeg"
                    />
                    Your browser does not support the audio element.
                </audio>
                <div className="audio_controls">
                    <button onClick={handlePlayClick}>Play</button> 
                    <button onClick={handlePauseClick}>Pause</button>
                    <button onClick={handleBackClick}>Back</button>
                    <button onClick={handleNextClick}>Next</button>
                    <button onClick={handleVolumeIncreaseClick}>+</button> 
                    <button onClick={handleVolumeDecreaseClick}>-</button>
                </div>
            </div>
        </GUIWindow>
    );
}

export default Audio;
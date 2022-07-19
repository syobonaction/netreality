import React, { useEffect }  from 'react';
import './Audio.scss';

function Audio(props) {
    let audioPlayer = {};
    const handlePlayClick = () => {
        audioPlayer.play();
    }

    const handlePauseClick = () => {
        audioPlayer.pause();
    }

    const handleVolumeClick = (type) => {
        switch(type) {
            case "inc":
                if(audioPlayer.volume < 1) {
                    audioPlayer.volume += 0.1;
                }   
                break;
            case "dec":
                if(audioPlayer.volume > 0.1) {
                    audioPlayer.volume -= 0.1;
                }   
                break;
            default:
                break;
        }
    }

    useEffect(() => {
        console.log('useEffect');
        audioPlayer = document.getElementById('audio_player');
    });

    return (
        <div className="audio_container">
            <div className="audio_title">
                <marquee>{props.songTitle}</marquee>
            </div>
            <audio id="audio_player" autoPlay loop>
                <source 
                    src={props.song}
                    type="audio/mpeg"
                />
                Your browser does not support the audio element.
            </audio>
            <div className="audio_controls">
                <button onClick={handlePlayClick}>Play</button> 
                <button onClick={handlePauseClick}>Pause</button> 
                <button onClick={() => handleVolumeClick("inc")}>Vol +</button> 
                <button onClick={() => handleVolumeClick("dec")}>Vol -</button>
            </div>
        </div>
    );
}

export default Audio;
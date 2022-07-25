import React, { useState } from "react";
import GUIWindow from "../GUIWindow/GUIWindow";
import Pad from "./subcomponents/Pad/Pad";
import "./Beatmaker.scss";

function Beatmaker(props) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [index, setIndex] = useState(0);
  const [bpm, setBpm] = useState(200);
  const [isMuted, setIsMuted] = useState(false);
  const [kickAudio, setKickAudio] = useState(
    "./sounds/drum-samples/kick-classic.wav"
  );
  const [snareAudio, setSnareAudio] = useState(
    "./sounds/drum-samples/snare-acoustic01.wav"
  );
  const [hihatAudio, setHihatAudio] = useState(
    "./sounds/drum-samples/hihat-acoustic01.wav"
  );

  let pads = {
    kick: [],
    snare: [],
    hihat: [],
  };
  for (let i = 0; i < 16; i++) {
    pads.kick.push(<Pad key={"k" + i} index={i} type="kick" />);
    pads.snare.push(<Pad key={"s" + i} index={i} type="snare" />);
    pads.hihat.push(<Pad key={"h" + i} index={i} type="hihat" />);
  }

  return (
    <GUIWindow
      width="1400"
      height="400"
      top="150px"
      left="20px"
      onClose={props.onClose}
    >
      <div className="beatmaker_container" onDoubleClick={props.onDoubleClick}>
        <div className="sequencer">
          <div className="kick-track">
            <div className="controls">
              <h1>Kick</h1>
              <button data-track="0" className="mute kick-volume">
                <i className="fa-solid fa-volume-xmark"></i>
              </button>
              <select name="kick-select" id="kick-select">
                <option value="./sounds/kick-classic.wav">Classic Kick</option>
                <option value="./sounds/kick-808.wav">808 Kick</option>
                <option value="./sounds/kick-heavy.wav">Kick Heavy</option>
              </select>
            </div>
            <div className="sequence">{pads.kick}</div>
          </div>

          <div className="snare-track">
            <div className="controls">
              <h1>Snare</h1>
              <button data-track="1" className="mute snare-volume">
                <i className="fa-solid fa-volume-xmark"></i>
              </button>
              <select name="snare-select" id="snare-select">
                <option value="./sounds/snare-acoustic01.wav">
                  Classic Snare
                </option>
                <option value="./sounds/snare-808.wav">808 Snare</option>
                <option value="./sounds/snare-vinyl02.wav">Snare Vinyl</option>
              </select>
            </div>
            <div className="sequence">{pads.snare}</div>
          </div>

          <div className="hihat-track">
            <div className="controls">
              <h1>Hihat</h1>
              <button data-track="2" className="mute hihat-volume">
                <i className="fa-solid fa-volume-xmark"></i>
              </button>
              <select name="hihat-select" id="hihat-select">
                <option value="./sounds/hihat-acoustic01.wav">
                  Acoustic Hihat
                </option>
                <option value="./sounds/hihat-808.wav">808 Hihat</option>
                <option value="./sounds/hihat-analog.wav">Hihat Analog</option>
              </select>
            </div>
            <div className="sequence">{pads.hihat}</div>
          </div>
          <button className="play">Play</button>
          <div className="tempo">
            <input
              type="range"
              className="tempo-slider"
              max="300"
              min="20"
              value="150"
            />
            <p>
              Tempo: <span className="tempo-nr">150</span>
            </p>
          </div>
        </div>

        <audio className="kick-sound" src="./sounds/kick-classic.wav"></audio>
        <audio
          className="snare-sound"
          src="./sounds/snare-acoustic01.wav"
        ></audio>
        <audio
          className="hihat-sound"
          src="./sounds/hihat-acoustic01.wav"
        ></audio>
      </div>
    </GUIWindow>
  );
}

export default Beatmaker;
